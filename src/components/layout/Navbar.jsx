import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive
        ? 'text-sage-700 border-b-2 border-sage-400 pb-0.5'
        : 'text-stone-500 hover:text-sage-700'
    }`

  return (
    <header className="bg-stone-50 border-b border-stone-100">
      <nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <NavLink to="/" className="text-sage-700 font-semibold text-lg tracking-tight">
          Scenius
        </NavLink>
        <div className="flex items-center gap-8">
          <NavLink to="/" end className={linkClass}>Hjem</NavLink>
          <NavLink to="/tutorials" className={linkClass}>Vejledninger</NavLink>
          <NavLink to="/quizzes" className={linkClass}>Quizzer</NavLink>
          <NavLink to="/blog" className={linkClass}>Blog</NavLink>
        </div>
      </nav>
    </header>
  )
}
