import { Globe, MapPin } from "lucide-react"

export function GlobalCoverage() {
  return (
    <section id="coverage" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 border-b border-border" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="mb-4 inline-block text-xs font-medium tracking-widest text-primary uppercase">
              Worldwide
            </span>
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
              Global Coverage
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
              We arrange in-person exchanges in selected international
              locations. Availability depends on your city and transaction size.
            </p>
            <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-5">
              <p className="text-sm leading-relaxed text-foreground">
                Please include your{" "}
                <span className="font-semibold text-primary">
                  city and country
                </span>{" "}
                in your request.
              </p>
            </div>
          </div>

          {/* Right -- visual */}
          <div className="flex flex-col gap-4">
            {[
              {
                icon: Globe,
                title: "International Reach",
                description:
                  "Available in Europe, UAE, US, and other select locations.",
              },
              {
                icon: MapPin,
                title: "Location-Based Availability",
                description:
                  "We confirm availability after reviewing your city and transaction size.",
              },
            ].map((item) => (
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
      </div>
    </section>
  )
}
