export default function Temp({ weatherData, f = 'c' }) {
  const temp = weatherData.weather.current[`temp_${f}`]
  return (
    <div className="px-4">
      <h2>
        {temp} °{f}
      </h2>
    </div>
  )
}
