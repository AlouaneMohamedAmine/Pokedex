import PropTypes from "prop-types";

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

  PokemonCard.propType={
    pokemon: PropTypes.shape({
      
        name: "...",
        imgSrc: "...",
      
    })
   
}
  
  export default PokemonCard;