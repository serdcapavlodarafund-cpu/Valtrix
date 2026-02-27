"use client"

import { useState } from "react"
import { Mail, Send, Loader2 } from "lucide-react"

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError("")

    const form = e.currentTarget
    const formData = new FormData(form)

    const data = {
      name: formData.get("name") as string,
      email: formData.get("contact") as string,
      telegram: formData.get("contact") as string,
      amount: formData.get("amount") as string,
      direction: formData.get("type") as string,
      location: formData.get("location") as string,
      network: formData.get("network") as string,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        throw new Error("Failed to submit")
      }

      setSubmitted(true)
    } catch {
      setError("Something went wrong. Please try again or contact us directly.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 border-b border-border" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[200px] w-[300px] -translate-x-1/2 rounded-full bg-primary/3 blur-[120px] sm:h-[400px] sm:w-[600px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left -- Info */}
          <div>
            <span className="mb-4 inline-block text-xs font-medium tracking-widest text-primary uppercase">
              Get Started
            </span>
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
              Request an Exchange
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
              Complete the form to initiate your exchange request. Our team will
              reach out to confirm the rate and arrange the meeting.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="flex size-10 items-center justify-center rounded-lg border border-primary/20 bg-primary/5">
                  <Mail className="size-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                    Email
                  </p>
                  <p className="text-sm text-foreground">
                    desk@valtrix.exchange
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex size-10 items-center justify-center rounded-lg border border-primary/20 bg-primary/5">
                  <svg
                    className="size-5 text-primary"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                    Telegram
                  </p>
                  <p className="text-sm text-foreground">@ValtrixExchangeOfficial</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right -- Form */}
          <div className="rounded-2xl border border-border bg-card/50 p-8 backdrop-blur-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-primary/10">
                  <Send className="size-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Request Submitted
                </h3>
                <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                  Our team will review your request and contact you within 24
                  hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-xs font-medium tracking-wide text-muted-foreground uppercase"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact"
                    className="mb-1.5 block text-xs font-medium tracking-wide text-muted-foreground uppercase"
                  >
                    Preferred Contact
                  </label>
                  <input
                    id="contact"
                    name="contact"
                    type="text"
                    required
                    placeholder="Email or Telegram @username"
                    className="w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="amount"
                    className="mb-1.5 block text-xs font-medium tracking-wide text-muted-foreground uppercase"
                  >
                    Amount (USD)
                  </label>
                  <input
                    id="amount"
                    name="amount"
                    type="text"
                    required
                    placeholder="$10,000"
                    className="w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="type"
                    className="mb-1.5 block text-xs font-medium tracking-wide text-muted-foreground uppercase"
                  >
                    Transaction Type
                  </label>
                  <select
                    id="type"
                    name="type"
                    required
                    className="w-full appearance-none rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none"
                  >
                    <option value="" disabled>
                      Select direction
                    </option>
                    <option value="buy">Buy USDT</option>
                    <option value="sell">Sell USDT</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="location"
                    className="mb-1.5 block text-xs font-medium tracking-wide text-muted-foreground uppercase"
                  >
                    City / Country
                  </label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    required
                    placeholder="Dubai, UAE"
                    className="w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="network"
                    className="mb-1.5 block text-xs font-medium tracking-wide text-muted-foreground uppercase"
                  >
                    Network
                  </label>
                  <input
                    id="network"
                    name="network"
                    type="text"
                    readOnly
                    value="USDT TRC20"
                    className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm text-muted-foreground"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="agree"
                    name="agree"
                    type="checkbox"
                    required
                    className="mt-1 size-4 shrink-0 cursor-pointer accent-primary"
                  />
                  <label
                    htmlFor="agree"
                    className="text-xs leading-relaxed text-muted-foreground"
                  >
                    I agree to the{" "}
                    <a
                      href="/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline transition-colors hover:text-gold-light"
                    >
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a
                      href="/terms-of-service"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline transition-colors hover:text-gold-light"
                    >
                      Terms of Service
                    </a>
                    .
                  </label>
                </div>

                {error && (
                  <p className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-2 text-center text-xs text-red-400">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_30px_rgba(201,169,110,0.15)] disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Submit Request"
                  )}
                </button>

                <p className="text-center text-xs text-muted-foreground">
                  Availability subject to location and compliance review.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
