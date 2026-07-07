import type { Metadata } from 'next'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from '@/components/social-icons'
import { PageHeader } from '@/components/page-header'
import { ContactForm } from '@/components/contact/contact-form'

export const metadata: Metadata = {
  title: 'Contact | Premier Properties Group',
  description: 'Get in touch with Premier Properties Group. Visit our office, call us, or send a message.',
}

const hours = [
  { day: 'Monday – Friday', time: '9:00 AM – 7:00 PM' },
  { day: 'Saturday', time: '10:00 AM – 5:00 PM' },
  { day: 'Sunday', time: 'By Appointment' },
]

const socials = [
  { href: '#', label: 'Facebook', icon: Facebook },
  { href: '#', label: 'Instagram', icon: Instagram },
  { href: '#', label: 'Twitter', icon: Twitter },
  { href: '#', label: 'LinkedIn', icon: Linkedin },
]

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let’s Start a Conversation"
        description="Whether you're buying, selling, or renting, our team is ready to help you every step of the way."
      />

      <section className="bg-secondary py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8">
          {/* Info column */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <h2 className="font-serif text-2xl font-bold text-primary">Get in Touch</h2>
              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <MapPin className="size-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">Office Address</p>
                    <p className="text-muted-foreground">
                      9200 Wilshire Blvd, Suite 400
                      <br />
                      Beverly Hills, CA 90210
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Phone className="size-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <a
                      href="tel:+13105551234"
                      className="text-muted-foreground transition-colors hover:text-accent"
                    >
                      {'(310) 555-1234'}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Mail className="size-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a
                      href="mailto:hello@premierproperties.com"
                      className="text-muted-foreground transition-colors hover:text-accent"
                    >
                      hello@premierproperties.com
                    </a>
                  </div>
                </li>
              </ul>

              <div className="mt-6 border-t border-border pt-6">
                <div className="flex items-center gap-2 text-foreground">
                  <Clock className="size-5 text-accent" />
                  <h3 className="font-semibold">Business Hours</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm">
                  {hours.map((h) => (
                    <li key={h.day} className="flex justify-between text-muted-foreground">
                      <span>{h.day}</span>
                      <span className="font-medium text-foreground">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 border-t border-border pt-6">
                <p className="mb-3 text-sm font-semibold text-foreground">Follow Us</p>
                <div className="flex gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="flex size-10 items-center justify-center rounded-full bg-secondary text-primary transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      <social.icon className="size-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
              <iframe
                title="Premier Properties Group office location"
                src="https://www.google.com/maps?q=Beverly+Hills,+CA&output=embed"
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
          </div>

          {/* Form column */}
          <ContactForm />
        </div>
      </section>
    </>
  )
}
