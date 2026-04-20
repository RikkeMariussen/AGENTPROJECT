import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

const benefits = [
  {
    title: 'Reducer Stress',
    body: 'Regelmæssig praksis beroliger nervesystemet og sænker kortisolniveauet — og gør dig mere robust i hverdagen.',
  },
  {
    title: 'Skærp Fokus',
    body: 'Selv få minutters opmærksom tilstedeværelse træner sindet i at vende tilbage til nuet — en evne der bærer ind i alt, hvad du gør.',
  },
  {
    title: 'Sov Dybere',
    body: 'At stille den indre støj ned inden sengetid skaber de rette betingelser for en længere og mere genopbyggende søvn.',
  },
]

export default function Home() {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="max-w-2xl mx-auto px-6 pt-20 pb-16 text-center">
        <p className="text-sage-500 text-sm font-medium tracking-widest uppercase mb-4">
          Et roligt sted at begynde
        </p>
        <h1 className="text-4xl sm:text-5xl font-light text-stone-800 leading-tight mb-6">
          Begynd Din Rejse{' '}
          <span className="text-sage-600 font-normal">Indad</span>
        </h1>
        <p className="text-stone-500 text-lg font-light leading-relaxed mb-10 max-w-lg mx-auto">
          Meditation handler ikke om at tømme sindet — det handler om at lære
          at observere det. Udforsk vores vejledninger og quizzer i dit eget tempo.
        </p>
        <Link to="/quizzes">
          <Button className="px-8 py-3.5 text-base">Udforsk Quizzerne</Button>
        </Link>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="border-t border-stone-200" />
      </div>

      {/* Benefits */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-center text-stone-400 text-xs font-medium tracking-widest uppercase mb-10">
          Hvorfor meditere?
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
