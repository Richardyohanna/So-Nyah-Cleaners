import { useState, useRef, useCallback } from "react";

type FontSize = "14px" | "16px" | "18px" | "20px" | "24px";
type FontFamily = "Georgia, serif" | "Courier New, monospace" | "'Trebuchet MS', sans-serif";

interface ToolbarButtonProps {
  onClick: () => void;
  active?: boolean;
  title: string;
  children: React.ReactNode;
}

const ToolbarButton = ({ onClick, active, title, children }: ToolbarButtonProps) => (
  <button
    onMouseDown={(e) => {
      e.preventDefault(); // prevent losing focus on editor
      onClick();
    }}
    title={title}
    style={{
      background: active ? "#e8e0f7" : "transparent",
      border: "none",
      borderRadius: "6px",
      padding: "6px 8px",
      cursor: "pointer",
      color: active ? "#5b3fa0" : "#555",
      fontWeight: active ? 700 : 400,
      fontSize: "14px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background 0.15s, color 0.15s",
      minWidth: "32px",
      height: "32px",
    }}
  >
    {children}
  </button>
);

const Divider = () => (
  <div style={{ width: "1px", background: "#ddd", margin: "0 4px", alignSelf: "stretch" }} />
);

export default function RichTextEditor() {
  const editorRef = useRef<HTMLDivElement>(null);
  const [fontSize, setFontSize] = useState<FontSize>("16px");
  const [fontFamily, setFontFamily] = useState<FontFamily>("Georgia, serif");
  const [isEmpty, setIsEmpty] = useState(true);
  const [activeFormats, setActiveFormats] = useState({
    bold: false,
    italic: false,
    underline: false,
    ul: false,
    ol: false,
  });

  const exec = useCallback((command: string, value?: string) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
    updateActiveFormats();
  }, []);

  const updateActiveFormats = () => {
    setActiveFormats({
      bold: document.queryCommandState("bold"),
      italic: document.queryCommandState("italic"),
      underline: document.queryCommandState("underline"),
      ul: document.queryCommandState("insertUnorderedList"),
      ol: document.queryCommandState("insertOrderedList"),
    });
  };

  const handleInput = () => {
    const text = editorRef.current?.innerText?.trim() ?? "";
    setIsEmpty(text.length === 0);
    updateActiveFormats();
  };

  const handleFontSize = (size: FontSize) => {
    setFontSize(size);
    const sel = window.getSelection();
    if (sel && sel.rangeCount > 0 && !sel.isCollapsed) {
      const range = sel.getRangeAt(0);
      const span = document.createElement("span");
      span.style.fontSize = size;
      try {
        range.surroundContents(span);
      } catch {
        // partial selection across nodes — wrap extracted content
        const fragment = range.extractContents();
        span.appendChild(fragment);
        range.insertNode(span);
      }
      sel.removeAllRanges();
      const newRange = document.createRange();
      newRange.selectNodeContents(span);
      sel.addRange(newRange);
    }
    editorRef.current?.focus();
  };

  const handleFontFamily = (font: FontFamily) => {
    setFontFamily(font);
    exec("fontName", font);
  };

  const handlePost = () => {
    const content = editorRef.current?.innerHTML ?? "";
    if (!content.trim()) return;
    alert("Post submitted!\n\n" + editorRef.current?.innerText);
  };

  const charCount = editorRef.current?.innerText?.trim().length ?? 0;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f3f7",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Georgia, serif",
        padding: "24px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "640px",
          background: "#fff",
          borderRadius: "16px",
          boxShadow: "0 4px 32px rgba(80,50,140,0.10), 0 1px 4px rgba(0,0,0,0.06)",
          overflow: "hidden",
          border: "1px solid #ede8f5",
        }}
      >
        {/* Toolbar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2px",
            padding: "10px 14px",
            borderBottom: "1px solid #ede8f5",
            background: "#faf9fc",
            flexWrap: "wrap",
          }}
        >
          <ToolbarButton onClick={() => exec("bold")} active={activeFormats.bold} title="Bold (Ctrl+B)">
            <strong>B</strong>
          </ToolbarButton>
          <ToolbarButton onClick={() => exec("italic")} active={activeFormats.italic} title="Italic (Ctrl+I)">
            <em>I</em>
          </ToolbarButton>
          <ToolbarButton onClick={() => exec("underline")} active={activeFormats.underline} title="Underline (Ctrl+U)">
            <span style={{ textDecoration: "underline" }}>U</span>
          </ToolbarButton>

          <Divider />

          <ToolbarButton onClick={() => exec("insertUnorderedList")} active={activeFormats.ul} title="Bullet list">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="2" cy="4" r="1.5" fill="currentColor"/>
              <rect x="5" y="3" width="9" height="2" rx="1" fill="currentColor"/>
              <circle cx="2" cy="8" r="1.5" fill="currentColor"/>
              <rect x="5" y="7" width="9" height="2" rx="1" fill="currentColor"/>
              <circle cx="2" cy="12" r="1.5" fill="currentColor"/>
              <rect x="5" y="11" width="9" height="2" rx="1" fill="currentColor"/>
            </svg>
          </ToolbarButton>
          <ToolbarButton onClick={() => exec("insertOrderedList")} active={activeFormats.ol} title="Numbered list">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <text x="1" y="5.5" fontSize="5" fill="currentColor" fontFamily="serif">1.</text>
              <rect x="6" y="3" width="8" height="2" rx="1" fill="currentColor"/>
              <text x="1" y="9.5" fontSize="5" fill="currentColor" fontFamily="serif">2.</text>
              <rect x="6" y="7" width="8" height="2" rx="1" fill="currentColor"/>
              <text x="1" y="13.5" fontSize="5" fill="currentColor" fontFamily="serif">3.</text>
              <rect x="6" y="11" width="8" height="2" rx="1" fill="currentColor"/>
            </svg>
          </ToolbarButton>

          <Divider />

          {/* Font size */}
          <select
            value={fontSize}
            onChange={(e) => handleFontSize(e.target.value as FontSize)}
            title="Font size"
            style={{
              border: "1px solid #ddd",
              borderRadius: "6px",
              padding: "4px 6px",
              fontSize: "13px",
              color: "#555",
              background: "#fff",
              cursor: "pointer",
              height: "32px",
            }}
          >
            <option value="14px">14</option>
            <option value="16px">16</option>
            <option value="18px">18</option>
            <option value="20px">20</option>
            <option value="24px">24</option>
          </select>

          {/* Font family */}
          <select
            value={fontFamily}
            onChange={(e) => handleFontFamily(e.target.value as FontFamily)}
            title="Font family"
            style={{
              border: "1px solid #ddd",
              borderRadius: "6px",
              padding: "4px 6px",
              fontSize: "13px",
              color: "#555",
              background: "#fff",
              cursor: "pointer",
              height: "32px",
            }}
          >
            <option value="Georgia, serif">Georgia</option>
            <option value="Courier New, monospace">Courier New</option>
            <option value="'Trebuchet MS', sans-serif">Trebuchet</option>
          </select>

          <Divider />

          {/* Text align */}
          <ToolbarButton onClick={() => exec("justifyLeft")} title="Align left">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="1" y="3" width="14" height="2" rx="1" fill="currentColor"/>
              <rect x="1" y="7" width="10" height="2" rx="1" fill="currentColor"/>
              <rect x="1" y="11" width="12" height="2" rx="1" fill="currentColor"/>
            </svg>
          </ToolbarButton>
          <ToolbarButton onClick={() => exec("justifyCenter")} title="Center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="1" y="3" width="14" height="2" rx="1" fill="currentColor"/>
              <rect x="3" y="7" width="10" height="2" rx="1" fill="currentColor"/>
              <rect x="2" y="11" width="12" height="2" rx="1" fill="currentColor"/>
            </svg>
          </ToolbarButton>
        </div>

        {/* Editable area */}
        <div style={{ position: "relative", minHeight: "180px" }}>
          {isEmpty && (
            <div
              style={{
                position: "absolute",
                top: "20px",
                left: "20px",
                color: "#bbb",
                fontSize: fontSize,
                fontFamily,
                pointerEvents: "none",
                userSelect: "none",
              }}
            >
              Start writing your pure narrative here...
            </div>
          )}
          <div
            ref={editorRef}
            contentEditable
            suppressContentEditableWarning
            onInput={handleInput}
            onKeyUp={updateActiveFormats}
            onMouseUp={updateActiveFormats}
            style={{
              minHeight: "180px",
              padding: "20px",
              outline: "none",
              fontSize,
              fontFamily,
              color: "#222",
              lineHeight: "1.7",
              caretColor: "#7c4dff",
            }}
          />
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 20px",
            borderTop: "1px solid #ede8f5",
            background: "#faf9fc",
          }}
        >
          <span style={{ fontSize: "12px", color: "#aaa" }}>
            {charCount} character{charCount !== 1 ? "s" : ""}
          </span>
          <button
            onClick={handlePost}
            disabled={isEmpty}
            style={{
              background: isEmpty ? "#e0d9f0" : "linear-gradient(135deg, #7c4dff, #5b3fa0)",
              color: isEmpty ? "#aaa" : "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "9px 24px",
              fontSize: "14px",
              fontFamily: "Georgia, serif",
              fontWeight: 600,
              cursor: isEmpty ? "not-allowed" : "pointer",
              letterSpacing: "0.02em",
              transition: "opacity 0.2s",
            }}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}