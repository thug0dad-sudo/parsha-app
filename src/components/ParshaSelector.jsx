function ParshaSelector({ options, selectedSlug, onChange }) {
  return (
    <label className="selector-card">
      <span className="selector-label">Choose a featured parsha</span>
      <select value={selectedSlug} onChange={(event) => onChange(event.target.value)}>
        {options.map((option) => (
          <option key={option.slug} value={option.slug}>
            {option.name}
          </option>
        ))}
      </select>
    </label>
  )
}

export default ParshaSelector
