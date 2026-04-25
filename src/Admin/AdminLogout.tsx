// ADD THIS IMPORT at the top of Admin.tsx
import { supabase } from "../Client/lib/supabase";

// ADD THIS FUNCTION inside the Admin component (before the return):
const handleLogout = async () => {
  await supabase.auth.signOut();
  // AdminGuard's onAuthStateChange listener will automatically
  // detect the session is gone and show the login screen.
};

// ADD THIS BUTTON at the bottom of the sidebar div,
// just after the nav buttons flex div:

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