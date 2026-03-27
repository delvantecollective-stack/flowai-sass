import { useState } from 'react'

const plans = [
  {
    name: 'Starter',
    monthlyPrice: 0,
    yearlyPrice: 0,
    desc: 'Perfect for individuals and small projects.',
    color: 'border-white/10',
    badge: null,
    features: [
      '5 active projects',
      '3 team members',
      'Basic AI automation',
      '5GB storage',
      'Email support',
    ],
    cta: 'Get Started Free',
    ctaStyle: 'border border-white/10 hover:border-purple-500/50 text-white hover:bg-white/5',
  },
  {
    name: 'Pro',
    monthlyPrice: 29,
    yearlyPrice: 19,
    desc: 'For growing teams that need more power.',
    color: 'border-purple-500/50',
    badge: 'Most Popular',
    features: [
      'Unlimited projects',
      '25 team members',
      'Advanced AI automation',
      '100GB storage',
      'Priority support',
      'Custom integrations',
      'Analytics dashboard',
    ],
    cta: 'Start Pro Trial',
    ctaStyle: 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white btn-glow',
  },
  {
    name: 'Enterprise',
    monthlyPrice: 99,
    yearlyPrice: 79,
    desc: 'For large teams with advanced needs.',
    color: 'border-white/10',
    badge: null,
    features: [
      'Unlimited everything',
      'Unlimited team members',
      'Custom AI models',
      '1TB storage',
      '24/7 dedicated support',
      'SSO & advanced security',
      'Custom contracts',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
    ctaStyle: 'border border-white/10 hover:border-purple-500/50 text-white hover:bg-white/5',
  },
]

export default function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section id="pricing" className="py-32 px-6 bg-gradient-to-b from-transparent to-purple-950/10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase">Pricing</span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-5">
            Simple, transparent
            <br />
            <span className="gradient-text">pricing for everyone</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
            No hidden fees. No surprises. Cancel anytime.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full p-1">
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition ${!yearly ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition ${yearly ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'}`}
            >
              Yearly <span className="text-green-400 ml-1">-35%</span>
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white/3 border ${plan.color} rounded-2xl p-8 card-glow transition-all duration-300 ${plan.badge ? 'ring-1 ring-purple-500/30' : ''}`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                  {plan.badge}
                </div>
              )}

              <h3 className="text-white font-bold text-xl mb-1">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6">{plan.desc}</p>

              <div className="mb-8">
                <span className="text-5xl font-black text-white">
                  ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className="text-gray-400 ml-2">/month</span>
                {yearly && plan.monthlyPrice > 0 && (
                  <p className="text-green-400 text-sm mt-1">
                    Save ${(plan.monthlyPrice - plan.yearlyPrice) * 12}/year
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-gray-300 text-sm">
                    <span className="text-purple-400 text-lg">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`block text-center py-3 px-6 rounded-full font-semibold transition ${plan.ctaStyle}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
