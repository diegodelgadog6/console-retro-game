
import './App.css'
import Screen from './components/Screen'
import LeftControl from './components/LeftControl'
import RightControl from './components/RightControl'
import useFetch from './hooks/useFetch'

function App() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
  const { data, loading, error } = useFetch(url)

  console.log(data)



  return (
    <div className='min-h-screen bg-white flex items-center justify-center gap-0 p-6'>
      <LeftControl />
      <Screen pokemones={data?.results} />
      <RightControl />
    </div>
  )
}

export default App
