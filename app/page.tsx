import { Hero } from '@/components/home/hero'
import { FeaturedProperties } from '@/components/home/featured-properties'
import { WhyChooseUs } from '@/components/home/why-choose-us'
import { Testimonials } from '@/components/home/testimonials'
import { CtaSection } from '@/components/home/cta'

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <WhyChooseUs />
      <Testimonials />
      <CtaSection />
    </>
  )
}
