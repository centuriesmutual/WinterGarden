import type { Metadata } from "next";
import LoginForm from "./_LoginForm";

export const metadata: Metadata = {
  title: "Login — Wintergarden",
  description: "Sign in to Wintergarden.",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <div
      className="relative w-full"
      style={{
        minHeight: "100svh",
        background:
          "radial-gradient(ellipse at center, rgba(255,255,255,0.03) 0%, transparent 60%), var(--ink)",
      }}
    >
      <div className="mx-auto flex min-h-[100svh] w-full max-w-[460px] flex-col justify-center px-6 py-24">
        <div
          className="flex flex-col rounded-[28px] border px-8 py-10"
          style={{
            borderColor: "#2a2a2a",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.02), transparent 45%)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
          }}
        >
          <p
            className="font-mono uppercase"
            style={{
              fontSize: "10px",
              letterSpacing: "0.3em",
              color: "#666",
            }}
          >
            Wintergarden · Members
          </p>
          <h1
            className="mt-3"
            style={{
              fontSize: "clamp(28px, 3.4vw, 36px)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#f5f5f5",
              fontWeight: 600,
            }}
          >
            Login
          </h1>
          <p className="mt-2 text-sm" style={{ color: "#888", lineHeight: 1.6 }}>
            Enter your credentials to access the conservatory.
          </p>

          <LoginForm />

          <div
            className="mt-8 border-t pt-6 text-xs"
            style={{ borderColor: "#1e1e1e", color: "#555" }}
          >
            Access is invite-only while Wintergarden is in private beta.{" "}
            <a
              href="/"
              className="underline underline-offset-4"
              style={{ color: "#888" }}
            >
              Return home
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
}
