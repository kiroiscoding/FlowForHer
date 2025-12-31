import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-brand-cream text-brand-burgundy px-6 md:px-12 pt-32 pb-20">
      <div className="max-w-4xl mx-auto">
        <p className="font-sans text-sm uppercase tracking-widest opacity-70 mb-4">Error 404</p>
        <h1 className="font-display text-6xl md:text-8xl uppercase leading-[0.85] mb-6">
          Page Not Found
        </h1>
        <p className="font-sans text-xl md:text-2xl opacity-80 max-w-2xl leading-relaxed mb-10">
          The page you’re looking for doesn’t exist (or it moved). Use the links below to get back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-brand-burgundy text-brand-cream px-7 py-4 font-display uppercase text-lg hover:opacity-90 transition-opacity"
          >
            Go Home
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-full border border-brand-burgundy/30 px-7 py-4 font-display uppercase text-lg hover:bg-brand-burgundy/5 transition-colors"
          >
            About
          </Link>
        </div>
      </div>
    </main>
  );
}

