import Navigation    from "@/components/Navigation"
import Hero          from "@/components/Hero"
import TheFog        from "@/components/TheFog"
import Identity      from "@/components/Identity"
import Systems       from "@/components/Systems"
import WhoThisIsFor  from "@/components/WhoThisIsFor"
import Philosophy    from "@/components/Philosophy"
import FinalCTA      from "@/components/FinalCTA"
import Footer        from "@/components/Footer"
import LazySection   from "@/components/LazySection"

export default function Home() {
  return (
    <>
      {/* ── NAVIGATION — fixed, renders above everything ─────────────── */}
      <Navigation />

      {/* ── ABOVE THE FOLD — no lazy load, highest priority ──────────── */}
      <Hero />

      {/* ── BELOW THE FOLD — lazy loaded at 200px rootMargin ─────────── */}
      <LazySection rootMargin="200px">
        <TheFog />
      </LazySection>

      <LazySection rootMargin="200px">
        <Identity />
      </LazySection>

      <LazySection rootMargin="200px">
        <Systems />
      </LazySection>

      <LazySection rootMargin="200px">
        <WhoThisIsFor />
      </LazySection>

      <LazySection rootMargin="200px">
        <Philosophy />
      </LazySection>

      {/* ── FINAL CTA — tighter rootMargin, loads closer to viewport ─── */}
      <LazySection rootMargin="100px">
        <FinalCTA />
      </LazySection>

      {/* ── FOOTER — no lazy load, lightweight ───────────────────────── */}
      <Footer />
    </>
  )
}