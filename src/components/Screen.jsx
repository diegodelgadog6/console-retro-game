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
    <div ref={containerRef} className="w-[450px] h-[280px] overflow-y-auto border-4 border-solid p-3">
      <div className="mb-2 text-sm">Selecciona 2 Pokémon</div>
      <div className="grid grid-cols-3 gap-2">
        {pokemones?.map((pokemon, index) => (
          <div
            key={pokemon.id ?? index}
            data-index={index}
            className="flex flex-col items-center border-2 p-2"
            style={{ backgroundColor: position === index ? '#fde68a' : 'white' }}
          >
            <img
              src={pokemon?.sprites?.front_default}
              alt={pokemon.name}
              className="h-16 w-16"
            />
            <p className="capitalize">{pokemon.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Screen;