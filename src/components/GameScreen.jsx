import React from 'react'

function GameScreen({ selectedPokemons = [] }) {
  const [playerPokemon, rivalPokemon] = selectedPokemons

  return (
    <div className="w-[450px] h-[320px] border-[12px] border-zinc-700 rounded-md bg-[linear-gradient(180deg,_#1f2c24,_#162018)] p-4 shadow-[inset_0_0_20px_rgba(0,0,0,0.45)]">
      <h2 className="mb-3 text-center text-lg font-bold tracking-wider text-emerald-300">VS</h2>

      <div className="grid grid-cols-2 gap-3">
        {[playerPokemon, rivalPokemon].map((pokemon, index) => (
          <div
            key={pokemon?.id ?? index}
            className="flex min-h-[220px] flex-col items-center justify-center border p-2 text-center rounded-sm bg-emerald-100 border-emerald-500"
          >
            {pokemon ? (
              <>
                <img
                  src={pokemon?.sprites?.front_default}
                  alt={pokemon.name}
                  className="h-24 w-24"
                />
                <p className="mt-2 capitalize font-semibold text-emerald-950">{pokemon.name}</p>
                <p className="text-emerald-900">#{pokemon.id}</p>
              </>
            ) : (
              <p className="text-emerald-950">Sin selección</p>
            )}
          </div>
        ))}
      </div>

    </div>
  )
}

export default GameScreen
