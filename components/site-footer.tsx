import Link from 'next/link'
import { Building2, Mail, MapPin, Phone } from 'lucide-react'
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from '@/components/social-icons'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/properties', label: 'Properties' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
]

const services = ['Buying', 'Selling', 'Renting', 'Property Management', 'Investment Advisory']

const socials = [
  { href: '#', label: 'Facebook', icon: FacebookIcon },
  { href: '#', label: 'Instagram', icon: InstagramIcon },
  { href: '#', label: 'Twitter', icon: TwitterIcon },
  { href: '#', label: 'LinkedIn', icon: LinkedinIcon },
]

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-md bg-accent text-accent-foreground">
                <Building2 className="size-5" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-serif text-lg font-bold">Premier Properties</span>
                <span className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-accent">
                  Group
                </span>
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              A boutique luxury real estate agency dedicated to helping discerning clients find
              extraordinary homes.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex size-9 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <social.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold">Services</h3>
            <ul className="space-y-3 text-sm">
              {services.map((service) => (
                <li key={service} className="text-primary-foreground/70">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold">Get in Touch</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                <span>9200 Wilshire Blvd, Suite 400, Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-accent" />
                <a href="tel:+13105551234" className="transition-colors hover:text-accent">
                  {'(310) 555-1234'}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-accent" />
                <a
                  href="mailto:hello@premierproperties.com"
                  className="transition-colors hover:text-accent"
                >
                  hello@premierproperties.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/15 pt-8 text-sm text-primary-foreground/60 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Premier Properties Group. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-accent">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-accent">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
