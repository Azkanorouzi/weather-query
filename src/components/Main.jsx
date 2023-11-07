import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Spinner from './Spinner'
import { CurLocationError } from '../config'
import { getWeatherData, getCurLocation, isHot } from '../helpers'
import Content from './Content'

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
      const weather = await getWeatherData(searchedTerm)
      setWeatherData({ weather })
      setIsFetchingWeather(false)
    } catch (err) {
      setWeatherData(err.message)
      setIsFetchingWeather(false)
    }
  }

  return (
    <main
      className={`background-initial background-${isHot(
        weatherData?.weather?.current?.temp_c
      )}`}
    >
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

export default Main
