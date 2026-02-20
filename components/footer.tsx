export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Brand */}
          <a href="#" className="ml-2 flex items-center sm:ml-3">
            <img
              src="/images/logo.png"
              alt="Valtrix Exchange"
              className="h-16 w-auto sm:h-20"
            />
          </a>

          {/* Nav */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {[
              { label: "How It Works", href: "#how-it-works" },
              { label: "Coverage", href: "#coverage" },
              { label: "Compliance", href: "#compliance" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 rounded-xl border border-border bg-secondary/30 p-5">
          <p className="text-center text-xs leading-relaxed text-muted-foreground">
            Valtrix Exchange facilitates private in-person digital asset
            transactions by prior agreement. This website does not process
            online payments and does not hold client funds.
          </p>
        </div>

        {/* Policy links */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          <a
            href="#"
            className="text-xs text-muted-foreground/60 transition-colors hover:text-primary"
          >
            Privacy Policy
          </a>
          <span className="text-muted-foreground/30">|</span>
          <a
            href="#"
            className="text-xs text-muted-foreground/60 transition-colors hover:text-primary"
          >
            Terms of Service
          </a>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground/60">
          {"© 2026 Valtrix Exchange. All rights reserved."}
        </p>
      </div>
    </footer>
  )
}
