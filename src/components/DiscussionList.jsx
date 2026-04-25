function DiscussionList({ prompts }) {
  return (
    <ol className="discussion-list">
      {prompts.map((prompt) => (
        <li key={prompt}>{prompt}</li>
      ))}
    </ol>
  )
}

export default DiscussionList
