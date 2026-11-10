import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Pokemons() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=15")
      .then((resposta) => resposta.json())
      .then((dados) => {
        setPokemons(dados.results);
      });
  }, []);

  return (
    <main className="app">
      <header className="topo">
        <span className="tag">PokéAPI + React Router</span>

        <h1>Mini Pokédex</h1>

        <p>Clique em um Pokémon para ver os detalhes.</p>
      </header>

      <section className="lista-pokemons">
        {pokemons.map((pokemon, index) => (
          <article className="pokemon-card" key={pokemon.name}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${index + 1}.png`}
              alt={pokemon.name}
            />

            <h2>{pokemon.name}</h2>

            <Link to={`/pokemon/${pokemon.name}`}>Ver detalhes</Link>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Pokemons;
