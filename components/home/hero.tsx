'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  const router = useRouter()
  const [location, setLocation] = useState('')
  const [type, setType] = useState('')
  const [price, setPrice] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (location) params.set('q', location)
    if (type) params.set('type', type)
    if (price) params.set('price', price)
    router.push(`/properties?${params.toString()}`)
  }

  return (
    <section className="relative flex min-h-[92vh] items-center">
      <Image
        src="/images/hero-home.png"
        alt="Luxury modern mansion at dusk"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm font-medium uppercase tracking-wider text-accent">
            Luxury Real Estate
          </p>
          <h1 className="font-serif text-4xl font-bold leading-tight text-balance text-primary-foreground sm:text-5xl lg:text-6xl">
            Find the Home That Defines Your Legacy
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
            Premier Properties Group connects discerning buyers with the world&apos;s most
            exceptional homes. Personalized service, unmatched expertise, extraordinary results.
          </p>
        </div>

        <form
          onSubmit={handleSearch}
          className="mt-10 grid max-w-4xl gap-4 rounded-2xl border border-border/50 bg-background/95 p-4 shadow-2xl backdrop-blur sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_auto]"
        >
          <div className="flex flex-col gap-1.5">
            <label htmlFor="location" className="px-1 text-xs font-medium text-muted-foreground">
              Location
            </label>
            <input
              id="location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="City, neighborhood, or ZIP"
              className="h-11 rounded-md border border-input bg-background px-3 text-sm text-foreground outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="type" className="px-1 text-xs font-medium text-muted-foreground">
              Property Type
            </label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="h-11 rounded-md border border-input bg-background px-3 text-sm text-foreground outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
            >
              <option value="">Any Type</option>
              <option value="House">House</option>
              <option value="Villa">Villa</option>
              <option value="Apartment">Apartment</option>
              <option value="Penthouse">Penthouse</option>
              <option value="Estate">Estate</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="price" className="px-1 text-xs font-medium text-muted-foreground">
              Price Range
            </label>
            <select
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="h-11 rounded-md border border-input bg-background px-3 text-sm text-foreground outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
            >
              <option value="">Any Price</option>
              <option value="0-500000">Up to $500K</option>
              <option value="500000-1000000">$500K - $1M</option>
              <option value="1000000-2000000">$1M - $2M</option>
              <option value="2000000-99000000">$2M+</option>
            </select>
          </div>

          <div className="flex items-end">
            <Button
              type="submit"
              size="lg"
              className="h-11 w-full gap-2 bg-accent text-accent-foreground hover:bg-accent/90 lg:w-auto"
            >
              <Search className="size-4" />
              Search
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
