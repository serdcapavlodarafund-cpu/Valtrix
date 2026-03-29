"use client"

import {
  FileText,
  BadgeCheck,
  CalendarCheck,
  ArrowRightLeft,
} from "lucide-react"

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Submit Request",
    description:
      "Indicate transaction type, amount, and location.",
  },
  {
    number: "02",
    icon: BadgeCheck,
    title: "Rate Confirmation",
    description:
      "We confirm the final rate based on transaction size.",
  },
  {
    number: "03",
    icon: CalendarCheck,
    title: "Meeting Arrangement",
    description:
      "A private meeting is scheduled at an agreed location.",
  },
  {
    number: "04",
    icon: ArrowRightLeft,
    title: "Settlement",
    description:
      "USDT is transferred on-chain and cash is exchanged in person.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 border-b border-border" />
      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-medium tracking-widest text-primary uppercase">
            Process
          </span>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            A simple process from request to settlement.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.number} className="group relative">
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-card">
                {/* Number & connector */}
                <div className="mb-4 flex items-center gap-3">
                  <span className="font-mono text-xs text-primary">
                    {step.number}
                  </span>
                  {i < steps.length - 1 && (
                    <div className="hidden h-px flex-1 bg-border lg:block" />
                  )}
                </div>

                {/* Icon */}
                <div className="mb-4 flex size-10 items-center justify-center rounded-lg border border-primary/20 bg-primary/5 transition-colors duration-300 group-hover:bg-primary/10">
                  <step.icon className="size-5 text-primary" />
                </div>

                {/* Content */}
                <h3 className="mb-2 text-sm font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
