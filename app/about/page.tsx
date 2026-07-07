import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Award, BadgeCheck, Building, Handshake, Mail, Phone, ShieldCheck, Trophy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PageHeader } from '@/components/page-header'

export const metadata: Metadata = {
  title: 'About Us | Premier Properties Group',
  description:
    'Learn about Premier Properties Group, our mission, our expert team, and our track record of excellence in luxury real estate.',
}

const stats = [
  { icon: Building, value: '25+', label: 'Years of Experience' },
  { icon: Handshake, value: '3,200+', label: 'Properties Sold' },
  { icon: BadgeCheck, value: '5,000+', label: 'Happy Clients' },
  { icon: Trophy, value: '48', label: 'Industry Awards' },
]

const team = [
  {
    name: 'Victoria Hale',
    title: 'Founder & Principal Broker',
    bio: 'With over two decades in luxury real estate, Victoria leads our team with an unwavering commitment to client success.',
    image: '/images/agent-1.png',
    email: 'victoria@premierproperties.com',
    phone: '(310) 555-1201',
  },
  {
    name: 'Marcus Bennett',
    title: 'Senior Sales Director',
    bio: 'Marcus specializes in high-value estates and has closed some of the region\u2019s most notable transactions.',
    image: '/images/agent-2.png',
    email: 'marcus@premierproperties.com',
    phone: '(310) 555-1202',
  },
  {
    name: 'Priya Nair',
    title: 'Luxury Property Specialist',
    bio: 'Priya brings a data-driven, personalized approach to helping buyers discover their perfect home.',
    image: '/images/agent-3.png',
    email: 'priya@premierproperties.com',
    phone: '(310) 555-1203',
  },
  {
    name: 'Robert Sinclair',
    title: 'Investment Advisor',
    bio: 'Robert guides clients through complex investment portfolios with clarity, discretion, and expertise.',
    image: '/images/agent-4.png',
    email: 'robert@premierproperties.com',
    phone: '(310) 555-1204',
  },
]

const certifications = [
  'Certified Luxury Home Marketing Specialist',
  'National Association of Realtors Member',
  'Accredited Buyer Representative',
  'Best Boutique Agency 2024 — Luxury Realty Awards',
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="A Legacy of Trust & Excellence"
        description="For over 25 years, Premier Properties Group has set the standard for luxury real estate service."
      />

      {/* Mission */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/about-office.png"
              alt="Premier Properties Group agents meeting with clients"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
              Our Mission
            </p>
            <h2 className="font-serif text-3xl font-bold text-balance text-primary sm:text-4xl">
              Redefining What It Means to Feel at Home
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              At Premier Properties Group, we believe a home is more than an address, it is the
              backdrop to life&apos;s most meaningful moments. Our mission is to guide every client
              with integrity, insight, and genuine care, transforming the process of buying and
              selling into an experience that feels effortless and personal.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              From first-time buyers to seasoned investors, we tailor our approach to your unique
              goals, delivering the discretion, expertise, and results our clients have trusted for
              over two decades.
            </p>
            <div className="mt-8 flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <ShieldCheck className="size-6 text-accent" />
                <span className="font-medium text-foreground">Trusted Advisors</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="size-6 text-accent" />
                <span className="font-medium text-foreground">Award-Winning Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="mx-auto size-8 text-accent" />
              <p className="mt-4 font-serif text-4xl font-bold">{stat.value}</p>
              <p className="mt-1 text-sm text-primary-foreground/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
              Our Team
            </p>
            <h2 className="font-serif text-3xl font-bold text-balance text-primary sm:text-4xl">
              Meet the Experts Behind Every Success
            </h2>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={member.image || '/placeholder.svg'}
                    alt={`Portrait of ${member.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm font-medium text-accent">{member.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
                  <div className="mt-4 space-y-2 border-t border-border pt-4 text-sm text-muted-foreground">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 transition-colors hover:text-accent"
                    >
                      <Mail className="size-4 text-accent" />
                      {member.email}
                    </a>
                    <a
                      href={`tel:${member.phone.replace(/[^+\d]/g, '')}`}
                      className="flex items-center gap-2 transition-colors hover:text-accent"
                    >
                      <Phone className="size-4 text-accent" />
                      {member.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-secondary py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
            Recognition
          </p>
          <h2 className="font-serif text-3xl font-bold text-balance text-primary sm:text-4xl">
            Certifications & Awards
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="flex items-center gap-3 rounded-lg border border-border bg-card p-5 text-left shadow-sm"
              >
                <BadgeCheck className="size-6 shrink-0 text-accent" />
                <span className="font-medium text-foreground">{cert}</span>
              </div>
            ))}
          </div>
          <Button
            asChild
            size="lg"
            className="mt-12 bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Link href="/contact">Work With Our Team</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
