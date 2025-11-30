import { useState } from 'react'
import './App.css'
import Search from './components/Search.jsx'
function App() {

  const [searchTerm, setSearchTerm] = useState('')

  return (
    <>
      <main>
        <div className="pattern" />
        <div className="wrapper">
          <img src="hero.png" alt="hero panner" />
          <header>
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
