export default function Image({ condition }) {
  const conditionText = condition?.current?.condition?.text ?? false
  return <h3>{conditionText}</h3>
}
