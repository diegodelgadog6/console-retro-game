
import './App.css'
import { useEffect, useState } from 'react'
import GameScreen from './components/GameScreen'
import Screen from './components/Screen'
import LeftControl from './components/LeftControl'
import RightControl from './components/RightControl'
import useFetch from './hooks/useFetch'

function App() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
  const { data } = useFetch(url)
  const [pokemones, setPokemones] = useState([])
  const [position, setPosition] = useState(0)
  const [myPokeSelection, setMyPokeSelection] = useState([])
  const [pcPokeSelection, setPcPokeSelection] = useState([])

  const handleDirection = (direction) => {
    const maxPosition = Math.max(0, pokemones.length - 1)
    console.log({ direction })

    if (direction === 'right') {
      setPosition((prev) => Math.min(prev + 1, maxPosition))
    } else if (direction === 'left') {
      setPosition((prev) => Math.max(prev - 1, 0))
    } else if (direction === 'up') {
      setPosition((prev) => Math.max(prev - 3, 0))
    } else if (direction === 'down') {
      setPosition((prev) => Math.min(prev + 3, maxPosition))
    }
  }

  function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min)
    const maxFloored = Math.floor(max)
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
  }

  const getListPokemones = () => {
    const list = data?.results?.slice(0, 60).filter((p) => p.url)
    const plist = list?.map((l) => fetch(l.url).then((res) => res.json()))

    Promise.all(plist).then((values) => {
      const saniData = values.map((e) => {
        return {
          id: e.id,
          name: e.name,
          moves: e.moves.map((move) => {
            return {
              ...move,
              attack: getRandomInt(1, 400),
            }
          }),
          sprites: e.sprites,
        }
      })

      setPokemones(saniData)
    })
  }

  const computerSelection = () => {
    if (!pokemones.length) return

    const rnd = getRandomInt(0, pokemones.length)
    const pc = pokemones[rnd]

    if (!pc) return

    setPcPokeSelection([pc])
  }

  const handleSelection = () => {
    const currentPokemon = pokemones[position]

    if (!currentPokemon) return

    if (!myPokeSelection.length) {
      console.log({ firstSelection: currentPokemon })
      setMyPokeSelection([currentPokemon])
      return
    }

    if (!pcPokeSelection.length) {
      if (myPokeSelection[0]?.id === currentPokemon.id) return
      console.log({ secondSelection: currentPokemon })
      setPcPokeSelection([currentPokemon])
    }
  }

  const handleBackSelection = () => {
    console.log('Back selection')
    if (pcPokeSelection.length) {
      console.log({ removed: pcPokeSelection[0] })
      setPcPokeSelection([])
      return
    }

    if (myPokeSelection.length) {
      console.log({ removed: myPokeSelection[0] })
      setMyPokeSelection([])
    }
  }

  useEffect(() => {
    if (!data?.results) return

    getListPokemones()
  }, [data])

  return (
    <div className='min-h-screen bg-white flex items-center justify-center gap-0 p-6'>
      <LeftControl handleDirection={handleDirection} />
      {myPokeSelection.length && pcPokeSelection.length ? (
        <GameScreen selectedPokemons={[myPokeSelection[0], pcPokeSelection[0]]} />
      ) : (
        <Screen pokemones={pokemones} position={position} />
      )}
      <RightControl handleSelection={handleSelection} handleBackSelection={handleBackSelection} />
    </div>
  )
}

export default App
