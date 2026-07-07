import { Award, Clock, Home, Users } from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Expert Agents',
    description:
      'Our seasoned advisors bring decades of combined experience and deep local market knowledge to every transaction.',
  },
  {
    icon: Home,
    title: 'Best Properties',
    description:
      'We represent a carefully curated portfolio of the most sought-after luxury homes and estates.',
  },
  {
    icon: Award,
    title: 'Easy Process',
    description:
      'From first showing to closing, we handle every detail so your journey is seamless and stress-free.',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description:
      'Your dedicated agent is always within reach, providing responsive service whenever you need it.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
            Why Choose Us
          </p>
          <h2 className="font-serif text-3xl font-bold text-balance text-primary sm:text-4xl">
            A Higher Standard of Real Estate
          </h2>
          <p className="mt-4 text-muted-foreground">
            We combine white-glove service with proven results to deliver an experience worthy of
            your most important investment.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <feature.icon className="size-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
