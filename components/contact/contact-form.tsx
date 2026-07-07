'use client'

import { useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'

const interests = ['Buying', 'Selling', 'Renting']

export function ContactForm() {
  const [interest, setInterest] = useState('Buying')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const fieldClass =
    'h-11 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground outline-none focus:border-accent focus:ring-2 focus:ring-accent/30'

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-12 text-center shadow-sm">
        <CheckCircle2 className="size-14 text-accent" />
        <h3 className="mt-4 font-serif text-2xl font-bold text-primary">Thank You!</h3>
        <p className="mt-2 max-w-sm text-muted-foreground">
          Your message has been received. One of our agents will be in touch with you within 24
          hours.
        </p>
        <Button
          onClick={() => setSubmitted(false)}
          variant="outline"
          className="mt-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
    >
      <h2 className="font-serif text-2xl font-bold text-primary">Send Us a Message</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Fill out the form and our team will respond promptly.
      </p>

      <div className="mt-6 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-sm font-medium text-foreground">
              Full Name
            </label>
            <input id="name" type="text" required placeholder="Jane Doe" className={fieldClass} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-medium text-foreground">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="jane@example.com"
              className={fieldClass}
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            Phone
          </label>
          <input id="phone" type="tel" placeholder="(555) 123-4567" className={fieldClass} />
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-foreground">I&apos;m interested in</span>
          <div className="flex flex-wrap gap-3">
            {interests.map((option) => (
              <label
                key={option}
                className={`cursor-pointer rounded-md border px-4 py-2 text-sm font-medium transition-colors ${
                  interest === option
                    ? 'border-accent bg-accent text-accent-foreground'
                    : 'border-input bg-background text-foreground hover:border-accent'
                }`}
              >
                <input
                  type="radio"
                  name="interest"
                  value={option}
                  checked={interest === option}
                  onChange={(e) => setInterest(e.target.value)}
                  className="sr-only"
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="text-sm font-medium text-foreground">
            Message
          </label>
          <textarea
            id="message"
            required
            rows={5}
            placeholder="Tell us about what you're looking for..."
            className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
          />
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
        >
          <Send className="size-4" />
          Send Message
        </Button>
      </div>
    </form>
  )
}
