import { Routes, Route } from "react-router-dom";
import Pokemons from "./pages/Pokemons.jsx";
import DetalhesPokemon from "./pages/DetalhesPokemon.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Pokemons />} />

      <Route path="/pokemon/:nome" element={<DetalhesPokemon />} />
    </Routes>
  );
}

export default App;
