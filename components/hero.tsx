"use client"

import { Shield, Lock, Clock, ScanSearch } from "lucide-react"

const benefits = [
  {
    icon: Shield,
    text: "Spread 1\u20134.3% in favor of the client, depending on transaction amount",
  },
  {
    icon: Lock,
    text: "Buy or sell USDT",
  },
  {
    icon: Clock,
    text: "Transactions from $50 to multi-million amounts",
  },
  {
    icon: ScanSearch,
    text: "AML wallet screening",
  },
]

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 pt-32 pb-20">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
            <div className="size-1.5 animate-pulse rounded-full bg-primary" />
            <span className="text-xs font-medium tracking-widest text-primary uppercase">
              Private Exchange
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            <span className="text-balance">Valtrix Exchange</span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {"USDT \u2194 Cash Exchange."}{" "}
            {"In-person settlement. "}
            <span className="text-primary">By appointment only.</span>
          </p>

          {/* Benefits */}
          <div className="mt-12 grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit.text}
                className="flex items-start gap-3 rounded-xl border border-border bg-card/50 px-4 py-3 text-left backdrop-blur-sm transition-colors duration-300 hover:border-primary/30"
              >
                <benefit.icon className="mt-0.5 size-4 shrink-0 text-primary" />
                <span className="text-sm leading-relaxed text-muted-foreground">
                  {benefit.text}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_30px_rgba(201,169,110,0.2)]"
            >
              Request Exchange
              <svg
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="https://t.me/ValtrixExchangeOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary px-8 py-3.5 text-sm font-medium text-secondary-foreground transition-all duration-300 hover:border-primary/30 hover:bg-secondary/80"
            >
              <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              Contact via Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
