import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-[#0B1020] text-white">
  {/* Background glow */}
  <div className="pointer-events-none absolute -left-32 -top-32 h-64 w-64 rounded-full bg-violet-600/15 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-32 right-0 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />

  <div className="relative w-full px-6 py-8 sm:px-8 lg:px-12">
    {/* Main content */}
    <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
      
      {/* Brand */}
      <div>
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 shadow-md shadow-violet-500/20">
            <span className="text-lg font-bold">B</span>
          </div>

          <div>
            <h2 className="text-lg font-bold">
              Book<span className="text-amber-400">Vibe</span>
            </h2>
            <p className="text-[10px] text-white/40">
              Where stories come alive
            </p>
          </div>
        </div>

        <p className="mt-3 max-w-sm text-xs leading-5 text-white/50">
          Discover books that match your vibe, explore unforgettable stories,
          and find your next favorite read.
        </p>

        {/* Social */}
        <div className="mt-4 flex gap-2">
          {["𝕏", "in", "◎", "▶"].map((icon) => (
            <a
              key={icon}
              href="#"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xs text-white/50 transition-all hover:-translate-y-0.5 hover:border-violet-400/40 hover:bg-violet-500 hover:text-white"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Discover */}
      <div>
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/90">
          Discover
        </h3>

        <ul className="space-y-2 text-xs text-white/45">
          {[
            "Explore Books",
            "Popular Reads",
            "New Releases",
            "Categories",
          ].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="transition-colors hover:text-amber-400"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Community */}
      <div>
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/90">
          Community
        </h3>

        <ul className="space-y-2 text-xs text-white/45">
          {[
            "About BookVibe",
            "Reading Lists",
            "Book Reviews",
            "Contact Us",
          ].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="transition-colors hover:text-amber-400"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Newsletter */}
      <div>
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/90">
          Stay in the story
        </h3>

        <p className="mb-3 text-xs leading-5 text-white/45">
          Get fresh book recommendations delivered to your inbox.
        </p>

        <div className="flex rounded-lg border border-white/10 bg-white/[0.05] p-1">
          <input
            type="email"
            placeholder="Your email"
            className="min-w-0 flex-1 bg-transparent px-2.5 text-xs text-white outline-none placeholder:text-white/25"
          />

          <button className="rounded-md bg-gradient-to-r from-violet-500 to-indigo-500 px-3 py-1.5 text-xs font-medium transition-all hover:from-violet-400 hover:to-indigo-400">
            Join
          </button>
        </div>
      </div>
    </div>

    {/* Bottom */}
    <div className="mx-auto mt-7 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-5 text-[11px] text-white/35 sm:flex-row sm:items-center sm:justify-between">
      <p>
        © {new Date().getFullYear()}{" "}
        <span className="text-white/60">BookVibe</span>. All rights reserved.
      </p>

      <div className="flex gap-5">
        <a href="#" className="transition-colors hover:text-white">
          Privacy
        </a>
        <a href="#" className="transition-colors hover:text-white">
          Terms
        </a>
        <a href="#" className="transition-colors hover:text-white">
          Cookies
        </a>
      </div>
    </div>
  </div>
</footer>
  );
};

export default Footer;
