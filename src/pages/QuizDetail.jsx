import { useEffect, useState } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { quizzes } from '../data/quizzes/index'
import { useQuizStorage } from '../hooks/useQuizStorage'
import ProgressIndicator from '../components/quiz/ProgressIndicator'
import QuestionStep from '../components/quiz/QuestionStep'
import ResultScreen from '../components/quiz/ResultScreen'
import ReturningUserPrompt from '../components/quiz/ReturningUserPrompt'

export default function QuizDetail() {
  const { id } = useParams()
  const quiz = quizzes.find((q) => q.id === id)
  const { getResult, saveResult } = useQuizStorage(id)

  const [phase, setPhase] = useState('loading')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState([])

  useEffect(() => {
    setPhase('loading')
    setCurrentIndex(0)
    setAnswers([])
    const saved = getResult()
    setPhase(saved ? 'returning_prompt' : 'in_progress')
  }, [id])

  if (!quiz) return <Navigate to="/quizzes" replace />

  const handleAnswer = (optionIndex) => {
    const newAnswers = [...answers, optionIndex]
    setAnswers(newAnswers)
    if (currentIndex + 1 < quiz.questions.length) {
      setCurrentIndex(currentIndex + 1)
    } else {
      saveResult(newAnswers, quiz)
      setPhase('results')
    }
  }

  const handleViewPrevious = () => {
    const saved = getResult()
    if (saved) setAnswers(saved.answers)
    setPhase('results')
  }

  const handleStartFresh = () => {
    setCurrentIndex(0)
    setAnswers([])
    setPhase('in_progress')
  }

  const handleRetake = () => {
    setCurrentIndex(0)
    setAnswers([])
    setPhase('in_progress')
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      {/* Back link */}
      <Link
        to="/quizzes"
        className="inline-flex items-center text-xs text-stone-400 hover:text-sage-600 transition-colors mb-8"
      >
        ← All Quizzes
      </Link>

      {/* Quiz header */}
      <div className="mb-8">
        <h1 className="text-2xl font-light text-stone-800 mb-1">{quiz.title}</h1>
        <p className="text-stone-400 text-sm font-light">{quiz.description}</p>
      </div>

      {phase === 'loading' && null}

      {phase === 'returning_prompt' && (
        <ReturningUserPrompt
          onViewPrevious={handleViewPrevious}
          onStartFresh={handleStartFresh}
        />
      )}

      {phase === 'in_progress' && (
        <>
          <ProgressIndicator current={currentIndex + 1} total={quiz.questions.length} />
          <QuestionStep
            key={currentIndex}
            question={quiz.questions[currentIndex]}
            onAnswer={handleAnswer}
          />
        </>
      )}

      {phase === 'results' && (
        <ResultScreen
          quiz={quiz}
          answers={answers}
          onRetake={handleRetake}
        />
      )}
    </div>
  )
}
