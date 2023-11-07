// Weather api
const weatherApiKey = 'c4c5cd74351c4335bfa125028232608'
export const weatherApiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=`
//&q=London&aqi=no
// Gify
const giphyApiKey = 'TjGQNv41vSnPPc5fuA9GweXkAPChDl4J'
export const giphyApiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${giphyApiKey}&tag=`
export const forecastDays = '10'
// Country
export const countryApiUrl = 'https://restcountries.com/v3.1/name/'
//hot+weather&rating=g
export function CurLocationError() {
  return (
    <div className="spinner-container">
      <h2>Search for a location to get weather data :)</h2>{' '}
    </div>
  )
}
