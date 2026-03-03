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

/**
 * Page section order — locked to wireframe spec:
 *
 * 00  Navigation     — fixed, above all
 * 01  Hero           — above the fold, no lazy load
 * 02  TheFog         — first below-fold section
 * 03  Identity       — name, mission, four laws
 * 04  Systems        — three proof cards with carousel
 * 05  WhoThisIsFor   — the filter
 * 06  Philosophy     — Law of Altitude, TracingBeam
 * 07  FinalCTA       — closing declaration
 * 08  Footer         — brand, links, legal
 */
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