// Weather api
const weatherApiKey = 'c4c5cd74351c4335bfa125028232608'
export const weatherApiUrl = `http://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=`
//&q=London&aqi=no
// Gify
const gifyApiKey = 'TjGQNv41vSnPPc5fuA9GweXkAPChDl4J'
export const gifyApiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${gifyApiKey}&tag=`
//hot+weather&rating=g
export function CurLocationError() {
  return (
    <div className="spinner-container">
      <h2>Search for a location to get weather data :)</h2>{' '}
    </div>
  )
}
