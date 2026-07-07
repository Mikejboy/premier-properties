'use client'

import { useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { SlidersHorizontal } from 'lucide-react'
import { PropertyCard } from '@/components/property-card'
import { Button } from '@/components/ui/button'
import { properties, type PropertyStatus, type PropertyType } from '@/lib/properties'

const priceRanges = [
  { label: 'Any Price', value: '' },
  { label: 'Up to $500K', value: '0-500000' },
  { label: '$500K - $1M', value: '500000-1000000' },
  { label: '$1M - $2M', value: '1000000-2000000' },
  { label: '$2M+', value: '2000000-99000000' },
]

const types: (PropertyType | 'Any')[] = ['Any', 'House', 'Villa', 'Apartment', 'Penthouse', 'Estate']
const statuses: (PropertyStatus | 'Any')[] = ['Any', 'For Sale', 'For Rent']
const bedOptions = ['Any', '2', '3', '4', '5']

export function PropertyListings() {
  const searchParams = useSearchParams()
  const [type, setType] = useState<string>(searchParams.get('type') ?? 'Any')
  const [price, setPrice] = useState<string>(searchParams.get('price') ?? '')
  const [status, setStatus] = useState<string>('Any')
  const [beds, setBeds] = useState<string>('Any')
  const [query, setQuery] = useState<string>(searchParams.get('q') ?? '')

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (type !== 'Any' && p.type !== type) return false
      if (status !== 'Any' && p.status !== status) return false
      if (beds !== 'Any' && p.beds < Number(beds)) return false
      if (query) {
        const q = query.toLowerCase()
        if (
          !p.city.toLowerCase().includes(q) &&
          !p.address.toLowerCase().includes(q) &&
          !p.title.toLowerCase().includes(q)
        )
          return false
      }
      if (price) {
        const [min, max] = price.split('-').map(Number)
        if (p.price < min || p.price > max) return false
      }
      return true
    })
  }, [type, price, status, beds, query])

  const resetFilters = () => {
    setType('Any')
    setPrice('')
    setStatus('Any')
    setBeds('Any')
    setQuery('')
  }

  const selectClass =
    'h-11 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground outline-none focus:border-accent focus:ring-2 focus:ring-accent/30'

  return (
    <section className="bg-secondary py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="h-fit rounded-xl border border-border bg-card p-6 shadow-sm lg:sticky lg:top-24">
            <div className="mb-6 flex items-center gap-2 text-primary">
              <SlidersHorizontal className="size-5" />
              <h2 className="font-serif text-lg font-semibold">Filter Properties</h2>
            </div>

            <div className="space-y-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="search" className="text-xs font-medium text-muted-foreground">
                  Location
                </label>
                <input
                  id="search"
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="City or address"
                  className={selectClass}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="f-status" className="text-xs font-medium text-muted-foreground">
                  Status
                </label>
                <select id="f-status" value={status} onChange={(e) => setStatus(e.target.value)} className={selectClass}>
                  {statuses.map((s) => (
                    <option key={s} value={s}>
                      {s === 'Any' ? 'Any Status' : s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="f-type" className="text-xs font-medium text-muted-foreground">
                  Property Type
                </label>
                <select id="f-type" value={type} onChange={(e) => setType(e.target.value)} className={selectClass}>
                  {types.map((t) => (
                    <option key={t} value={t}>
                      {t === 'Any' ? 'Any Type' : t}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="f-price" className="text-xs font-medium text-muted-foreground">
                  Price Range
                </label>
                <select id="f-price" value={price} onChange={(e) => setPrice(e.target.value)} className={selectClass}>
                  {priceRanges.map((r) => (
                    <option key={r.label} value={r.value}>
                      {r.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="f-beds" className="text-xs font-medium text-muted-foreground">
                  Bedrooms
                </label>
                <select id="f-beds" value={beds} onChange={(e) => setBeds(e.target.value)} className={selectClass}>
                  {bedOptions.map((b) => (
                    <option key={b} value={b}>
                      {b === 'Any' ? 'Any' : `${b}+ Beds`}
                    </option>
                  ))}
                </select>
              </div>

              <Button
                variant="outline"
                onClick={resetFilters}
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Reset Filters
              </Button>
            </div>
          </aside>

          <div>
            <p className="mb-6 text-sm text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filtered.length}</span>{' '}
              {filtered.length === 1 ? 'property' : 'properties'}
            </p>

            {filtered.length > 0 ? (
              <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((property) => (
                  <PropertyCard key={property.id} property={property} ctaLabel="Contact Agent" />
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-border bg-card p-16 text-center">
                <p className="text-lg font-medium text-foreground">No properties match your filters</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Try adjusting or resetting your search criteria.
                </p>
                <Button
                  onClick={resetFilters}
                  className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
