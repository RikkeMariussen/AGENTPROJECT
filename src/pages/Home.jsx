import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

const benefits = [
  {
    title: 'Reduce Stress',
    body: 'Regular practice calms the nervous system and lowers cortisol, leaving you more resilient each day.',
  },
  {
    title: 'Sharpen Focus',
    body: 'Even a few minutes of mindful attention trains the mind to return to the present — a skill that carries into every task.',
  },
  {
    title: 'Sleep Deeply',
    body: 'Quieting mental chatter before bed creates the conditions for longer, more restorative sleep.',
  },
]

export default function Home() {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="max-w-2xl mx-auto px-6 pt-20 pb-16 text-center">
        <p className="text-sage-500 text-sm font-medium tracking-widest uppercase mb-4">
          A calm place to begin
        </p>
        <h1 className="text-4xl sm:text-5xl font-light text-stone-800 leading-tight mb-6">
          Begin Your Journey{' '}
          <span className="text-sage-600 font-normal">Inward</span>
        </h1>
        <p className="text-stone-500 text-lg font-light leading-relaxed mb-10 max-w-lg mx-auto">
          Meditation is not about emptying the mind — it's about learning to
          observe it. Explore our guided teachings, breathing exercises, and
          self-discovery quizzes at your own pace.
        </p>
        <Link to="/quizzes">
          <Button className="px-8 py-3.5 text-base">Explore the Quizzes</Button>
        </Link>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="border-t border-stone-200" />
      </div>

      {/* Benefits */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-center text-stone-400 text-xs font-medium tracking-widest uppercase mb-10">
          Why practise?
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-white rounded-3xl border border-stone-100 p-7 shadow-sm"
            >
              <h3 className="text-stone-700 font-medium mb-2">{b.title}</h3>
              <p className="text-stone-400 text-sm leading-relaxed font-light">{b.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
