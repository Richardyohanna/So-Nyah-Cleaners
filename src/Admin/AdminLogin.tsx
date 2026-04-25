// src/Admin/AdminLogin.tsx
import { useState } from "react";
import { supabase } from "../Client/lib/supabase";

import logo from "../assets/logo.jpeg";

interface Props {
  onLogin: () => void;
}

export default function AdminLogin({ onLogin }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      onLogin();
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 relative overflow-hidden">



      {/* Card */}
      <div
        className="relative w-full max-w-[420px] rounded-3xl overflow-hidden"
        style={{
          background: "white",
          boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)",
        }}
      >
     

        <div className="px-10 py-10">

          {/* Brand */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
                <img src={logo} className=" rounded-full object-cover" />
            </div>

            <h1 className="text-[var(--primary)] text-[28px] font-bold leading-tight mb-2"
              style={{ fontFamily: "Georgia, serif", letterSpacing: "-0.02em" }}>
              Admin Access
            </h1>
            <p className="text-[#6b6b6b] text-sm leading-relaxed">
              Sign in to manage your content and posts.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-semibold tracking-[0.15em] uppercase font-bold ">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="admin@so-nyah.com"
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl text-sm text-black placeholder-[#3a3a3a] outline-none transition-all duration-200"
                  style={{
                    background: "#3331",
                    border: "1.5px solid #2a2a2a",
                    fontFamily: "Georgia, serif",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#c9a96e")}
                  onBlur={(e) => (e.target.style.borderColor = "#2a2a2a")}
                />
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-semibold tracking-[0.15em] uppercase font-bold">
                Password
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </div>
                <input
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••••"
                  className="w-full pl-11 pr-12 py-3.5 rounded-xl text-sm text-black placeholder-[#3a3a3a] outline-none transition-all duration-200"
                  style={{
                    background: "#3331",
                    border: "1.5px solid #2a2a2a",
                    fontFamily: "Georgia, serif",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#c9a96e")}
                  onBlur={(e) => (e.target.style.borderColor = "#2a2a2a")}
                />
                <button
                  type="button"
                  onClick={() => setShowPass((v) => !v)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#555] hover:text-[#888] transition-colors"
                >
                  {showPass ? (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                      <line x1="1" y1="1" x2="23" y2="23"/>
                    </svg>
                  ) : (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl"
                style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" className="flex-shrink-0">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="8" x2="12" y2="12"/>
                  <line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                <p className="text-red-400 text-xs">{error}</p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl text-sm font-bold tracking-wide mt-2 transition-all duration-200 relative overflow-hidden disabled:opacity-60"
              style={{
                background: loading
                  ? "var(--primary)"
                  : "var(--primary)",
                color: "#fff",
                letterSpacing: "0.08em",
                boxShadow: loading ? "none" : "0 8px 24px rgba(30,58,95,0.4)",
              }}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                  </svg>
                  Signing in…
                </span>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* Footer note */}
          <p className="text-center text-[11px] text-[#3a3a3a] mt-8">
            Access restricted to authorised administrators only.
          </p>
        </div>
      </div>
    </div>
  );
}