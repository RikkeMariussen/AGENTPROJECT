import { useState } from 'react'

export default function QuestionStep({ question, onAnswer }) {
  const [selected, setSelected] = useState(null)

  const handleSelect = (index) => {
    if (selected !== null) return
    setSelected(index)
    setTimeout(() => onAnswer(index), 220)
  }

  return (
    <div className="animate-slide-up">
      <h2 className="text-stone-800 text-xl font-light leading-snug mb-8">
        {question.text}
      </h2>
      <div className="flex flex-col gap-3">
        {question.options.map((option, index) => {
          const isSelected = selected === index
          return (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              disabled={selected !== null}
              className={`w-full text-left rounded-2xl border px-5 py-4 text-sm font-light transition-all duration-150
                ${isSelected
                  ? 'border-sage-400 bg-sage-50 text-sage-800 shadow-sm'
                  : selected !== null
                    ? 'border-stone-100 bg-stone-50 text-stone-400 cursor-default'
                    : 'border-stone-200 bg-white text-stone-700 hover:border-sage-300 hover:bg-sage-50 cursor-pointer'
                }`}
            >
              <span className="font-medium text-stone-400 mr-3">
                {String.fromCharCode(65 + index)}.
              </span>
              {option}
            </button>
          )
        })}
      </div>
    </div>
  )
}
