import Beneficios from "./components/Beneficios"
import Footer from "./components/Footer"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import Hero from "./components/Hero"
import './App.css'
import Card from "./components/Card"

function App() {


  return (
    <>
      <Header />

      <Hero
        titulo='Aprenda programação do zero'
        descricao='Um curso para quem quercomeçar na tecnologia.'
        botao='Quero começar'
      />
      <Beneficios/>

      <Formulario />

      <Footer />
    </>
  )
}

export default App
