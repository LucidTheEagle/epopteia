import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-obsidian flex items-center justify-center px-6">
      <div className="flex flex-col items-center text-center gap-6">

        <span className="font-modern text-[10px] uppercase tracking-[0.3em] text-silver-dim">
          — Signal Lost
        </span>

        <h1 className="font-ancient font-black text-[clamp(72px,12vw,140px)] tracking-[0.06em] leading-none text-alabaster">
          404
        </h1>

        <div aria-hidden="true" className="w-8 h-px bg-silver-dim" />

        <p className="font-modern text-[12px] leading-[1.8] tracking-[0.08em] text-granite max-w-[320px]">
          The coordinates you seek do not exist.
          The fog is thick here.
        </p>

        <Link
          href="/"
          className="relative overflow-hidden mt-4 font-modern text-[11px] uppercase tracking-[0.2em] px-10 py-4 text-obsidian bg-silver border border-silver transition-transform duration-200 hover:-translate-y-px focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-silver focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian group"
        >
          <span aria-hidden="true" className="absolute inset-0 bg-alabaster -translate-x-full transition-transform duration-300 group-hover:translate-x-0" style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }} />
          <span className="relative z-10">Return to Clarity</span>
        </Link>

      </div>
    </div>
  )
}