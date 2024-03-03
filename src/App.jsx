import PokemonCard from './components/PokemonCard'
import NavBar from './components/NavBar'
import './App.css'
import { useState } from 'react';


function App() {

  const [pokemonIndex, setPokemonIndex] = useState(0);
 
   

  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];

    const pokemon = pokemonList[pokemonIndex]

    const handlePrev = () => {
      if (pokemonIndex > 0) {
        setPokemonIndex(pokemonIndex - 1);
      }
    };

    const handleNext = () => {
      if (pokemonIndex < pokemonList.length - 1) {
        setPokemonIndex(pokemonIndex + 1);
      }
    };

  return (
    <div>
       <PokemonCard pokemon={pokemon}/>
       <NavBar onPrev={handlePrev} onNext={handleNext} />
    </div>
  )

}

export default App
