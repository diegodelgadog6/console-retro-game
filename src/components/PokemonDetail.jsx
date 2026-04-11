import React from 'react'

function PokemonDetail({ actual = [] }) {
  if (!actual?.length) {
    return (
      <section className='w-[450px] rounded-2xl bg-white/90 p-5 shadow-[0_10px_25px_rgba(0,0,0,0.18)]'>
        <p className='text-sm font-semibold text-slate-600'>Selecciona un pokemon con la cruceta.</p>
      </section>
    )
  }

  const pokemon = actual[0]
  const moves = pokemon?.moves?.slice(0, 10) ?? []

  return (
    <section className='w-[450px] rounded-2xl bg-[linear-gradient(180deg,_#f8fbff,_#eef5ff)] p-5 shadow-[0_10px_25px_rgba(0,0,0,0.2)]'>
      <div className='mb-4 rounded-xl bg-white/80 p-4 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.2)]'>
        <p className='text-xs font-bold tracking-[0.2em] text-slate-500'>#{pokemon?.id}</p>
        <h2 className='text-3xl font-black uppercase text-slate-800'>{pokemon?.name}</h2>
      </div>

      <div className='mb-4 grid grid-cols-2 gap-3'>
        <img
          src={pokemon?.sprites?.front_default}
          alt={`${pokemon?.name ?? 'pokemon'} front`}
          className='h-24 w-full rounded-lg bg-white/70 object-contain p-2'
        />
        <img
          src={pokemon?.sprites?.back_default}
          alt={`${pokemon?.name ?? 'pokemon'} back`}
          className='h-24 w-full rounded-lg bg-white/70 object-contain p-2'
        />
      </div>

      <h3 className='mb-2 text-2xl font-black text-slate-800'>Moves</h3>
      <div className='space-y-2'>
        {moves.map((move, index) => (
          <div
            key={`${move?.move?.name ?? 'move'}-${index}`}
            className='flex items-center justify-between rounded-lg bg-white/70 px-3 py-2 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.2)]'
          >
            <span className='text-base font-semibold capitalize text-slate-800'>
              {move?.move?.name?.replace(/-/g, ' ')}
            </span>
            <span className='rounded-md bg-red-500 px-2 py-1 text-sm font-bold text-white'>
              {move?.attack ?? '-'}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PokemonDetail
