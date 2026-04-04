"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log to your error-tracking service (e.g. Sentry) here if needed.
    console.error("Unhandled error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4 text-center">
      <AlertTriangle className="h-12 w-12 text-amber-400" />
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-ink">Something went wrong</h1>
        <p className="max-w-sm text-sm text-muted">
          An unexpected error occurred. Please try again, or contact us directly if the
          problem continues.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        <button
          onClick={reset}
          className="rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-xl border border-brand-200 px-5 py-2.5 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
