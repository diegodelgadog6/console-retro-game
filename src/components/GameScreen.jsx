import React from 'react'

function GameScreen({ selectedPokemons = [] }) {
  const [playerPokemon, rivalPokemon] = selectedPokemons

  return (
    <div className="w-[450px] h-[280px] border-4 border-solid bg-white p-3">
      <h2 className="mb-3 text-center text-lg font-bold">VS</h2>

      <div className="grid grid-cols-2 gap-3">
        {[playerPokemon, rivalPokemon].map((pokemon, index) => (
          <div
            key={pokemon?.id ?? index}
            className="flex min-h-[180px] flex-col items-center justify-center border-2 p-2 text-center"
          >
            {pokemon ? (
              <>
                <img
                  src={pokemon?.sprites?.front_default}
                  alt={pokemon.name}
                  className="h-20 w-20"
                />
                <p className="mt-2 capitalize">{pokemon.name}</p>
                <p>#{pokemon.id}</p>
              </>
            ) : (
              <p>Sin selección</p>
            )}
          </div>
        ))}
      </div>

    </div>
  )
}

export default GameScreen
