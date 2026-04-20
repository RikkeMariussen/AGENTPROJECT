import { Link } from 'react-router-dom'

export default function QuizCard({ quiz, hasPreviousResult }) {
  return (
    <div className="bg-white rounded-3xl border border-stone-100 shadow-sm p-7 flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <h2 className="text-stone-800 font-medium text-lg leading-snug">{quiz.title}</h2>
        {hasPreviousResult && (
          <span className="shrink-0 text-xs font-medium text-sage-600 bg-sage-50 border border-sage-200 rounded-full px-3 py-1">
            Completed
          </span>
        )}
      </div>
      <p className="text-stone-400 text-sm leading-relaxed font-light flex-1">{quiz.description}</p>
      <div className="flex items-center justify-between pt-2 border-t border-stone-100">
        <span className="text-xs text-stone-400">{quiz.questions.length} questions</span>
        <Link
          to={`/quizzes/${quiz.id}`}
          className="text-sm font-medium text-sage-600 hover:text-sage-800 transition-colors"
        >
          {hasPreviousResult ? 'Retake →' : 'Start →'}
        </Link>
      </div>
    </div>
  )
}
