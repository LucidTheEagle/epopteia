import Link from "next/link"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-obsidian text-alabaster">

      {/* ── HEADER ──────────────────────────────────────────────────────── */}
      <header className="border-b border-border py-6">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/"
            className="
              font-modern text-sm uppercase tracking-widest
              text-granite hover:text-silver
              transition-colors duration-200
            "
          >
            ← Back to Epopteia
          </Link>
        </div>
      </header>

      {/* ── CONTENT ─────────────────────────────────────────────────────── */}
      <main className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <div className="space-y-12">

          {/* TITLE */}
          <div className="border-l-2 border-silver pl-6">
            <h1 className="
              font-ancient text-4xl md:text-6xl font-bold
              uppercase tracking-[0.15em] mb-4
              text-alabaster
            ">
              Terms of Service
            </h1>
            <p className="font-modern text-sm text-granite">
              Last Updated: January 14, 2026
            </p>
          </div>

          {/* 1 */}
          <section className="space-y-6">
            <h2 className="font-ancient text-2xl font-bold uppercase tracking-wide text-silver">
              1. Acceptance of Terms
            </h2>
            <div className="font-modern text-granite leading-relaxed">
              <p>
                By accessing or using Epopteia&apos;s website and services (&apos;Services&apos;), you agree to be
                bound by these Terms of Service (&apos;Terms&apos;). If you do not agree to these Terms, do not
                use our Services.
              </p>
            </div>
          </section>

          {/* 2 */}
          <section className="space-y-6">
            <h2 className="font-ancient text-2xl font-bold uppercase tracking-wide text-silver">
              2. Description of Services
            </h2>
            <div className="font-modern text-granite leading-relaxed space-y-4">
              <p>
                Epopteia provides AI-powered clarity architecture and intelligence systems including:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <strong className="text-alabaster">PRISM:</strong>{" "}
                  Document intelligence and compliance verification systems
                </li>
                <li>
                  <strong className="text-alabaster">NexOps:</strong>{" "}
                  Zero-latency operations command and logistics intelligence
                </li>
                <li>
                  <strong className="text-alabaster">Ascent Ledger:</strong>{" "}
                  AI-powered human performance diagnostic systems
                </li>
              </ul>
              <p>
                Services are provided on a project basis as outlined in individual Master Services
                Agreements (MSAs).
              </p>
            </div>
          </section>

          {/* 3 */}
          <section className="space-y-6">
            <h2 className="font-ancient text-2xl font-bold uppercase tracking-wide text-silver">
              3. User Obligations
            </h2>
            <div className="font-modern text-granite leading-relaxed space-y-4">
              <p>You agree to:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Provide accurate and complete information when engaging our services</li>
                <li>Maintain the confidentiality of any access credentials</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
                <li>Use our Services in compliance with all applicable laws and regulations</li>
                <li>Not attempt to reverse engineer, decompile, or disassemble any deployed systems</li>
              </ul>
            </div>
          </section>

          {/* 4 */}
          <section className="space-y-6">
            <h2 className="font-ancient text-2xl font-bold uppercase tracking-wide text-silver">
              4. Intellectual Property
            </h2>
            <div className="font-modern text-granite leading-relaxed space-y-4">
              <p>
                All systems, code, methodologies, and frameworks developed by Epopteia remain our
                exclusive intellectual property unless explicitly transferred via written agreement.
              </p>
              <p>
                Clients receive a license to use deployed systems as outlined in their MSA. This
                license is non-transferable and terminates upon contract completion unless otherwise
                specified.
              </p>
            </div>
          </section>

          {/* 5 */}
          <section className="space-y-6">
            <h2 className="font-ancient text-2xl font-bold uppercase tracking-wide text-silver">
              5. Payment Terms
            </h2>
            <div className="font-modern text-granite leading-relaxed space-y-4">
              <p>Payment terms are defined in individual project agreements. Standard terms include:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>50% deposit required to initiate deployment</li>
                <li>Remaining balance due upon system delivery</li>
                <li>Net 15 payment terms for invoices</li>
                <li>Late payments subject to 1.5% monthly interest charge</li>
              </ul>
            </div>
          </section>

          {/* 6 */}
          <section className="space-y-6">
            <h2 className="font-ancient text-2xl font-bold uppercase tracking-wide text-silver">
              6. Warranties and Disclaimers
            </h2>
            <div className="font-modern text-granite leading-relaxed space-y-4">
              <p>
                We warrant that services will be performed in a professional and workmanlike manner.
                However:
              </p>
              <p className="text-alabaster font-bold">
                SERVICES ARE PROVIDED &apos;AS IS&apos; WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
                INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                PURPOSE, OR NON-INFRINGEMENT.
              </p>
              <p>
                We do not guarantee specific business outcomes, revenue increases, or cost reductions,
                though we design systems with these goals in mind.
              </p>
            </div>
          </section>

          {/* 7 */}
          <section className="space-y-6">
            <h2 className="font-ancient text-2xl font-bold uppercase tracking-wide text-silver">
              7. Limitation of Liability
            </h2>
            <div className="font-modern text-granite leading-relaxed space-y-4">
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, EPOPTEIA SHALL NOT BE LIABLE FOR ANY
                INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF
                PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY.
              </p>
              <p>
                Our total liability shall not exceed the amount paid by you for the services in the
                twelve (12) months preceding the claim.
              </p>
            </div>
          </section>

          {/* 8 */}
          <section className="space-y-6">
            <h2 className="font-ancient text-2xl font-bold uppercase tracking-wide text-silver">
              8. Termination
            </h2>
            <div className="font-modern text-granite leading-relaxed">
              <p>
                Either party may terminate services with written notice as specified in the MSA. Upon
                termination, you remain responsible for all fees accrued to the termination date.
              </p>
            </div>
          </section>

          {/* 9 */}
          <section className="space-y-6">
            <h2 className="font-ancient text-2xl font-bold uppercase tracking-wide text-silver">
              9. Changes to Terms
            </h2>
            <div className="font-modern text-granite leading-relaxed">
              <p>
                We reserve the right to modify these Terms at any time. Continued use of our Services
                after changes constitutes acceptance of the modified Terms.
              </p>
            </div>
          </section>

          {/* 10 */}
          <section className="space-y-6">
            <h2 className="font-ancient text-2xl font-bold uppercase tracking-wide text-silver">
              10. Governing Law
            </h2>
            <div className="font-modern text-granite leading-relaxed">
              <p>
                These Terms shall be governed by and construed in accordance with the laws of Nigeria,
                without regard to its conflict of law provisions.
              </p>
            </div>
          </section>

          {/* 11 */}
          <section className="space-y-6">
            <h2 className="font-ancient text-2xl font-bold uppercase tracking-wide text-silver">
              11. Contact
            </h2>
            <div className="font-modern text-granite leading-relaxed">
              <p>Questions about these Terms? Contact us at:</p>
              <div className="mt-4 p-5 bg-basalt border border-border">
                <p className="font-modern text-sm">
                  <strong className="text-alabaster">Epopteia</strong>
                  <br />
                  Email:{" "}
                  <a
                    href="mailto:hello@epopteia.io"
                    className="text-silver hover:text-alabaster transition-colors duration-200"
                  >
                    hello@epopteia.io
                  </a>
                </p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  )
}