import { countryApiUrl } from '../config'
import { useState, useEffect } from 'react'
import Spinner from './Spinner'

export default function Flag(weatherData) {
  const [flagUrl, setFlagUrl] = useState('')
  const [isFetching, setIsFetching] = useState(false)
  useEffect(() => {
    const searchTerm = weather?.location?.country ?? false
    getFlag(setIsFetching, setFlagUrl, searchTerm)
  }, [])
  const { weather } = weatherData.weatherData

  return isFetching ? (
    <Spinner small={true} />
  ) : (
    <img src={`${flagUrl}`} alt={weather?.location?.country} className="flag" />
  )
}
async function getFlag(setIsFetching, setFlagUrl, searchTerm) {
  if (!searchTerm) {
    setIsFetching(() => false)
    return
  }
  setTimeout(() => setIsFetching(() => false), 4000)
  setIsFetching(() => true)
  const res = await fetch(`${countryApiUrl}${searchTerm}`)
  const [data] = await res.json()
  setFlagUrl(() => data.flags.png)
  setIsFetching(() => false)
}
