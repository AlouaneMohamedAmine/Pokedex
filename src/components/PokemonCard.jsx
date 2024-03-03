function PokemonCard({pokemon}) {

  console.log(pokemon)
    

  const displayImage = pokemon.imgSrc ? (
    <img src={pokemon.imgSrc} alt={pokemon.name} />
  ) : (
    <p>???</p>
  );


    return  (

          <div className="pokemon-card">
            {displayImage}
         <h2>{pokemon.name}</h2>
      
    </div>

    )
  }
  
  export default PokemonCard;