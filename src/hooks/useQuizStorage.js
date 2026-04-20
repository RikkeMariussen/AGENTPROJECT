export function useQuizStorage(quizId) {
  const key = `quiz_result_${quizId}`

  const getResult = () => {
    try {
      const raw = localStorage.getItem(key)
      return raw ? JSON.parse(raw) : null
    } catch {
      return null
    }
  }

  const saveResult = (answers, quiz) => {
    const score = answers.reduce((acc, chosen, i) =>
      chosen === quiz.questions[i].correctIndex ? acc + 1 : acc, 0
    )
    const payload = {
      quizId,
      answers,
      score,
      completedAt: new Date().toISOString(),
    }
    try {
      localStorage.setItem(key, JSON.stringify(payload))
    } catch {
      // fail silently in private browsing or when storage is full
    }
  }

  return { getResult, saveResult }
}
