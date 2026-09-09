import Beneficios from "./components/Beneficios"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import Hero from "./components/Hero"

function App() {


  return (
    <>
      <Header />

      <Hero
        titulo='Aprenda programação do zero'
        descricao='Um curso para quem quercomeçar na tecnologia.'
        botao='Quero começar'
      />
      <Beneficios />

      <Formulario />
    </>
  )
}

export default App
