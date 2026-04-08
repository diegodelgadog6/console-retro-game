
import './App.css'
import { useEffect, useState } from 'react'
import GameScreen from './components/GameScreen'
import Screen from './components/Screen'
import LeftControl from './components/LeftControl'
import RightControl from './components/RightControl'
import useFetch from './hooks/useFetch'

function App() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
  const { data, loading, error } = useFetch(url)
  const [pokemones, setPokemones] = useState([])
  const [position, setPosition] = useState(0)
  const [selectedPokemons, setSelectedPokemons] = useState([])
  const [screenMode, setScreenMode] = useState('selection')

  const moveCursor = (delta) => {
    setPosition((prev) => {
      const nextPosition = prev + delta
      const maxPosition = Math.max(0, pokemones.length - 1)

      if (nextPosition < 0) return 0
      if (nextPosition > maxPosition) return maxPosition
      return nextPosition
    })
  }

  const handleDirection = (direction) => {
    if (direction === 'up') {
      moveCursor(-3)
    }

    if (direction === 'down') {
      moveCursor(3)
    }

    if (direction === 'left') {
      moveCursor(-1)
    }

    if (direction === 'right') {
      moveCursor(1)
    }
  }

  const handleSelection = () => {
    if (screenMode !== 'selection') return

    const currentPokemon = pokemones[position]

    if (!currentPokemon) return

    setSelectedPokemons((prev) => {
      if (prev.some((pokemon) => pokemon.id === currentPokemon.id)) {
        return prev
      }

      if (prev.length >= 2) {
        return prev
      }

      const nextSelection = [...prev, currentPokemon]

      if (nextSelection.length === 2) {
        setScreenMode('game')
      }

      return nextSelection
    })
  }

  useEffect(() => {
    if (!data?.results) return

    const getPokemonDetails = async () => {
      const list = data.results.slice(0, 60).filter((pokemon) => pokemon.url)
      const requests = list.map((pokemon) => fetch(pokemon.url).then((res) => res.json()))
      const values = await Promise.all(requests)
      setPokemones(values)
    }

    getPokemonDetails()
  }, [data])

  return (
    <div className='min-h-screen bg-white flex items-center justify-center gap-0 p-6'>
      <LeftControl handleDirection={handleDirection} />
      {loading && <div className="w-[450px] h-[280px] border-4 border-solid flex items-center justify-center">Cargando...</div>}
      {error && <div className="w-[450px] h-[280px] border-4 border-solid flex items-center justify-center">Error cargando datos</div>}
      {!loading && !error && screenMode === 'selection' && (
        <Screen pokemones={pokemones} position={position} selectedPokemons={selectedPokemons} />
      )}
      {!loading && !error && screenMode === 'game' && (
        <GameScreen selectedPokemons={selectedPokemons} />
      )}
      <RightControl handleSelection={handleSelection} />
    </div>
  )
}

export default App
