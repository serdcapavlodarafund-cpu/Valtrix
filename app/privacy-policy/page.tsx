import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | Valtrix Exchange",
  description: "Privacy Policy for Valtrix Exchange",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-4" />
          Back to Home
        </Link>

        <h1 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Last updated: November 2025
        </p>

        <div className="mt-10 flex flex-col gap-10">
          <p className="leading-relaxed text-muted-foreground">
            Valtrix Exchange respects your privacy and is committed to
            protecting your personal information.
          </p>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              1. Information We Collect
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              We may collect the following information when you submit a request:
            </p>
            <ul className="mt-3 list-disc pl-6 flex flex-col gap-1.5 text-muted-foreground">
              <li>Full name</li>
              <li>Contact details (Telegram, WhatsApp, email)</li>
              <li>Transaction amount</li>
              <li>City and country</li>
              <li>Wallet address (if provided)</li>
            </ul>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              We do not collect payment information through this website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              2. How We Use Your Information
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              We use the information provided to:
            </p>
            <ul className="mt-3 list-disc pl-6 flex flex-col gap-1.5 text-muted-foreground">
              <li>Process your transaction request</li>
              <li>Confirm availability in your region</li>
              <li>Conduct AML screening when required</li>
              <li>Communicate regarding your request</li>
            </ul>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              We do not sell or share your personal information with third
              parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              3. Data Storage
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Information submitted through the website may be stored securely
              for operational and compliance purposes.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              We retain data only for as long as necessary to process the request
              and comply with applicable requirements.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              4. Security
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              We implement reasonable technical and organizational measures to
              protect submitted information.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              However, no online transmission can be guaranteed to be completely
              secure.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              5. Cookies
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              This website may use basic technical cookies for functionality and
              analytics purposes. We do not use cookies for advertising.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              6. Your Rights
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              You may request deletion of your personal data by contacting us
              directly.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              7. Contact
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              For privacy-related inquiries, contact:{" "}
              <a
                href="mailto:support@valtrix-exchange.com"
                className="text-primary transition-colors hover:text-gold-light"
              >
                support@valtrix-exchange.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
