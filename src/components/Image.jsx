import { useEffect, useState } from 'react'
import Spinner from './Spinner'
import { giphyApiUrl } from '../config'

export default function Image({ condition, conditionTerm }) {
  const [imgUrl, setImgUrl] = useState('')
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    const searchTerm =
      conditionTerm ??
      condition?.weather?.current?.condition?.text.replaceAll(' ', '+') +
        '+weather&rating=g' ??
      false
    getImageUrl(setIsFetching, setImgUrl, searchTerm)
  }, [])

  return isFetching ? (
    <Spinner small={true} />
  ) : (
    <div className="img-container py-5">
      <img
        src={`${imgUrl}`}
        alt={condition?.weather?.current?.condition?.text}
        className="img"
      />
    </div>
  )
}
async function getImageUrl(setIsFetching, setImgUrl, searchTerm) {
  if (!searchTerm) {
    setIsFetching(() => false)
    return
  }
  setIsFetching(() => true)
  const res = await fetch(`${giphyApiUrl}${searchTerm}`)
  const { data } = await res.json()
  setImgUrl(() => data.images.original.url)
  setIsFetching(() => false)
}
