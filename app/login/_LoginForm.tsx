"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "error" | "success";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setMessage("");
    await new Promise((r) => setTimeout(r, 600));
    if (!email.includes("@") || password.length < 4) {
      setStatus("error");
      setMessage("Check your email and password and try again.");
      return;
    }
    setStatus("success");
    setMessage("Signed in. Redirecting…");
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-4">
      <label className="flex flex-col gap-1.5">
        <span
          className="font-mono uppercase"
          style={{ fontSize: "10px", letterSpacing: "0.25em", color: "#666" }}
        >
          Email
        </span>
        <input
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@conservatory.com"
          className="w-full rounded-xl border bg-transparent px-4 py-3 text-sm text-[#e8e8e8] outline-none transition-colors"
          style={{ borderColor: "#2a2a2a" }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "#555")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "#2a2a2a")}
        />
      </label>

      <label className="flex flex-col gap-1.5">
        <span
          className="font-mono uppercase"
          style={{ fontSize: "10px", letterSpacing: "0.25em", color: "#666" }}
        >
          Password
        </span>
        <input
          type="password"
          required
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          className="w-full rounded-xl border bg-transparent px-4 py-3 text-sm text-[#e8e8e8] outline-none transition-colors"
          style={{ borderColor: "#2a2a2a" }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "#555")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "#2a2a2a")}
        />
      </label>

      {message && (
        <p
          className="text-xs"
          style={{
            color: status === "error" ? "#e5a5a5" : "#9fd8b7",
          }}
          role="status"
        >
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-colors"
        style={{
          color: "#e8e8e8",
          background: "#2a2a2a",
          border: "1px solid #333",
          opacity: status === "submitting" ? 0.6 : 1,
          cursor: status === "submitting" ? "progress" : "pointer",
        }}
      >
        {status === "submitting" ? "Signing in…" : "Continue"}
      </button>

      <div className="mt-1 flex items-center justify-between text-xs" style={{ color: "#666" }}>
        <a href="#" className="underline-offset-4 hover:underline">Forgot password?</a>
        <a href="/#waitlist" className="underline-offset-4 hover:underline">Request access</a>
      </div>
    </form>
  );
}
