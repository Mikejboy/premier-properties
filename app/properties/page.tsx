import { Suspense } from 'react'
import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PropertyListings } from '@/components/properties/property-listings'

export const metadata: Metadata = {
  title: 'Properties | Premier Properties Group',
  description: 'Browse our curated portfolio of luxury homes, villas, and estates for sale and rent.',
}

export default function PropertiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Listings"
        title="Explore Our Properties"
        description="Browse our curated collection of exceptional homes for sale and rent, and filter to find your perfect match."
      />
      <Suspense fallback={<div className="py-24 text-center text-muted-foreground">Loading properties…</div>}>
        <PropertyListings />
      </Suspense>
    </>
  )
}
