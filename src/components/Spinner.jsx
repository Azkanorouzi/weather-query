function Spinner({ small }) {
  if (small)
    return (
      <div
        className="spinner-border spinner-small spinner-border-lg"
        role="status"
      >
        <span className="visually-hidden">Loading ...</span>
      </div>
    )
  return (
    <div className="spinner-container">
      <div
        className="spinner-border spinner-big spinner-border-xl"
        role="status"
      >
        <span className="visually-hidden">Loading ...</span>
      </div>
    </div>
  )
}
export default Spinner
