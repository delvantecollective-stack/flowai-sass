export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 hero-glow overflow-hidden">

      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Glow orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
          Powered by Advanced AI — Now in Beta
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 tracking-tight">
          Work Smarter with
          <br />
          <span className="gradient-text">AI-Powered Flow</span>
        </h1>

        {/* Subheadline */}
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          FlowAI automates your repetitive tasks, organizes your workflow, and helps your team
          move 10x faster — without the burnout.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="#" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg transition btn-glow">
            Start for Free →
          </a>
          <a href="#" className="border border-white/10 hover:border-purple-500/50 text-white px-8 py-4 rounded-full font-semibold text-lg transition hover:bg-white/5">
            Watch Demo ▶
          </a>
        </div>

        {/* Social proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {['🧑🏽', '👩🏻', '👨🏿', '👩🏼', '🧑🏾'].map((emoji, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gray-800 border-2 border-[#050510] flex items-center justify-center text-sm">
                  {emoji}
                </div>
              ))}
            </div>
            <span><strong className="text-white">12,000+</strong> teams already using FlowAI</span>
          </div>
          <div className="flex items-center gap-1">
            {'⭐⭐⭐⭐⭐'.split('').map((s, i) => <span key={i}>{s}</span>)}
            <span className="ml-1"><strong className="text-white">4.9/5</strong> rating</span>
          </div>
        </div>

        {/* Hero image placeholder - Dashboard mockup */}
        <div className="mt-16 relative">
          <div className="bg-gradient-to-b from-[#0d0d2b] to-[#050510] border border-white/10 rounded-2xl p-6 max-w-4xl mx-auto shadow-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <div className="flex-1 bg-white/5 rounded-full h-6 ml-4" />
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              {[
                { label: 'Tasks Automated', value: '2,847', color: 'from-purple-600 to-purple-800' },
                { label: 'Time Saved', value: '340 hrs', color: 'from-blue-600 to-blue-800' },
                { label: 'Team Efficiency', value: '+94%', color: 'from-green-600 to-green-800' },
              ].map(stat => (
                <div key={stat.label} className={`bg-gradient-to-br ${stat.color} rounded-xl p-4 text-left`}>
                  <p className="text-white/60 text-xs mb-1">{stat.label}</p>
                  <p className="text-white font-bold text-2xl">{stat.value}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[80, 60, 90, 45, 70, 85, 55, 75].map((h, i) => (
                <div key={i} className="bg-white/5 rounded-lg p-3 flex flex-col gap-2">
                  <div className="w-full bg-white/5 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full" style={{ width: `${h}%` }} />
                  </div>
                  <div className="h-2 bg-white/5 rounded w-3/4" />
                </div>
              ))}
            </div>
          </div>
          {/* Glow under mockup */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-purple-600/20 blur-2xl rounded-full" />
        </div>
      </div>
    </section>
  )
}
