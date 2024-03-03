function PokemonCard() {

    const pokemonList = [
        {
          name: "bulbasaur",
          imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        },
        {
          name: "mew",
        },
      ];

      const pokemon = pokemonList[0];

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