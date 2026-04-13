import React, { useState } from 'react'

function GameScreen({ selectedPokemons = [], onRestart }) {
  const [playerPokemon, rivalPokemon] = selectedPokemons
  const [myHP, setMyHP] = useState(100)
  const [pcHP, setPcHP] = useState(100)
  const [winner, setWinner] = useState(null)
  const playerMoves = playerPokemon?.moves?.slice(0, 4) ?? []
  const rivalMoves = rivalPokemon?.moves?.slice(0, 4) ?? []

  const handleAttack = (damage) => {
    if (winner) return

    const safeDamage = Number(damage) || 0

    setPcHP((prevPcHP) => {
      const nextPcHP = Math.max(0, prevPcHP - safeDamage)

      if (nextPcHP <= 0) {
        setWinner('player')
        return nextPcHP
      }

      const rivalMove = rivalMoves[Math.floor(Math.random() * rivalMoves.length)]
      const rivalDamage = Number(rivalMove?.attack) || 0

      setMyHP((prevMyHP) => {
        const nextMyHP = Math.max(0, prevMyHP - rivalDamage)
        if (nextMyHP <= 0) {
          setWinner('pc')
        }
        return nextMyHP
      })

      return nextPcHP
    })
  }

  const winnerPokemon = winner === 'player' ? playerPokemon : rivalPokemon
  const winnerLabel = winner === 'player' ? 'Jugador' : 'PC'

  return (
    <div className="relative w-[450px] h-[320px] overflow-hidden border-[12px] border-zinc-700 rounded-md bg-[linear-gradient(180deg,_#1f2c24,_#162018)] p-3 shadow-[inset_0_0_20px_rgba(0,0,0,0.45)]">
      <h2 className="mb-2 text-center text-lg font-bold tracking-wider text-emerald-300">VS</h2>

      <div className="grid grid-cols-2 gap-2">
        {[
          { pokemon: playerPokemon, hp: Math.max(0, myHP), role: 'Jugador' },
          { pokemon: rivalPokemon, hp: Math.max(0, pcHP), role: 'PC' },
        ].map(({ pokemon, hp, role }, index) => (
          <div
            key={pokemon?.id ?? index}
            className="flex h-[165px] flex-col items-center justify-center border p-2 text-center rounded-sm bg-emerald-100 border-emerald-500"
          >
            <>
              <p className="text-xs font-bold text-emerald-900">{role}</p>
              <p className="text-xs font-bold text-emerald-900">HP: {hp}/100</p>
              <img
                src={pokemon?.sprites?.front_default}
                alt={pokemon.name}
                className="h-12 w-12"
              />
              <p className="mt-1 capitalize font-semibold text-emerald-950">{pokemon.name}</p>
              <p className="text-emerald-900">#{pokemon.id}</p>
            </>
          </div>
        ))}
      </div>

      <div className="mt-2">
        <p className="mb-1 text-xs font-bold uppercase tracking-widest text-emerald-300">Ataques</p>
        <div className="grid grid-cols-2 gap-2">
          {playerMoves.map((move, index) => (
            <button
              key={`${move.move.name}-${index}`}
              onClick={() => handleAttack(move.attack)}
              disabled={pcHP <= 0 || myHP <= 0 || Boolean(winner)}
              className="rounded bg-emerald-200 px-2 py-1 text-left text-xs font-bold text-emerald-950 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:bg-zinc-400"
            >
              {move.move.name} ({move.attack})
            </button>
          ))}
        </div>
      </div>

      {winner ? (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-[260px] rounded-md border-2 border-emerald-700 bg-emerald-100 p-4 text-center shadow-lg">
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-900">Ganador</p>
            <img
              src={winnerPokemon?.sprites?.front_default}
              alt={winnerPokemon?.name}
              className="mx-auto mt-2 h-14 w-14"
            />
            <p className="mt-2 text-sm font-black uppercase text-emerald-950">{winnerPokemon?.name}</p>
            <p className="text-xs font-bold text-emerald-900">{winnerLabel}</p>
            <button
              onClick={onRestart}
              className="mt-3 rounded bg-emerald-700 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-emerald-800"
            >
              Cerrar
            </button>
          </div>
        </div>
      ) : null}

    </div>
  )
}

export default GameScreen
