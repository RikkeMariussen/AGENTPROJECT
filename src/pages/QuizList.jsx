import { quizzes } from '../data/quizzes/index'
import { useQuizStorage } from '../hooks/useQuizStorage'
import QuizCard from '../components/quiz/QuizCard'

function QuizCardWrapper({ quiz }) {
  const { getResult } = useQuizStorage(quiz.id)
  return <QuizCard quiz={quiz} hasPreviousResult={!!getResult()} />
}

export default function QuizList() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 animate-fade-in">
      <div className="mb-12 text-center">
        <p className="text-sage-500 text-xs font-medium tracking-widest uppercase mb-3">Explore</p>
        <h1 className="text-3xl font-light text-stone-800 mb-3">Quizzes</h1>
        <p className="text-stone-400 font-light text-sm max-w-md mx-auto">
          Test and deepen your understanding of meditation and breathwork.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        {quizzes.map((quiz) => (
          <QuizCardWrapper key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </div>
  )
}
