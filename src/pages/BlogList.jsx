import { posts } from '../data/blog/index'
import BlogCard from '../components/blog/BlogCard'

export default function BlogList() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 animate-fade-in">
      <div className="mb-12 text-center">
        <p className="text-sage-500 text-xs font-medium tracking-widest uppercase mb-3">Fordybelse</p>
        <h1 className="text-3xl font-light text-stone-800 mb-3">Blog</h1>
        <p className="text-stone-400 font-light text-sm max-w-md mx-auto">
          Uddybende tekster om meditationens principper og praksis.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
