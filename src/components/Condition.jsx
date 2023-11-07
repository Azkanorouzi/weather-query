import { useState } from 'react'

export default function Condition({
  weatherData,
  date,
  time = true,
  forecast = false,
}) {
  const [curTime, setCurTime] = useState(new Date().toLocaleTimeString())
  const [curDate] = useState(new Date().toLocaleDateString())
  if (time) {
    setInterval(() => setCurTime(() => new Date().toLocaleTimeString()), 1000)
  }
  const conditionText = forecast
    ? weatherData?.day?.condition?.text
    : weatherData.weather.current.condition.text
  const conditionEmoji =
    conditionText.includes('cloud') ||
    conditionText.toLowerCase().includes('overcast')
      ? '🌥️'
      : conditionText.toLowerCase().includes('rain')
      ? '🌧️'
      : conditionText.toLowerCase().includes('sun')
      ? '🌞'
      : conditionText.toLowerCase().includes('snow')
      ? '⛄️'
      : ''
  return (
    <div className="px-4">
      <h1>
        {conditionEmoji} {conditionText}
      </h1>
      <span>{date ?? curDate}</span>
      <span> {time && curTime}</span>
    </div>
  )
}
