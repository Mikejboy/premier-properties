import Link from 'next/link'
import { ArrowRight, PhoneCall } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CtaSection() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-secondary px-6 py-16 text-center sm:px-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="font-serif text-3xl font-bold text-balance text-primary sm:text-4xl">
              Ready to Find Your Next Home?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Schedule a private consultation with one of our expert agents and take the first step
              toward your extraordinary new address.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link href="/contact">
                  Schedule a Consultation
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <a href="tel:+13105551234">
                  <PhoneCall className="size-4" />
                  {'(310) 555-1234'}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
