// src/components/Admin.tsx
import { useState, useEffect, useCallback } from "react";
import logo from "../assets/logo.jpeg";
import CreatePost from "./CreatePost";
import { supabase, type Post } from "../Client/lib/supabase";

type ViewType = "all" | "create" | "draft";

// ── tiny toast ────────────────────────────────────────────────────────────────
function Toast({ msg, type }: { msg: string; type: "success" | "error" }) {
  return (
    <div
      className={`fixed bottom-5 right-5 z-50 px-4 py-3 rounded-xl shadow-lg text-sm font-medium text-white transition-all
        ${type === "success" ? "bg-green-600" : "bg-red-500"}`}
    >
      {msg}
    </div>
  );
}

// ── confirm modal ─────────────────────────────────────────────────────────────
function ConfirmModal({
  title,
  onConfirm,
  onCancel,
}: {
  title: string;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/30 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm">
        <h3 className="font-semibold text-gray-800 mb-2">Delete post?</h3>
        <p className="text-sm text-gray-500 mb-5">
          "{title}" will be permanently removed. This cannot be undone.
        </p>
        <div className="flex gap-3 justify-end">
          <button
            onClick={onCancel}
            className="px-4 py-2 text-sm rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-700"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-sm rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

// ── post row card ─────────────────────────────────────────────────────────────
function PostCard({
  post,
  onEdit,
  onDelete,
}: {
  post: Post;
  onEdit: (p: Post) => void;
  onDelete: (p: Post) => void;
}) {
  const date = new Date(post.created_at).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col sm:flex-row sm:items-center gap-3">
      {/* image thumbnail */}
      {post.image_url ? (
        <img
          src={post.image_url}
          alt={post.title}
          className="w-full sm:w-16 h-24 sm:h-12 object-cover rounded-lg flex-shrink-0"
        />
      ) : (
        <div className="w-full sm:w-16 h-10 sm:h-12 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
        </div>
      )}

      {/* info */}
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-gray-800 text-sm md:text-base truncate">
          {post.title || <span className="text-gray-400 italic">Untitled</span>}
        </h3>
        <p className="text-xs text-gray-400 mt-0.5">{date}</p>
        {post.hashtags?.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-1">
            {post.hashtags.slice(0, 4).map((t) => (
              <span key={t} className="text-[10px] bg-blue-50 text-blue-500 rounded-full px-2 py-0.5">
                #{t}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* status badge */}
      <span
        className={`text-[11px] font-semibold px-2.5 py-1 rounded-full flex-shrink-0 self-start sm:self-center
          ${post.status === "published"
            ? "bg-green-50 text-green-600"
            : "bg-amber-50 text-amber-600"}`}
      >
        {post.status === "published" ? "Published" : "Draft"}
      </span>

      {/* actions */}
      <div className="flex gap-2 flex-shrink-0 self-end sm:self-center">
        <button
          onClick={() => onEdit(post)}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg border border-purple-200 text-purple-600 hover:bg-purple-50 transition font-medium"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
          </svg>
          Edit
        </button>
        <button
          onClick={() => onDelete(post)}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg border border-red-200 text-red-500 hover:bg-red-50 transition font-medium"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <polyline points="3 6 5 6 21 6"/>
            <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
            <path d="M10 11v6M14 11v6"/>
            <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
          </svg>
          Delete
        </button>
      </div>
    </div>
  );
}

// ── empty state ───────────────────────────────────────────────────────────────
function EmptyState({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-gray-400">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="mb-3">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>
      <p className="text-sm">{label}</p>
    </div>
  );
}

// ── Admin ─────────────────────────────────────────────────────────────────────
const Admin = () => {
  const [activeView, setActiveView] = useState<ViewType>("all");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [editPost, setEditPost] = useState<Post | null>(null);

  // confirm delete
  const [deleteTarget, setDeleteTarget] = useState<Post | null>(null);
  const [deleting, setDeleting] = useState(false);

  console.log("deleting", deleting);
  // toast
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" } | null>(null);
  const showToast = (msg: string, type: "success" | "error" = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleLogout = async () => {
  await supabase.auth.signOut();

};

  // ── fetch from supabase ────────────────────────────────────────────────────
  const fetchPosts = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .order("updated_at", { ascending: false });

    if (error) {
      showToast("Failed to load posts", "error");
    } else {
      setPosts((data as Post[]) ?? []);
    }
    setLoading(false);
  }, []);

  useEffect(() => { fetchPosts(); }, [fetchPosts]);

  // ── delete ─────────────────────────────────────────────────────────────────
  const handleDeleteConfirm = async () => {
    if (!deleteTarget) return;
    setDeleting(true);

    // delete image from storage if present
    if (deleteTarget.image_url) {
      const path = deleteTarget.image_url.split("/post-images/")[1];
      if (path) await supabase.storage.from("post-images").remove([path]);
    }

    const { error } = await supabase.from("posts").delete().eq("id", deleteTarget.id);
    setDeleting(false);
    setDeleteTarget(null);

    if (error) {
      showToast("Delete failed: " + error.message, "error");
    } else {
      showToast("Post deleted");
      fetchPosts();
    }
  };

  // ── edit → open CreatePost form ────────────────────────────────────────────
  const handleEdit = (post: Post) => {
    setEditPost(post);
    setActiveView("create");
    setSidebarOpen(false);
  };

  // ── called by CreatePost after save/publish ────────────────────────────────
  const handlePostSaved = () => {
    setEditPost(null);
    fetchPosts();
    showToast("Post saved successfully");
  };

  const navItems: { view: ViewType; label: string }[] = [
    { view: "all", label: "All Posts" },
    { view: "create", label: "Create Post" },
    { view: "draft", label: "Drafts" },
  ];

  const handleNav = (view: ViewType) => {
    if (view !== "create") setEditPost(null);
    setActiveView(view);
    setSidebarOpen(false);
  };

  //const published = posts.filter((p) => p.status === "published");
  const drafts    = posts.filter((p) => p.status === "draft");

  return (
    <div className="flex h-screen bg-[#f9fafb] overflow-hidden relative">

      {/* toast */}
      {toast && <Toast msg={toast.msg} type={toast.type} />}

      {/* confirm modal */}
      {deleteTarget && (
        <ConfirmModal
          title={deleteTarget.title}
          onConfirm={handleDeleteConfirm}
          onCancel={() => setDeleteTarget(null)}
        />
      )}

      {/* mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* sidebar */}
      <div
        className={`
          fixed md:relative z-30 md:z-auto h-full
          w-[220px] md:w-[180px] lg:w-[210px] xl:w-[230px]
          bg-white shadow-md flex flex-col p-4
          transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        <img src={logo} alt="Logo" className="-ml-4 mb-8 mx-auto w-[80%] object-contain" />
        <div className="flex flex-col gap-2">
          {navItems.map(({ view, label }) => (
            <button
              key={view}
              onClick={() => handleNav(view)}
              className={`text-left px-4 py-2.5 rounded-lg text-sm transition flex items-center justify-between ${
                activeView === view
                  ? "bg-purple-100 text-purple-600 font-semibold"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              {label}
              {view === "all" && posts.length > 0 && (
                <span className="text-[10px] bg-purple-100 text-purple-500 rounded-full px-1.5 py-0.5 font-bold">
                  {posts.length}
                </span>
              )}
              {view === "draft" && drafts.length > 0 && (
                <span className="text-[10px] bg-amber-100 text-amber-600 rounded-full px-1.5 py-0.5 font-bold">
                  {drafts.length}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="mt-auto pt-4 border-t border-gray-100">
        <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm text-red-400 hover:bg-red-50 transition"
        >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
            <polyline points="16 17 21 12 16 7"/>
            <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
            Sign Out
        </button>
        </div>
      </div>

      {/* main */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* header */}
        <div className="h-[64px] md:h-[72px] bg-white shadow-sm flex items-center px-4 md:px-6 gap-3 flex-shrink-0">
          <button
            className="md:hidden p-1.5 rounded-lg hover:bg-gray-100 flex-shrink-0"
            onClick={() => setSidebarOpen(true)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>

          {activeView !== "create" && (
            <h2 className="text-base md:text-xl font-semibold flex-1">
              {activeView === "all" ? "All Posts" : "Draft Posts"}
            </h2>
          )}

          {activeView === "create" && (
            <div className="flex items-center justify-between flex-1 min-w-0">
              <span className="text-base md:text-xl font-semibold truncate">
                {editPost ? "Edit Post" : "Create New Post"}
              </span>
            </div>
          )}
        </div>

        {/* content */}
        <div className="p-4 md:p-6 overflow-y-auto flex-1">

          {/* ALL POSTS */}
          {activeView === "all" && (
            loading ? (
              <LoadingSkeleton />
            ) : posts.length === 0 ? (
              <EmptyState label="No posts yet. Create your first one!" />
            ) : (
              <div className="grid gap-3 md:gap-4 max-w-4xl">
                {posts.map((p) => (
                  <PostCard
                    key={p.id}
                    post={p}
                    onEdit={handleEdit}
                    onDelete={setDeleteTarget}
                  />
                ))}
              </div>
            )
          )}

          {/* CREATE / EDIT */}
          {activeView === "create" && (
            <CreatePost
              editPost={editPost}
              onSaved={handlePostSaved}
            />
          )}

          {/* DRAFTS */}
          {activeView === "draft" && (
            loading ? (
              <LoadingSkeleton />
            ) : drafts.length === 0 ? (
              <EmptyState label="No drafts saved yet." />
            ) : (
              <div className="grid gap-3 md:gap-4 max-w-4xl">
                {drafts.map((p) => (
                  <PostCard
                    key={p.id}
                    post={p}
                    onEdit={handleEdit}
                    onDelete={setDeleteTarget}
                  />
                ))}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

function LoadingSkeleton() {
  return (
    <div className="grid gap-3 max-w-4xl">
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-white p-4 rounded-xl shadow-sm flex gap-4 animate-pulse">
          <div className="w-16 h-12 bg-gray-100 rounded-lg flex-shrink-0" />
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-100 rounded w-2/3" />
            <div className="h-3 bg-gray-100 rounded w-1/3" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Admin;