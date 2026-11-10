import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu.jsx";
import Inicio from "./pages/Inicio.jsx";
import DetalhesCurso from "./pages/DetalhesCurso.jsx";

function App() {
  const cursos = [
    {
      id: 1,
      nome: "React Básico",
      cargaHoraria: "20 horas",
      descricao: "Curso introdutório de React.",
    },
    {
      id: 2,
      nome: "JavaScript",
      cargaHoraria: "30 horas",
      descricao: "Curso de fundamentos de JavaScript.",
    },
    {
      id: 3,
      nome: "Banco de Dados",
      cargaHoraria: "24 horas",
      descricao: "Curso introdutório de banco de dados.",
    },
  ];

  return (
    <>
      <Menu />

      <Routes>
        <Route
          path="/"
          element={<Inicio cursos={cursos} />}
        />

        <Route
          path="/curso/:id"
          element={<DetalhesCurso cursos={cursos} />}
        />
      </Routes>
    </>
  );
}

export default App;
