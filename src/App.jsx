import { useEffect, useState } from 'react'
import Search from './components/Search.jsx'

const API_BASE_URL = 'https://api.themoviedb.org/3';
function App() {

  const [searchTerm, setSearchTerm] = useState('')
  useEffect(() => { }, [])

  return (
    <>
      <main>
        <div className="pattern" />
        <div className="wrapper">
          <header>
            <img src="hero.png" alt="hero panner" />
            <h1 className='capitalize'>Find <span className='text-gradient'>movies</span>  you'll enjoy without the hassle</h1>
          </header>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <h1 className="text-white text-2xl">{searchTerm}</h1>
        </div>
      </main>

    </>
  )
}

export default App
