const features = [
  {
    icon: '⚡',
    title: 'Smart Automation',
    desc: 'Let AI handle repetitive tasks automatically. Set rules once and watch FlowAI execute them perfectly every time.',
    color: 'from-yellow-500/20 to-orange-500/20',
    border: 'border-yellow-500/20',
    iconBg: 'bg-yellow-500/10 text-yellow-400',
  },
  {
    icon: '🧠',
    title: 'AI Task Manager',
    desc: 'Intelligent task prioritization based on deadlines, dependencies, and team capacity — always know what to do next.',
    color: 'from-purple-500/20 to-pink-500/20',
    border: 'border-purple-500/20',
    iconBg: 'bg-purple-500/10 text-purple-400',
  },
  {
    icon: '📊',
    title: 'Real-Time Analytics',
    desc: 'Beautiful dashboards showing team performance, bottlenecks, and productivity trends at a glance.',
    color: 'from-blue-500/20 to-cyan-500/20',
    border: 'border-blue-500/20',
    iconBg: 'bg-blue-500/10 text-blue-400',
  },
  {
    icon: '🔗',
    title: '100+ Integrations',
    desc: 'Connect with Slack, Notion, GitHub, Jira, Google Workspace and more. FlowAI fits right into your existing tools.',
    color: 'from-green-500/20 to-teal-500/20',
    border: 'border-green-500/20',
    iconBg: 'bg-green-500/10 text-green-400',
  },
  {
    icon: '🛡️',
    title: 'Enterprise Security',
    desc: 'SOC 2 compliant with end-to-end encryption. Your data is safe, private, and always under your control.',
    color: 'from-red-500/20 to-rose-500/20',
    border: 'border-red-500/20',
    iconBg: 'bg-red-500/10 text-red-400',
  },
  {
    icon: '🌍',
    title: 'Global Collaboration',
    desc: 'Work seamlessly across time zones with async-first features, smart notifications, and live presence indicators.',
    color: 'from-indigo-500/20 to-violet-500/20',
    border: 'border-indigo-500/20',
    iconBg: 'bg-indigo-500/10 text-indigo-400',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase">Features</span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-5">
            Everything your team needs
            <br />
            <span className="gradient-text">to move faster</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            FlowAI brings together the tools your team loves with the intelligence they need to work without friction.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className={`bg-gradient-to-br ${f.color} border ${f.border} rounded-2xl p-8 card-glow transition-all duration-300 hover:-translate-y-1`}
            >
              <div className={`w-12 h-12 rounded-xl ${f.iconBg} flex items-center justify-center text-2xl mb-5`}>
                {f.icon}
              </div>
              <h3 className="text-white font-bold text-xl mb-3">{f.title}</h3>
              <p className="text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
