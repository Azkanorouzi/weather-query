import Error from './Error'
import Spinner from './Spinner'
import Image from './Image'
import Flag from './Flag'
import Condition from './Condition'
import Temp from './Temp'
import { Stars, CloudFog2, Sunglasses, Wind } from 'react-bootstrap-icons'
import WeatherInfo from './weatherInfo'
import ForeCast from './Forecast'

export default function Content({ weatherData, isFetchingWeather }) {
  if (
    weatherData?.weather &&
    !weatherData?.weather?.current &&
    !weatherData?.weather?.location
  ) {
    const error = weatherData?.weather?.err

    return (
      <div className="spinner-container">
        <Error errTitle={'⛔️ ' + (error.message ?? 'Unvalid search term')}>
          <p className="text-warning">
            {error.message === 'Failed to fetch' ||
            error.message === 'Timeout: Request took too long to complete'
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
        <section className="col">
          <div className="row position-relative d-flex justify-content-center align-items-center flag-container">
            <Flag weatherData={weatherData} />
          </div>
          <div className="row">
            <Condition weatherData={weatherData} />
          </div>
          <div className="row">
            <Temp weatherData={weatherData} f="c" />
          </div>
        </section>
        <section className="col-6 position-relative d-flex justify-content-center align-items-center">
          <Image condition={weatherData} />
        </section>
        <section className="col pt-5">
          <div className="row ">
            <WeatherInfo
              Icon={<Stars scale={4} size={50} />}
              title="Feels like"
            >
              {weatherData.weather.current.feelslike_c + ' °C'}
            </WeatherInfo>
          </div>
          <div className="row">
            <WeatherInfo
              Icon={<CloudFog2 scale={4} size={50} />}
              title="Humidity"
            >
              {weatherData.weather.current.humidity}
            </WeatherInfo>
          </div>
          <div className="row">
            <WeatherInfo Icon={<Sunglasses scale={4} size={50} />} title="UV">
              {weatherData.weather.current.uv}
            </WeatherInfo>
          </div>
          <div className="row">
            <WeatherInfo Icon={<Wind scale={4} size={50} />} title="Wind speed">
              {weatherData.weather.current.wind_kph + ' kph'}
            </WeatherInfo>
          </div>
        </section>
      </div>
      <div className="row d-flex">
        <article className="col">
          <ForeCast
            weatherData={weatherData?.weather?.forecast?.forecastday[0]}
            date={weatherData?.weather?.forecast?.forecastday[0]?.date}
            forecast={true}
            title={'Tomorrow'}
          />
        </article>
        <article className="col">
          <ForeCast
            weatherData={weatherData?.weather?.forecast?.forecastday[1]}
            date={weatherData?.weather?.forecast?.forecastday[1]?.date}
            forecast={true}
            title={''}
          />
        </article>
        <article className="col">
          <ForeCast
            weatherData={weatherData?.weather?.forecast?.forecastday[2]}
            date={weatherData?.weather?.forecast?.forecastday[2]?.date}
            forecast={true}
          />
        </article>
      </div>
    </section>
  ) : (
    <div>No weather available</div>
  )
}
