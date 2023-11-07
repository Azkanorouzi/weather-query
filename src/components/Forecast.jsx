import Condition from './Condition'
import Image from './Image'
export default function ForeCast({ weatherData, date }) {
  return (
    <article className=" p-4">
      <Condition
        weatherData={weatherData}
        time={false}
        date={date}
        forecast={true}
      />
    </article>
  )
}
