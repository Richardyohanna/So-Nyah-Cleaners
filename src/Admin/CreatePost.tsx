// src/components/CreatePost.tsx
// Key change: after a successful PUBLISH, calls the notify-subscribers Edge Function
// Everything else is identical to your current CreatePost.

import { useState, useRef, useCallback, useEffect } from "react";
import { supabase, type Post } from "../Client/lib/supabase";

type FontSize = "14px" | "16px" | "18px" | "20px" | "24px";

interface FormData {
  title: string;
  introduction: string;
  image: File | null;
  imagePreview: string | null;
  existingImageUrl: string | null;
  hashtags: string[];
  hashtagInput: string;
  meta: string;
}

interface Props {
  editPost?: Post | null;
  onSaved?: () => void;
}

const ToolbarBtn = ({ onClick, active, title, children }: {
  onClick: () => void; active?: boolean; title: string; children: React.ReactNode;
}) => (
  <button onMouseDown={(e) => { e.preventDefault(); onClick(); }} title={title}
    className={`flex items-center justify-center min-w-[28px] h-[28px] px-[6px] py-[4px] rounded-[5px] text-[12px] transition cursor-pointer ${active ? "bg-[#e6f0ff] text-[#2563eb]" : "bg-transparent text-gray-500"}`}>
    {children}
  </button>
);

const Sep = () => <div className="w-[1px] bg-[#e5e7eb] mx-[2px] self-stretch" />;

function RichEditor({ placeholder, minHeight = 140, initialHTML = "", editorRef }: {
  placeholder: string; minHeight?: number; initialHTML?: string;
  editorRef: React.RefObject<HTMLDivElement | null>;
}) {
  const [empty, setEmpty] = useState(!initialHTML);
  const [fontSize, setFontSize] = useState<FontSize>("16px");
  const [fmt, setFmt] = useState({ bold: false, italic: false, underline: false, ul: false, ol: false });

  useEffect(() => {
    if (editorRef.current && initialHTML) { editorRef.current.innerHTML = initialHTML; setEmpty(false); }
  }, [initialHTML]);

  const exec = useCallback((cmd: string, val?: string) => {
    document.execCommand(cmd, false, val); editorRef.current?.focus(); refresh();
  }, []);

  const refresh = () => setFmt({
    bold: document.queryCommandState("bold"), italic: document.queryCommandState("italic"),
    underline: document.queryCommandState("underline"), ul: document.queryCommandState("insertUnorderedList"),
    ol: document.queryCommandState("insertOrderedList"),
  });

  const applyFontSize = (size: FontSize) => {
    setFontSize(size);
    const sel = window.getSelection();
    if (sel && sel.rangeCount > 0 && !sel.isCollapsed) {
      const range = sel.getRangeAt(0); const span = document.createElement("span"); span.style.fontSize = size;
      try { range.surroundContents(span); } catch { const frag = range.extractContents(); span.appendChild(frag); range.insertNode(span); }
    }
    editorRef.current?.focus();
  };

  return (
    <div className="border-[1.5px] border-gray-200 rounded-[10px] overflow-hidden bg-white">
      <div className="flex items-center gap-[2px] px-2 py-1.5 border-b border-gray-100 bg-gray-50 flex-wrap">
        <ToolbarBtn onClick={() => exec("bold")} active={fmt.bold} title="Bold"><strong>B</strong></ToolbarBtn>
        <ToolbarBtn onClick={() => exec("italic")} active={fmt.italic} title="Italic"><em>I</em></ToolbarBtn>
        <ToolbarBtn onClick={() => exec("underline")} active={fmt.underline} title="Underline"><span style={{ textDecoration: "underline" }}>U</span></ToolbarBtn>
        <Sep />
        <ToolbarBtn onClick={() => exec("insertUnorderedList")} active={fmt.ul} title="Bullet list">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="2" cy="4" r="1.5" fill="currentColor"/><rect x="5" y="3" width="9" height="2" rx="1" fill="currentColor"/><circle cx="2" cy="8" r="1.5" fill="currentColor"/><rect x="5" y="7" width="9" height="2" rx="1" fill="currentColor"/><circle cx="2" cy="12" r="1.5" fill="currentColor"/><rect x="5" y="11" width="9" height="2" rx="1" fill="currentColor"/></svg>
        </ToolbarBtn>
        <ToolbarBtn onClick={() => exec("insertOrderedList")} active={fmt.ol} title="Numbered list">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><text x="0" y="6" fontSize="6" fill="currentColor" fontFamily="serif">1.</text><rect x="6" y="3.5" width="8" height="1.8" rx="0.9" fill="currentColor"/><text x="0" y="10" fontSize="6" fill="currentColor" fontFamily="serif">2.</text><rect x="6" y="7.5" width="8" height="1.8" rx="0.9" fill="currentColor"/><text x="0" y="14" fontSize="6" fill="currentColor" fontFamily="serif">3.</text><rect x="6" y="11.5" width="8" height="1.8" rx="0.9" fill="currentColor"/></svg>
        </ToolbarBtn>
        <Sep />
        <ToolbarBtn onClick={() => exec("justifyLeft")} title="Left"><svg width="14" height="14" viewBox="0 0 16 16"><rect x="1" y="3" width="14" height="1.8" rx="0.9" fill="currentColor"/><rect x="1" y="7" width="10" height="1.8" rx="0.9" fill="currentColor"/><rect x="1" y="11" width="12" height="1.8" rx="0.9" fill="currentColor"/></svg></ToolbarBtn>
        <ToolbarBtn onClick={() => exec("justifyCenter")} title="Center"><svg width="14" height="14" viewBox="0 0 16 16"><rect x="1" y="3" width="14" height="1.8" rx="0.9" fill="currentColor"/><rect x="3" y="7" width="10" height="1.8" rx="0.9" fill="currentColor"/><rect x="2" y="11" width="12" height="1.8" rx="0.9" fill="currentColor"/></svg></ToolbarBtn>
        <Sep />
        <select value={fontSize} onChange={(e) => applyFontSize(e.target.value as FontSize)}
          className="border border-gray-200 rounded-[5px] px-[4px] py-[2px] text-[11px] text-gray-500 bg-white h-[28px] cursor-pointer">
          {(["14px","16px","18px","20px","24px"] as FontSize[]).map(s => <option key={s} value={s}>{s.replace("px","")}</option>)}
        </select>
        <ToolbarBtn onClick={() => exec("formatBlock", "blockquote")} title="Quote">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M3 4C1.9 4 1 4.9 1 6v2c0 1.1.9 2 2 2h1l-1 3h2l1-3V6c0-1.1-.9-2-2-2H3zm7 0c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1l-1 3h2l1-3V6c0-1.1-.9-2-2-2h-1z"/></svg>
        </ToolbarBtn>
      </div>
      <div className="relative">
        {empty && <div className="absolute top-3 left-4 text-gray-400 text-sm italic pointer-events-none">{placeholder}</div>}
        <div ref={editorRef} contentEditable suppressContentEditableWarning
          onInput={() => setEmpty((editorRef.current?.innerText?.trim() ?? "").length === 0)}
          onKeyUp={refresh} onMouseUp={refresh} style={{ minHeight }}
          className="p-4 outline-none text-base font-normal leading-relaxed caret-[#2563eb]" />
      </div>
    </div>
  );
}

function ImageUpload({ preview, onFile, onRemove }: {
  preview: string | null; onFile: (f: File) => void; onRemove: () => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [drag, setDrag] = useState(false);
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault(); setDrag(false);
    const file = e.dataTransfer.files[0];
    if (file?.type.startsWith("image/")) onFile(file);
  };
  return (
    <div>
      <div onClick={() => !preview && inputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
        onDragLeave={() => setDrag(false)} onDrop={handleDrop}
        className={`border-2 border-dashed rounded-[10px] overflow-hidden transition-all duration-200 min-h-[140px] flex items-center justify-center relative ${!preview ? "cursor-pointer" : ""} ${drag ? "border-blue-600 bg-blue-50" : "border-gray-300 bg-gray-50"}`}>
        <input ref={inputRef} type="file" accept="image/*" className="hidden"
          onChange={(e) => { const f = e.target.files?.[0]; if (f) onFile(f); }} />
        {preview ? (
          <img src={preview} alt="Feature" className="w-full max-h-[220px] object-cover block" />
        ) : (
          <div className="text-center px-5 py-8">
            <div className="w-10 h-10 rounded-[10px] bg-gray-200 flex items-center justify-center mx-auto mb-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
            </div>
            <p className="m-0 text-sm text-gray-500 font-[Georgia,serif]">Upload Featured Image</p>
            <p className="m-0 text-xs text-gray-400 mt-1">Click or drag & drop · PNG, JPG, WebP</p>
          </div>
        )}
      </div>
      {preview && (
        <div className="flex gap-3 mt-2">
          <button onClick={() => inputRef.current?.click()} className="text-xs text-blue-500 hover:underline cursor-pointer">Change image</button>
          <button onClick={onRemove} className="text-xs text-red-500 hover:underline cursor-pointer">Remove</button>
          <input ref={inputRef} type="file" accept="image/*" className="hidden"
            onChange={(e) => { const f = e.target.files?.[0]; if (f) onFile(f); }} />
        </div>
      )}
    </div>
  );
}

function HashtagInput({ tags, input, onChange, onAdd, onRemove }: {
  tags: string[]; input: string; onChange: (v: string) => void; onAdd: () => void; onRemove: (i: number) => void;
}) {
  return (
    <div className="border-[1.5px] border-gray-200 rounded-[10px] bg-white px-3 py-2 flex flex-wrap gap-[6px] items-center">
      {tags.map((tag, i) => (
        <span key={i} className="bg-blue-50 text-blue-600 rounded-full px-2.5 py-[3px] text-[12px] flex items-center gap-1">
          #{tag}
          <button onClick={() => onRemove(i)} className="bg-none border-none cursor-pointer text-blue-300 text-[14px] leading-none p-0">✕</button>
        </span>
      ))}
      <input value={input} onChange={(e) => onChange(e.target.value.replace(/\s/g, ""))}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === ",") { e.preventDefault(); onAdd(); } }}
        placeholder={tags.length === 0 ? "Add hashtags (press Enter)…" : ""}
        className="border-0 outline-none flex-1 min-w-[100px] text-sm text-gray-700 bg-transparent" />
    </div>
  );
}

const Label = ({ text }: { text: string }) => (
  <div className="flex items-center gap-[10px] mb-[8px]">
    <span className="text-[12px] font-semibold text-gray-700 tracking-wide uppercase font-[Georgia,serif]">{text}</span>
  </div>
);

function Checklist({ form }: { form: FormData }) {
  return (
    <>
      {[
        { label: "Title added", done: form.title.length > 0 },
        { label: "Introduction written", done: form.introduction.length > 0 },
        { label: "Image uploaded", done: !!(form.image || form.existingImageUrl) },
        { label: "Hashtags added", done: form.hashtags.length > 0 },
      ].map(({ label, done }) => (
        <div key={label} className="flex items-center gap-2 mb-2">
          <div className={`w-4 h-4 rounded-sm flex-shrink-0 ${done ? "bg-blue-600 border-blue-600" : "bg-gray-200 border-gray-300"} border flex items-center justify-center`}>
            {done && <svg width="10" height="10" viewBox="0 0 10 10"><path d="M2 5l2.5 2.5L8 3" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>}
          </div>
          <span className={`text-[12px] ${done ? "text-gray-700" : "text-gray-400"}`}>{label}</span>
        </div>
      ))}
    </>
  );
}

function SidebarCards({ form, setForm }: { form: FormData; setForm: React.Dispatch<React.SetStateAction<FormData>> }) {
  return (
    <>
      <div className="bg-white rounded-[12px] p-4 shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
        <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-3">SEO & Visibility</div>
        <label className="text-[12px] text-gray-600 block mb-1">Meta description</label>
        <textarea rows={3} value={form.meta} onChange={(e) => setForm((f) => ({ ...f, meta: e.target.value }))}
          placeholder="Brief description for search engines…"
          className="w-full border-[1.5px] border-gray-200 rounded-[8px] px-2.5 py-2 text-[12px] font-[Georgia,serif] text-gray-700 resize-none outline-none box-border" />
      </div>
      <div className="bg-white rounded-[12px] p-4 shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
        <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-3">Schedule</div>
        {[{ icon: "📅", label: "Publish Date", value: "Immediate" }, { icon: "🌍", label: "Visibility", value: "Public" }].map(({ icon, label, value }) => (
          <div key={label} className="flex items-center justify-between py-2.5 border-b border-gray-100">
            <div className="flex items-center gap-2"><span className="text-base">{icon}</span><span className="text-[12px] text-gray-500">{label}</span></div>
            <span className="text-[11px] bg-green-50 text-green-600 px-2 py-0.5 rounded-full font-semibold">{value}</span>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-[12px] p-4 shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
        <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-3">Post Checklist</div>
        <Checklist form={form} />
      </div>
    </>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function CreatePost({ editPost = null, onSaved }: Props) {
  const editorRef = useRef<HTMLDivElement>(null);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  // Track if subscribers were notified for success feedback
  const [notifyStatus, setNotifyStatus] = useState<"idle"|"notified"|"skipped">("idle");

  const [form, setForm] = useState<FormData>({
    title: "", introduction: "", image: null, imagePreview: null,
    existingImageUrl: null, hashtags: [], hashtagInput: "", meta: "",
  });

  useEffect(() => {
    if (editPost) {
      setForm({
        title: editPost.title, introduction: editPost.introduction,
        image: null, imagePreview: editPost.image_url, existingImageUrl: editPost.image_url,
        hashtags: editPost.hashtags ?? [], hashtagInput: "", meta: editPost.meta ?? "",
      });
    } else {
      setForm({ title: "", introduction: "", image: null, imagePreview: null, existingImageUrl: null, hashtags: [], hashtagInput: "", meta: "" });
      if (editorRef.current) editorRef.current.innerHTML = "";
    }
  }, [editPost]);

  const handleImage = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => setForm((f) => ({ ...f, image: file, imagePreview: e.target?.result as string, existingImageUrl: null }));
    reader.readAsDataURL(file);
  };

  const addTag = () => {
    const tag = form.hashtagInput.trim().replace(/^#/, "");
    if (tag && !form.hashtags.includes(tag)) setForm((f) => ({ ...f, hashtags: [...f.hashtags, tag], hashtagInput: "" }));
    else setForm((f) => ({ ...f, hashtagInput: "" }));
  };

  const removeTag = (i: number) => setForm((f) => ({ ...f, hashtags: f.hashtags.filter((_, idx) => idx !== i) }));

  const uploadImage = async (file: File): Promise<string | null> => {
    const ext  = file.name.split(".").pop();
    const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    const { error } = await supabase.storage.from("post-images").upload(path, file, { upsert: true });
    if (error) { console.error("Storage upload error:", error.message); return null; }
    const { data } = supabase.storage.from("post-images").getPublicUrl(path);
    return data.publicUrl;
  };

  const save = async (status: "draft" | "published") => {
    setSaving(true);
    setSaveError(null);
    setNotifyStatus("idle");

    const content = editorRef.current?.innerHTML ?? "";

    let image_url: string | null = form.existingImageUrl;
    if (form.image) {
      image_url = await uploadImage(form.image);
      if (!image_url) { setSaveError("Image upload failed. Please try again."); setSaving(false); return; }
    }

    const payload = {
      title: form.title, introduction: form.introduction, content,
      image_url, hashtags: form.hashtags, meta: form.meta, status,
    };

    let error; let savedPost: Post | null = null;
    if (editPost) {
      const res = await supabase.from("posts").update(payload).eq("id", editPost.id).select().single();
      error = res.error; savedPost = res.data as Post;
    } else {
      const res = await supabase.from("posts").insert([payload]).select().single();
      error = res.error; savedPost = res.data as Post;
    }

    setSaving(false);

    if (error) { setSaveError(error.message); return; }

    // ── Notify subscribers only on PUBLISH (not draft) ────────────────────────
    if (status === "published" && savedPost) {
      try {
        const { error: fnError } = await supabase.functions.invoke("notify-subscribers", {
          body: {
            postId:       savedPost.id,
            title:        savedPost.title,
            introduction: savedPost.introduction,
            imageUrl:     savedPost.image_url,
            hashtags:     savedPost.hashtags,
          },
        });
        setNotifyStatus(fnError ? "skipped" : "notified");
        if (fnError) console.warn("Subscriber notification warning:", fnError);
      } catch (e) {
        console.warn("Could not notify subscribers:", e);
        setNotifyStatus("skipped");
      }
    }

    onSaved?.();
  };

  return (
    <div className="font-[Georgia,serif]">
      <div className="flex justify-end gap-2 mb-4 flex-wrap items-center">
        {saveError && <p className="text-xs text-red-500 self-center mr-auto">{saveError}</p>}
        {notifyStatus === "notified" && (
          <p className="text-xs text-green-600 self-center mr-auto flex items-center gap-1">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>
            Subscribers notified!
          </p>
        )}
        <button onClick={() => save("draft")} disabled={saving}
          className="border border-gray-300 bg-white rounded-lg px-4 py-2 text-sm text-gray-700 cursor-pointer font-[Georgia,serif] hover:bg-gray-50 disabled:opacity-50">
          {saving ? "Saving…" : "Save Draft"}
        </button>
        <button onClick={() => save("published")} disabled={saving}
          className="bg-[var(--primary)] border-none rounded-lg px-5 py-2 text-sm text-white cursor-pointer font-[Georgia,serif] font-semibold hover:opacity-90 disabled:opacity-50">
          {saving ? "Publishing…" : "Publish Post"}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 lg:gap-6 max-w-[1200px] mx-auto">
        <div className="flex-1 flex flex-col gap-4 md:gap-5 min-w-0">

          <div className="bg-white rounded-[12px] p-4 md:p-5 shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
            <Label text="Article Title" />
            <input value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
              placeholder="Enter your article title…"
              className="border-0 outline-none w-full text-lg md:text-[22px] text-gray-700 bg-transparent" />
            <div className="border-t border-gray-200 mt-2 pt-1.5 flex justify-end">
              <span className="text-[11px] text-gray-500">{form.title.length} / 120</span>
            </div>
          </div>

          <div className="bg-white rounded-[12px] p-4 md:p-5 shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
            <Label text="Article Introduction" />
            <textarea value={form.introduction} onChange={(e) => setForm((f) => ({ ...f, introduction: e.target.value }))}
              placeholder="Write a compelling introduction…" rows={3}
              className="w-full border-[1.5px] border-gray-200 rounded-[10px] px-3 py-3 outline-none resize-y text-[14px] md:text-[15px] text-gray-700 leading-[1.7] bg-white box-border" />
          </div>

          <div className="bg-white rounded-[12px] p-4 md:p-5 shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
            <Label text="Article Image" />
            <ImageUpload preview={form.imagePreview} onFile={handleImage}
              onRemove={() => setForm((f) => ({ ...f, image: null, imagePreview: null, existingImageUrl: null }))} />
          </div>

          <div className="bg-white rounded-[12px] p-4 md:p-5 shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
            <Label text="Article Detail" />
            <RichEditor placeholder="Start writing your article here…" minHeight={180}
              initialHTML={editPost?.content ?? ""} editorRef={editorRef} />
          </div>

          <div className="bg-white rounded-[12px] p-4 md:p-5 shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
            <Label text="Article Hashtags" />
            <HashtagInput tags={form.hashtags} input={form.hashtagInput}
              onChange={(v) => setForm((f) => ({ ...f, hashtagInput: v }))}
              onAdd={addTag} onRemove={removeTag} />
            <p className="mt-2 mb-0 text-xs text-gray-400">
              Press <kbd className="bg-gray-100 border border-gray-300 rounded px-1 py-0.5 text-[11px]">Enter</kbd> or{" "}
              <kbd className="bg-gray-100 border border-gray-300 rounded px-1 py-0.5 text-[11px]">,</kbd> to add a tag
            </p>
          </div>

          <div className="flex flex-col gap-4 lg:hidden">
            <SidebarCards form={form} setForm={setForm} />
          </div>
        </div>

        <div className="hidden lg:flex flex-col gap-4 w-[260px] xl:w-[280px] flex-shrink-0">
          <SidebarCards form={form} setForm={setForm} />
        </div>
      </div>
    </div>
  );
}