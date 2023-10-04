import main from '../assets/main.png'
import { useState } from 'react'
function Navbar({ setLocation, fetchWeatherData }) {
  const [searchedLoc, setSearchedLoc] = useState('')
  function handleSearchInput(e) {
    setSearchedLoc(e.target.value)
  }
  function handleSubmitButton(e) {
    e.preventDefault()
    setLocation(searchedLoc)
    fetchWeatherData(searchedLoc)
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand card-text font-size-large" href="#">
          <img src={main} alt="main" className="main-img" />
          Weather query
        </a>
        <form className="d-flex container" onSubmit={handleSubmitButton}>
          <input
            className="form-control me-2 border-black"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchedLoc}
            onChange={handleSearchInput}
          />
          <button
            className="btn btn-primary text-black border-black btn-outline-success"
            type="submit"
          >
            Search
          </button>
          <button
            className="btn btn-secondary text-black border-black btn-outline-success"
            type="submit"
          >
            C
          </button>
        </form>
      </div>
    </nav>
  )
}

export default Navbar
