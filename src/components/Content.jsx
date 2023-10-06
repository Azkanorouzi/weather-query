import Error from './Error'
import Spinner from './Spinner'
import Image from './Image'

export default function Content({ weatherData, location, isFetchingWeather }) {
  if (
    weatherData?.weather &&
    !weatherData?.weather?.current &&
    !weatherData?.weather?.location
  ) {
    const error = weatherData?.weather?.err
    console.log(error.message, error.message.trim('') === 'Failed to fetch')
    return (
      <div className="spinner-container">
        <Error errTitle={'⛔️ ' + (error ?? 'Unvalid search term')}>
          <p className="text-warning">
            {error.message === 'Failed to fetch'
              ? 'Check your internet connection please'
              : error
              ? `Location not found. Search must be in the form of "City", "City,
              State" or "City, Country".`
              : 'Something went wrong ... Check your internet connection or use a vpn'}
          </p>
        </Error>
      </div>
    )
  }
  return isFetchingWeather ? (
    <Spinner></Spinner>
  ) : weatherData ? (
    <section className="container-fluid">
      <div className="row">
        <section className="col bg-danger">
          <div className="row">Something</div>
          <div className="row">Something else</div>
          <div className="row">Something else</div>
        </section>
        <section className="col-6 bg-warning">
          <Image condition={weatherData} />
        </section>
        <section className="col bg-danger">
          <div className="row">Something</div>
          <div className="row">Something else</div>
          <div className="row">Something else</div>
          <div className="row">Something else</div>
        </section>
      </div>
      <div className="row">
        <div className="col">
          <button>Daily</button>
          <button>Hourly</button>
        </div>
        <div className="col-10"></div>
      </div>
      <div className="row">
        <article className="col">1</article>
        <article className="col">2</article>
        <article className="col">3</article>
        <article className="col">4</article>
        <article className="col">5</article>
        <article className="col">6</article>
        <article className="col">7</article>
      </div>
    </section>
  ) : (
    <div>No weather available</div>
  )
}
