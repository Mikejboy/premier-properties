import Image from 'next/image'
import { Bath, BedDouble, MapPin, Maximize } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { formatPrice, type Property } from '@/lib/properties'
import { cn } from '@/lib/utils'

export function PropertyCard({
  property,
  ctaLabel = 'View Details',
}: {
  property: Property
  ctaLabel?: string
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.image || '/placeholder.svg'}
          alt={`${property.title} in ${property.city}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span
          className={cn(
            'absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold shadow-sm',
            property.status === 'For Sale'
              ? 'bg-accent text-accent-foreground'
              : 'bg-primary text-primary-foreground',
          )}
        >
          {property.status}
        </span>
        <span className="absolute right-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
          {property.type}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="font-serif text-2xl font-bold text-primary">
          {formatPrice(property.price, property.priceSuffix)}
        </p>
        <h3 className="mt-1 text-lg font-semibold text-foreground">{property.title}</h3>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="size-4 shrink-0 text-accent" />
          {property.address}, {property.city}
        </p>

        <div className="mt-4 grid grid-cols-3 gap-2 border-t border-border pt-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <BedDouble className="size-4 text-accent" />
            {property.beds} Beds
          </span>
          <span className="flex items-center gap-1.5">
            <Bath className="size-4 text-accent" />
            {property.baths} Baths
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize className="size-4 text-accent" />
            {property.sqft.toLocaleString()}
          </span>
        </div>

        <Button
          className="mt-5 w-full bg-primary text-primary-foreground hover:bg-primary/90"
          size="lg"
        >
          {ctaLabel}
        </Button>
      </div>
    </article>
  )
}
