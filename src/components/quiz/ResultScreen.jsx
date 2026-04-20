import { Link } from 'react-router-dom'
import Button from '../ui/Button'

export default function ResultScreen({ quiz, answers, onRetake }) {
  const score = answers.reduce(
    (acc, chosen, i) => (chosen === quiz.questions[i].correctIndex ? acc + 1 : acc),
    0
  )
  const pct = Math.round((score / quiz.questions.length) * 100)

  const message =
    pct === 100
      ? 'Perfekt resultat — smukt klaret.'
      : pct >= 70
      ? 'Godt gået. Bliv ved med at udforske.'
      : pct >= 40
      ? 'Et godt udgangspunkt. Hvert forsøg uddyber forståelsen.'
      : 'Hvert skridt på vejen betyder noget.'

  return (
    <div className="animate-fade-in">
      {/* Score summary */}
      <div className="text-center mb-10">
        <div className="inline-flex items-baseline gap-1 mb-2">
          <span className="text-5xl font-light text-sage-700">{score}</span>
          <span className="text-2xl text-stone-400 font-light">/ {quiz.questions.length}</span>
        </div>
        <p className="text-stone-400 text-sm font-light italic mb-1">{message}</p>
        <p className="text-xs text-stone-300">{pct}% korrekt</p>
      </div>

      {/* Per-question breakdown */}
      <div className="flex flex-col gap-3 mb-10">
        {quiz.questions.map((q, i) => {
          const correct = answers[i] === q.correctIndex
          return (
            <div
              key={q.id}
              className={`rounded-2xl border px-5 py-4 text-sm ${
                correct
                  ? 'border-sage-200 bg-sage-50'
                  : 'border-red-100 bg-red-50'
              }`}
            >
              <p className={`font-medium mb-2 ${correct ? 'text-sage-800' : 'text-red-700'}`}>
                {correct ? '✓' : '✗'} {q.text}
              </p>
              {!correct && (
                <p className="text-xs text-stone-500 font-light">
                  Dit svar: <span className="text-red-600">{q.options[answers[i]]}</span>
                  {' · '}Rigtigt: <span className="text-sage-700">{q.options[q.correctIndex]}</span>
                </p>
              )}
              {correct && (
                <p className="text-xs text-sage-600 font-light">{q.options[q.correctIndex]}</p>
              )}
            </div>
          )
        })}
      </div>

      {/* Actions */}
      <div className="flex gap-3 justify-center">
        <Button variant="ghost" onClick={onRetake}>Prøv Igen</Button>
        <Link to="/quizzes">
          <Button>Alle Quizzer</Button>
        </Link>
      </div>
    </div>
  )
}
