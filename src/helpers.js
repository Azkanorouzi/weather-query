import { weatherApiUrl, gifyApiUrl } from './config'
export function isHot(temp = 10, cf = 'c') {
  if (cf === 'c') {
    return temp < 6 ? 'cold' : temp < 26 ? 'good' : 'hot'
  }
  if (cf === 'f') {
    return temp < 42.8 ? 'cold' : temp < 78.8 ? 'good' : 'hot'
  }
  return false
}
// Timeout promise
const timeoutPromise = () =>
  new Promise((_, reject) => {
    setTimeout(() => {
      reject('Timeout: Request took too long to complete')
    }, 10000)
  })

export async function getWeatherData(searchedTerm) {
  try {
    const res = await Promise.race([
      fetch(`${weatherApiUrl}${searchedTerm}&aqi=no`),
      timeoutPromise(),
    ])
    if (res.status == 400)
      throw new Error('search term is not a valid location')
    const { current, location } = await res.json('')

    return { current, location }
  } catch (err) {
    console.error(err.message)
    return { err }
  }
}

// This function will get the current location
export function getCurLocation(setLocation) {
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
