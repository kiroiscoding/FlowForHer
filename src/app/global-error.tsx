"use client";

import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-brand-cream text-brand-burgundy">
        <main className="min-h-screen px-6 md:px-12 pt-32 pb-20">
          <div className="max-w-4xl mx-auto">
            <p className="font-sans text-sm uppercase tracking-widest opacity-70 mb-4">
              Something went wrong
            </p>
            <h1 className="font-display text-6xl md:text-8xl uppercase leading-[0.85] mb-6">
              Error
            </h1>
            <p className="font-sans text-xl md:text-2xl opacity-80 max-w-2xl leading-relaxed mb-6">
              An unexpected issue occurred. You can try again or return home.
            </p>
            {error?.digest ? (
              <p className="font-sans text-sm opacity-60 mb-10">Ref: {error.digest}</p>
            ) : (
              <div className="mb-10" />
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => reset()}
                className="inline-flex items-center justify-center rounded-full bg-brand-burgundy text-brand-cream px-7 py-4 font-display uppercase text-lg hover:opacity-90 transition-opacity"
              >
                Try Again
              </button>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-brand-burgundy/30 px-7 py-4 font-display uppercase text-lg hover:bg-brand-burgundy/5 transition-colors"
              >
                Go Home
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}

