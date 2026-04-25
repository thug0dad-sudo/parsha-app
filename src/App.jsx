import { useMemo, useState } from 'react'
import ResourceList from './components/ResourceList.jsx'
import DiscussionList from './components/DiscussionList.jsx'
import Highlights from './components/Highlights.jsx'
import ParshaSelector from './components/ParshaSelector.jsx'
import { getCurrentParsha, parshaCatalog } from './data/parsha.js'

function App() {
  const detectedParsha = useMemo(() => getCurrentParsha(), [])
  const [selectedSlug, setSelectedSlug] = useState(detectedParsha.slug)

  const currentParsha =
    parshaCatalog.find((parsha) => parsha.slug === selectedSlug) ?? detectedParsha

  return (
    <main className="app-shell">
      <section className="hero-card">
        <div className="hero-topbar">
          <div>
            <p className="eyebrow">This week's Torah portion</p>
            <p className="detected-note">Auto-detected for this week, with manual switching built in.</p>
          </div>
          <ParshaSelector
            options={parshaCatalog}
            selectedSlug={selectedSlug}
            onChange={setSelectedSlug}
          />
        </div>

        <div className="hero-copy">
          <div>
            <h1>{currentParsha.name}</h1>
            <p className="hebrew-name">{currentParsha.hebrewName}</p>
            <p className="meta-line">
              {currentParsha.civilDate} • {currentParsha.hebrewDate}
            </p>
            <p className="reference">{currentParsha.torahReference}</p>
          </div>
          <aside className="hero-aside">
            <p className="eyebrow">Why it matters</p>
            <p>{currentParsha.summary}</p>
          </aside>
        </div>

        <div className="theme-chips">
          {currentParsha.themes.map((theme) => (
            <span key={theme} className="theme-chip">
              {theme}
            </span>
          ))}
        </div>
      </section>

      <Highlights parsha={currentParsha} />

      <section className="content-grid">
        <article className="panel">
          <div className="panel-header">
            <p className="eyebrow">Resources</p>
            <h2>Read and learn</h2>
          </div>
          <ResourceList resources={currentParsha.resources} />
        </article>

        <article className="panel">
          <div className="panel-header">
            <p className="eyebrow">Discussion</p>
            <h2>Talk about it</h2>
          </div>
          <DiscussionList prompts={currentParsha.discussionPrompts} />
        </article>
      </section>
    </main>
  )
}

export default App
