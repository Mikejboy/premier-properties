import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Premier Properties made buying our dream home effortless. Their team anticipated every need and negotiated a price we never thought possible.',
    name: 'Sarah & Michael Thompson',
    role: 'Home Buyers, Beverly Hills',
  },
  {
    quote:
      'I have bought and sold several homes, and no agency comes close to this level of professionalism and attention to detail. Truly exceptional.',
    name: 'David Chen',
    role: 'Investor, San Francisco',
  },
  {
    quote:
      'They sold our estate above asking in under two weeks. The marketing was stunning and the communication was flawless throughout.',
    name: 'Elena Rodriguez',
    role: 'Home Seller, Montecito',
  },
]

export function Testimonials() {
  return (
    <section className="bg-primary py-20 text-primary-foreground sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
            Testimonials
          </p>
          <h2 className="font-serif text-3xl font-bold text-balance sm:text-4xl">
            Trusted by Happy Homeowners
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-8"
            >
              <Quote className="size-8 text-accent" />
              <div className="mt-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-primary-foreground/90 leading-relaxed">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-primary-foreground/10 pt-4">
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-primary-foreground/60">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
