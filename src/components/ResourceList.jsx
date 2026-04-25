function ResourceList({ resources }) {
  return (
    <div className="resource-grid">
      {resources.map((resource) => (
        <a
          key={resource.url}
          className="resource-card"
          href={resource.url}
          target="_blank"
          rel="noreferrer"
        >
          <p className="resource-type">{resource.type}</p>
          <h3>{resource.title}</h3>
          <p>{resource.description}</p>
        </a>
      ))}
    </div>
  )
}

export default ResourceList
