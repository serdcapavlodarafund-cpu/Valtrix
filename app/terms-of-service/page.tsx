import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service | Valtrix Exchange",
  description: "Terms of Service for Valtrix Exchange",
}

export default function TermsOfServicePage() {
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
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Last updated: November 2025
        </p>

        <p className="mt-6 leading-relaxed text-muted-foreground">
          By using this website, you agree to the following terms:
        </p>

        <div className="mt-10 flex flex-col gap-10">
          <section>
            <h2 className="text-lg font-semibold text-foreground">
              1. Nature of Service
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Valtrix Exchange facilitates private, in-person digital asset
              transactions by prior agreement.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              This website does not:
            </p>
            <ul className="mt-3 list-disc pl-6 flex flex-col gap-1.5 text-muted-foreground">
              <li>Process online payments</li>
              <li>Custody client funds</li>
              <li>Operate as a public exchange platform</li>
            </ul>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              All transactions are arranged individually.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              2. Eligibility
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              By submitting a request, you confirm that:
            </p>
            <ul className="mt-3 list-disc pl-6 flex flex-col gap-1.5 text-muted-foreground">
              <li>You are at least 18 years old</li>
              <li>
                You are legally permitted to conduct digital asset transactions
                in your jurisdiction
              </li>
              <li>Funds involved are lawful</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              3. AML Screening
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Valtrix Exchange reserves the right to conduct wallet screening and
              request additional verification where necessary.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              We may decline transactions considered high risk.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              4. No Financial Advice
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Information on this website does not constitute financial, legal,
              or investment advice.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              5. Limitation of Liability
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Valtrix Exchange is not responsible for:
            </p>
            <ul className="mt-3 list-disc pl-6 flex flex-col gap-1.5 text-muted-foreground">
              <li>Market fluctuations</li>
              <li>Blockchain network delays</li>
              <li>Third-party communication platform issues</li>
            </ul>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Transactions are confirmed prior to settlement.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              6. Changes
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              We reserve the right to update these terms at any time.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              7. Contact
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              For inquiries regarding these terms:{" "}
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
