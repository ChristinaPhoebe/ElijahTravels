import { ADVANTAGES } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'

export function WhyChoose() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <SectionHeading
          eyebrow="Why Elijah"
          title="The Advantage of Booking with Us"
          intro="We prioritize your comfort, safety, and convenience. Whether it's a one-way drop or a round trip, our dedicated team ensures your journey is smooth and worry-free."
          className="[&_span]:bg-primary-foreground/10 [&_span]:text-primary-foreground [&_h2]:text-primary-foreground [&_p]:text-primary-foreground/75"
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ADVANTAGES.map((a) => {
            const Icon = a.icon
            return (
              <div
                key={a.title}
                className="flex items-start gap-4 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.06] p-6"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <Icon className="size-5" aria-hidden />
                </span>
                <div>
                  <h3 className="text-lg font-bold">{a.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-primary-foreground/75">{a.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
