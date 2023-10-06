export default function Error({ errTitle, children }) {
  return (
    <article className="text-danger bg-dark py-4 px-4 border-danger">
      <h3>{errTitle}</h3>
      {children}
    </article>
  )
}
