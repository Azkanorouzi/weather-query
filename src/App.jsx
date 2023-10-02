import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Spinner from './components/Spinner'
function App() {
  return <Main></Main>
}
function Main() {
  const [location, setLocation] = useState(null)
  useEffect(() => {}, [])
  return (
    <main className="background-initial">
      <Navbar />
      <div className="spinner-container">
        <Spinner />
      </div>
    </main>
  )
}
export default App
