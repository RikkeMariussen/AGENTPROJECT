export default function Button({ children, variant = 'primary', onClick, className = '', type = 'button' }) {
  const base = 'rounded-2xl px-6 py-3 font-medium text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-400'
  const variants = {
    primary: 'bg-sage-600 text-white hover:bg-sage-700 active:bg-sage-800',
    ghost: 'border border-stone-300 text-stone-700 bg-white hover:bg-stone-50 active:bg-stone-100',
    danger: 'border border-red-200 text-red-700 bg-red-50 hover:bg-red-100',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}
