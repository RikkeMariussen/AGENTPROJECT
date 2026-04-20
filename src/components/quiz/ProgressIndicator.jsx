import ProgressBar from '../ui/ProgressBar'

export default function ProgressIndicator({ current, total }) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs text-stone-400 font-medium">
          Spørgsmål {current} af {total}
        </span>
        <span className="text-xs text-stone-400">
          {Math.round((current / total) * 100)}%
        </span>
      </div>
      <ProgressBar current={current} total={total} />
    </div>
  )
}
