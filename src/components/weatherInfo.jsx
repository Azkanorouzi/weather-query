import { useState } from 'react'

export default function WeatherInfo({ Icon, title, children }) {
  return (
    <figure className="d-flex space-between align-items-center">
      {Icon}
      <figcaption className="ms-2">
        <h3>{title}</h3>
        <h4>{children}</h4>
      </figcaption>
    </figure>
  )
}
