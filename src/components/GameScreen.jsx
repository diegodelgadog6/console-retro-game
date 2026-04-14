import React, { useEffect, useState } from 'react'

function GameScreen({ selectedPokemons = [] }) {
  const [playerPokemon, rivalPokemon] = selectedPokemons
  const [myHP, setMyHP] = useState(100)
  const [pcHP, setPcHP] = useState(100)
  const [winner, setWinner] = useState(null)
  const playerMoves = playerPokemon?.moves?.slice(0, 4) ?? []

  useEffect(() => {
    if (!playerPokemon || !rivalPokemon || winner) return

    const damageInterval = setInterval(() => {
      setMyHP((currentHP) => {
        if (currentHP <= 0) return currentHP

        const nextHP = Math.max(0, currentHP - 10)

        if (nextHP === 0) {
          setWinner(rivalPokemon)
        }

        return nextHP
      })
    }, 2000)

    return () => clearInterval(damageInterval)
  }, [playerPokemon, rivalPokemon, winner])

  const handleAttack = (damage) => {
    if (winner) return

    const safeDamage = Number(damage) || 0
    const nextPcHP = Math.max(0, pcHP - safeDamage)
    setPcHP(nextPcHP)

    if (nextPcHP === 0) {
      setWinner(playerPokemon)
    }
  }

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
        <div className="mb-1 flex items-center justify-between gap-2">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-300">Ataques</p>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-200/80">
            PC pega 10 cada 2s
          </p>
        </div>
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
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/65">
          <div className="w-[80%] rounded-xl border-2 border-emerald-300 bg-emerald-100 p-4 text-center shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">Ganador</p>
            <img
              src={winner?.sprites?.front_default}
              alt={winner?.name}
              className="mx-auto mt-2 h-16 w-16 rounded-md bg-emerald-50 p-1"
            />
            <h3 className="mt-1 text-2xl font-black capitalize text-emerald-950">{winner?.name}</h3>
            <p className="mt-1 text-xs font-semibold text-emerald-800">
              #{winner?.id} se lleva la batalla.
            </p>
          </div>
        </div>
      ) : null}

    </div>
  )
}

export default GameScreen
