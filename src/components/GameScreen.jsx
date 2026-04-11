import React, { useState } from 'react'

function GameScreen({ selectedPokemons = [] }) {
  const [playerPokemon, rivalPokemon] = selectedPokemons
  const [myHP] = useState(100)
  const [pcHP, setPcHP] = useState(100)
  const playerMoves = playerPokemon?.moves?.slice(0, 4) ?? []

  const handleAttack = (damage) => {
    setPcHP((prev) => Math.max(0, prev - damage))
  }

  return (
    <div className="w-[450px] min-h-[320px] border-[12px] border-zinc-700 rounded-md bg-[linear-gradient(180deg,_#1f2c24,_#162018)] p-4 shadow-[inset_0_0_20px_rgba(0,0,0,0.45)]">
      <h2 className="mb-3 text-center text-lg font-bold tracking-wider text-emerald-300">VS</h2>

      <div className="grid grid-cols-2 gap-3">
        {[
          { pokemon: playerPokemon, hp: Math.max(0, myHP), role: 'Jugador' },
          { pokemon: rivalPokemon, hp: Math.max(0, pcHP), role: 'PC' },
        ].map(({ pokemon, hp, role }, index) => (
          <div
            key={pokemon?.id ?? index}
            className="flex min-h-[220px] flex-col items-center justify-center border p-2 text-center rounded-sm bg-emerald-100 border-emerald-500"
          >
            <>
              <p className="text-xs font-bold text-emerald-900">{role}</p>
              <p className="text-xs font-bold text-emerald-900">HP: {hp}/100</p>
              <img
                src={pokemon?.sprites?.front_default}
                alt={pokemon.name}
                className="h-24 w-24"
              />
              <p className="mt-2 capitalize font-semibold text-emerald-950">{pokemon.name}</p>
              <p className="text-emerald-900">#{pokemon.id}</p>
            </>
          </div>
        ))}
      </div>

      <div className="mt-3">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-emerald-300">Ataques</p>
        <div className="grid grid-cols-2 gap-2">
          {playerMoves.map((move, index) => (
            <button
              key={`${move.move.name}-${index}`}
              onClick={() => handleAttack(move.attack)}
              disabled={pcHP <= 0}
              className="rounded bg-emerald-200 px-2 py-2 text-left text-xs font-bold text-emerald-950 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:bg-zinc-400"
            >
              {move.move.name.replace(/-/g, ' ')} ({move.attack})
            </button>
          ))}
        </div>
      </div>

    </div>
  )
}

export default GameScreen
