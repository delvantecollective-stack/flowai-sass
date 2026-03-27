const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CTO at Nexus Labs',
    avatar: '👩🏻',
    text: 'FlowAI completely transformed how our engineering team operates. We cut our sprint planning time by 70% and our deployment frequency doubled in the first month.',
    stars: 5,
  },
  {
    name: 'David Okafor',
    role: 'Product Manager at ScaleUp',
    avatar: '👨🏿',
    text: "I've tried every productivity tool out there. FlowAI is the first one that actually feels intelligent. It knows what I need before I even ask.",
    stars: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Founder at Designify',
    avatar: '👩🏽',
    text: 'As a solo founder, FlowAI is like having an extra team member. The automation features save me at least 3 hours every single day.',
    stars: 5,
  },
  {
    name: 'James Thornton',
    role: 'Engineering Lead at ByteHive',
    avatar: '🧑🏼',
    text: 'The integrations are seamless. Our entire GitHub + Slack + Notion workflow is now fully automated. The team loves it.',
    stars: 5,
  },
  {
    name: 'Amara Diallo',
    role: 'Operations Director at FintechPro',
    avatar: '👩🏾',
    text: "We onboarded 50 people to FlowAI in one afternoon. The UX is incredibly intuitive. Our team's efficiency score went up by 40% in 2 weeks.",
    stars: 5,
  },
  {
    name: 'Lucas Fernandez',
    role: 'CEO at CloudBase',
    avatar: '🧑🏽',
    text: 'FlowAI paid for itself in the first week. The ROI is undeniable. I recommend it to every founder I meet.',
    stars: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-5">
            Loved by teams
            <br />
            <span className="gradient-text">around the world</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Don't just take our word for it. Here's what our users have to say.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white/3 border border-white/10 rounded-2xl p-8 card-glow transition-all duration-300 hover:-translate-y-1"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array(t.stars).fill('⭐').map((s, i) => (
                  <span key={i} className="text-sm">{s}</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 leading-relaxed mb-6 text-sm">"{t.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
