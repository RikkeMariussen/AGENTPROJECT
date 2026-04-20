import Button from '../ui/Button'

export default function ReturningUserPrompt({ onViewPrevious, onStartFresh }) {
  return (
    <div className="animate-fade-in bg-mist-50 border border-mist-100 rounded-3xl px-8 py-10 text-center">
      <p className="text-stone-500 text-sm font-light mb-2">Welcome back</p>
      <h2 className="text-stone-800 font-medium text-xl mb-3">
        You've taken this quiz before.
      </h2>
      <p className="text-stone-400 font-light text-sm mb-8 max-w-sm mx-auto">
        Would you like to review your previous result, or start fresh with a clean slate?
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button variant="ghost" onClick={onViewPrevious}>
          View Previous Result
        </Button>
        <Button onClick={onStartFresh}>
          Start Fresh
        </Button>
      </div>
    </div>
  )
}
