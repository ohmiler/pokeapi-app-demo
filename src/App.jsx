import { useState, useEffect, createContext, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import ReactLoading from 'react-loading';

// Components
import FavPoke from './components/FavPoke'
import PokeInfo from './components/PokeInfo'

function App() {
  const [poke, setPoke] = useState(""); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [number, setNumber] = useState(1);
  const [fav, setFav] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState("");

  useEffect(() => {

    const loadPoke = async () => {
      try {

        setLoading(true);
        let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${number}`);

        setPoke(response.data);
        setError("");

      } catch(error) {
        setError("Something went wrong", error);
      } finally {
        setLoading(false);
      }
    }

    loadPoke();

    return () => {
      let abortController = new AbortController();
      abortController.abort();
    }
    

  }, [number])


  const prevPoke = () => {
    setNumber((number) => number - 1)
  }

  const nextPoke = () => {
    setNumber((number) => number + 1)
  }

  const addFav = () => {
    setFav((oldState) => [...oldState, poke])
  }

  const handleSearchQuery = (event) => {
    setSearchQuery(event.target.value)
  }

  const handleSearchSubmit =  async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchQuery}`);
      setPoke(response.data);
      setSearchQuery("");
    } catch(error) {
      console.error('Error searching:', error);
    }
  }

  const randomPoke = () => {
    setNumber(Math.floor(Math.random() * 1281) + 1);
  }

  return (
    <div className="max-w-5xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
      <div>
        {loading ? 
          <ReactLoading type='spin' color='black' height={'20%'} width={'20%'} /> 
          : 
          <>
            <h1>{poke?.name}</h1>
            <form onSubmit={handleSearchSubmit}>
              <input type="text" value={searchQuery} onChange={handleSearchQuery} placeholder='Search Pokemon' />
              <button>Search</button>
            </form>
            <button onClick={addFav}>Add to favourite</button>
            <button onClick={randomPoke}>Random Pokemon</button>
            <br />
            <PokeInfo poke={poke} prevPoke={prevPoke} nextPoke={nextPoke} />
          </>
        }

      </div>
      <div>
        <h2>Your favourite pokemon</h2>
        {fav.length > 0 ? <FavPoke fav={fav} /> : <div className='flex h-full justify-center items-center'><p>No favourite pokemon...</p></div>}
      </div>
    </div>
    </div>
  )
}

export default App
