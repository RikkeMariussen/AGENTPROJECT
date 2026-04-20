import { Link } from 'react-router-dom'

export default function QuizCard({ quiz, hasPreviousResult }) {
  return (
    <div className="bg-white rounded-3xl border border-stone-100 shadow-sm p-7 flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <h2 className="text-stone-800 font-medium text-lg leading-snug">{quiz.title}</h2>
        {hasPreviousResult && (
          <span className="shrink-0 text-xs font-medium text-sage-600 bg-sage-50 border border-sage-200 rounded-full px-3 py-1">
            Gennemført
          </span>
        )}
      </div>
      <p className="text-stone-400 text-sm leading-relaxed font-light flex-1">{quiz.description}</p>
      <div className="flex items-center justify-between pt-2 border-t border-stone-100">
        <span className="text-xs text-stone-400">{quiz.questions.length} spørgsmål</span>
        {hasPreviousResult ? (
          <div className="flex items-center gap-4">
            <Link
              to={`/quizzes/${quiz.id}?vis=tidligere`}
              className="text-sm font-medium text-mist-600 hover:text-mist-800 transition-colors"
            >
              Se forsøg →
            </Link>
            <Link
              to={`/quizzes/${quiz.id}`}
              className="text-sm font-medium text-sage-600 hover:text-sage-800 transition-colors"
            >
              Tag igen →
            </Link>
          </div>
        ) : (
          <Link
            to={`/quizzes/${quiz.id}`}
            className="text-sm font-medium text-sage-600 hover:text-sage-800 transition-colors"
          >
            Start →
          </Link>
        )}
      </div>
    </div>
  )
}
