import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PropertyCard } from '@/components/property-card'
import { properties } from '@/lib/properties'

export function FeaturedProperties() {
  const featured = properties.filter((p) => p.featured).slice(0, 6)

  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
              Featured Listings
            </p>
            <h2 className="font-serif text-3xl font-bold text-balance text-primary sm:text-4xl">
              Handpicked Homes for Exceptional Living
            </h2>
            <p className="mt-4 text-muted-foreground">
              Explore a curated selection of our finest available properties, each chosen for its
              craftsmanship, location, and character.
            </p>
          </div>
          <Button asChild variant="outline" className="shrink-0 gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link href="/properties">
              View All Properties
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  )
}
