import ComingSoonBanner from '../components/tutorials/ComingSoonBanner'

/**
 * To add a video tutorial, import from src/data/tutorials.js and map over
 * TutorialCard components. Each video entry shape: { id, title, thumbnail, videoUrl, duration }
 */
const videos = [] // populated from data/tutorials.js when ready

export default function Tutorials() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 animate-fade-in">
      <div className="mb-12 text-center">
        <p className="text-sage-500 text-xs font-medium tracking-widest uppercase mb-3">Lær</p>
        <h1 className="text-3xl font-light text-stone-800">Videovejledninger</h1>
      </div>

      {videos.length === 0 ? (
        <ComingSoonBanner />
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* TutorialCard components will go here */}
        </div>
      )}
    </div>
  )
}
