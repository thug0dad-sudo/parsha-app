function Highlights({ parsha }) {
  return (
    <div className="highlights-grid">
      <article className="highlight-card">
        <p className="highlight-label">This week</p>
        <h3>{parsha.civilDate}</h3>
        <p>{parsha.hebrewDate}</p>
      </article>
      <article className="highlight-card">
        <p className="highlight-label">Torah reading</p>
        <h3>{parsha.torahReference}</h3>
        <p>Featured in the annual reading cycle for this week.</p>
      </article>
      <article className="highlight-card">
        <p className="highlight-label">Big idea</p>
        <h3>{parsha.themes[0]}</h3>
        <p>{parsha.themes.slice(1).join(' • ')}</p>
      </article>
    </div>
  )
}

export default Highlights
