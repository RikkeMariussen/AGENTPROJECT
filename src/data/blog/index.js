import omMeditationContent from './om-meditation.md?raw'
import omAtVaereStilleContent from './om-at-vaere-stille.md?raw'
import omAtVaereAfspaendtContent from './om-at-vaere-afspaendt.md?raw'
import omAtVaereOpmerksom from './om-at-vaere-opmerksom.md?raw'
import omAtLadeAltingVaereContent from './om-at-lade-alting-vaere.md?raw'

export const posts = [
  {
    slug: 'om-meditation',
    quizId: 'om-meditation',
    title: 'Om meditation',
    excerpt: 'Meditation handler ikke om at tømme sindet for tanker — det handler om at lære at observere det.',
    content: omMeditationContent,
  },
  {
    slug: 'om-at-vaere-stille',
    quizId: 'om-at-vaere-stille',
    title: 'Om at være stille',
    excerpt: 'Stilhed er ikke fravær af tanker eller larm. Det er en indre position i forhold til alt, der opstår.',
    content: omAtVaereStilleContent,
  },
  {
    slug: 'om-at-vaere-afspaendt',
    quizId: 'om-at-vaere-afspaendt',
    title: 'Om at være afspændt',
    excerpt: 'Afspændthed er ikke noget, du opnår ved at anstrenge dig — det opstår, når du holder op med at modstå det, der er.',
    content: omAtVaereAfspaendtContent,
  },
  {
    slug: 'om-at-vaere-opmerksom',
    quizId: 'om-at-vaere-opmerksom',
    title: 'Om at være opmærksom og lysvågen',
    excerpt: 'Opmærksomhed er ikke det samme som koncentration. Det er en åben, vågen tilstedeværelse uden at hænge fast i noget.',
    content: omAtVaereOpmerksom,
  },
  {
    slug: 'om-at-lade-alting-vaere',
    quizId: 'om-at-lade-alting-vaere',
    title: 'Om at lade alting være',
    excerpt: 'At lade alting være er ikke ligegyldighed — det er en aktiv beslutning om ikke at modstå det, der allerede er.',
    content: omAtLadeAltingVaereContent,
  },
]
