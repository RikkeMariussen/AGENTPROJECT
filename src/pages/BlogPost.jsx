import { useParams, Navigate, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { posts } from '../data/blog/index'
import Button from '../components/ui/Button'

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  return (
    <div className="max-w-2xl mx-auto px-6 py-16 animate-fade-in">
      <Link
        to="/blog"
        className="inline-flex items-center text-xs text-stone-400 hover:text-sage-600 transition-colors mb-10"
      >
        ← Alle indlæg
      </Link>

      <article className="prose-custom">
        <ReactMarkdown
          components={{
            h1: ({ children }) => (
              <h1 className="text-3xl font-light text-stone-800 leading-snug mb-6">{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-lg font-medium text-stone-700 mt-10 mb-3">{children}</h2>
            ),
            p: ({ children }) => (
              <p className="text-stone-500 font-light leading-relaxed mb-5">{children}</p>
            ),
            em: ({ children }) => (
              <em className="text-stone-600 not-italic font-medium">{children}</em>
            ),
            strong: ({ children }) => (
              <strong className="font-semibold text-stone-700">{children}</strong>
            ),
          }}
        >
          {post.content}
        </ReactMarkdown>
      </article>

      {/* Quiz CTA */}
      <div className="mt-14 pt-8 border-t border-stone-200 text-center">
        <p className="text-stone-400 text-sm font-light mb-4">
          Klar til at teste din forståelse?
        </p>
        <Link to={`/quizzes/${post.quizId}`}>
          <Button>Tag quizzen: {post.title}</Button>
        </Link>
      </div>
    </div>
  )
}
