
const Screen = ({pokemones}) => {
  return (
    <div className="w-[480px] h-[280px] border-4 border-solid">
      {pokemones?.map((pokemon) => (
        <p key={pokemon.name}>{pokemon.name}</p>
      ))}
    </div>
  )
}

export default Screen