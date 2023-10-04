import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Spinner from './Spinner'
import { CurLocationError, weatherApiUrl } from './config'

function Main() {
  const [location, setLocation] = useState(null)
  const [isFetchingWeather, setIsFetchingWeather] = useState(false)
  const [weatherData, setWeatherData] = useState(null)
  useEffect(() => {
    location || getCurLocation(setLocation)
  }, [])
  // This function will fetch the data for the weather
  const fetchWeatherData = async (searchedTerm) => {
    setIsFetchingWeather(true)
    try {
      const { current, location } = await getWeatherData(searchedTerm)
      console.log(current, location)
      setWeatherData({ current, location })
      setIsFetchingWeather(false)
    } catch (err) {
      console.error(err.message)
      setIsFetchingWeather(false)
    }
  }
  return (
    <main className="background-initial">
      <Navbar setLocation={setLocation} fetchWeatherData={fetchWeatherData} />
      {location === 'err' ? (
        <CurLocationError />
      ) : location ? (
        <Content
          location={location}
          weatherData={weatherData}
          isFetchingWeather={isFetchingWeather}
        ></Content>
      ) : (
        <Spinner />
      )}
    </main>
  )
}

function Content({ weatherData, location, isFetchingWeather }) {
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
        <section className="col-6 bg-warning">Image</section>
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

async function getWeatherData(searchedTerm) {
  try {
    const res = await fetch(`${weatherApiUrl}${searchedTerm}&aqi=no`)
    if (res.status == 400)
      throw new Error('Error: search term is not a valid location')
    const { current, location } = await res.json('')
    return { current, location }
  } catch (err) {
    console.error(err.message)
    return { err }
  }
}

// This function will get the current location
function getCurLocation(setLocation) {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        setLocation({ latitude, longitude })
      },
      (error) => {
        console.error(error.message)
        setLocation((loc) => loc || 'err')
      },
      { timeout: 10000 }
    )
  } else {
    console.error('Geolocation is not available in this browser')
  }
}
export default Main
