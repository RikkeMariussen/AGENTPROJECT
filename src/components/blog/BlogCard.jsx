import { Link } from 'react-router-dom'

export default function BlogCard({ post }) {
  return (
    <div className="bg-white rounded-3xl border border-stone-100 shadow-sm p-7 flex flex-col gap-4">
      <div>
        <h2 className="text-stone-800 font-medium text-lg leading-snug mb-2">{post.title}</h2>
        <p className="text-stone-400 text-sm leading-relaxed font-light">{post.excerpt}</p>
      </div>
      <div className="pt-2 border-t border-stone-100">
        <Link
          to={`/blog/${post.slug}`}
          className="text-sm font-medium text-sage-600 hover:text-sage-800 transition-colors"
        >
          Læs indlæg →
        </Link>
      </div>
    </div>
  )
}
