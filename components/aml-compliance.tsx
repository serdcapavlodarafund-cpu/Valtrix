import { ShieldCheck, FileSearch, AlertTriangle } from "lucide-react"

const complianceItems = [
  {
    icon: ShieldCheck,
    title: "Wallet Check (AML)",
    description:
      "We conduct wallet screening to confirm the legitimacy of funds. The procedure may be completed online before the meeting or in person during the transaction.",
  },
  {
    icon: FileSearch,
    title: "Additional Verification",
    description:
      "Additional verification may be required for larger transactions.",
  },
  {
    icon: AlertTriangle,
    title: "Right to Decline",
    description:
      "We reserve the right to decline high-risk transactions.",
  },
]

export function AmlCompliance() {
  return (
    <section id="compliance" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 border-b border-border" />
      {/* Subtle glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/3 blur-[150px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-medium tracking-widest text-primary uppercase">
            Compliance
          </span>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
            {"AML & Compliance"}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            We take compliance seriously to keep transactions safe for everyone
            involved.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {complianceItems.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-card"
            >
              <div className="mb-4 flex items-center gap-4">
                <div className="flex size-11 items-center justify-center rounded-lg border border-primary/20 bg-primary/5 transition-colors duration-300 group-hover:bg-primary/10">
                  <item.icon className="size-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
