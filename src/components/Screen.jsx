import { useEffect, useRef } from 'react'

const Screen = ({ pokemones, position }) => {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const selectedItem = container.querySelector(`[data-index="${position}"]`)
    if (!selectedItem) return

    selectedItem.scrollIntoView({ block: 'nearest', inline: 'nearest' })
  }, [position, pokemones])

  return (
    <div ref={containerRef} className="w-[450px] h-[320px] overflow-y-auto border-[12px] border-zinc-700 rounded-md p-6 bg-[linear-gradient(180deg,_#1f2c24,_#162018)] shadow-[inset_0_0_20px_rgba(0,0,0,0.45)]">
      <div className="mb-3 text-xs tracking-widest uppercase text-emerald-300">Pokedex</div>
      <div className="grid grid-cols-3 gap-2">
        {pokemones?.map((pokemon, index) => (
          <div
            key={pokemon.id ?? index}
            data-index={index}
            className="flex flex-col items-center border p-2 rounded-sm"
            style={{
              backgroundColor: position === index ? '#86efac' : '#dcfce7',
              borderColor: position === index ? '#14532d' : '#4ade80',
            }}
          >
            <img
              src={pokemon?.sprites?.front_default}
              alt={pokemon.name}
              className="h-16 w-16"
            />
            <p className="capitalize text-xs text-emerald-950 font-semibold">{pokemon.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Screen;