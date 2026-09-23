                                                                                                                                                import "./App.css";

import Header from "./components/Header";
import Resumo from "./components/Resumo";
import Atendimento from "./components/Atendimento";
import Servicos from "./components/Servicos";
import Profissional from "./components/Profissional";
import Footer from "./components/Footer";

function App() {
  const atendimentoBase = {
    cliente: "João Silva",
    servico: "Consulta inicial",
    data: "25/09/2026",
    horario: "14:30",
    modalidade: "Online",
    valor: 120,
    pago: true
  };

  // é um objeto com spread operator que pega tudo do objeto atendimentoBase 
  // e coloca dentro da variável atendimentoCompleto, 
  // e essa variável adiciona o atributo observação
  const atendimentoCompleto = {
    ...atendimentoBase,
    observacao: "O link será enviado alguns minutos antes do horário."
  };

  const resumo = {
    nome: "Marina",
    atendimentosHoje: 4,
    valorRecebido: 480,
    horariosDisponiveis: 3
  };

  const servicosBase = [
    {
      nome: "Consulta inicial",
      descricao: "Primeiro atendimento para conhecer suas necessidades.",
      valor: 120
    },
    {
      nome: "Retorno",
      descricao: "Acompanhamento do seu processo.",
      valor: 80
    },
    {
      nome: "Avaliação",
      descricao: "Avaliação completa e personalizada.",
      valor: 150
    }
  ];

  const servicos = [
    ...servicosBase,
    {
      nome: "Orientação",
      descricao: "Orientação e suporte para suas dúvidas.",
      valor: 100
    }
  ];

  const profissionalBase = {
    nome: "Marina Santos",
    profissao: "Psicóloga",
    cidade: "Brasília - DF"
  };

  const profissionalCompleto = {
    ...profissionalBase,
    atendeOnline: true,
    atendePresencial: true
  };

  return (
    <>
      <Header titulo="AgendaPro" />

      <main>
        <Resumo resumo={resumo} />

        <div className="painel-principal">
          {/* aqui está passando o objeto como props */}
          <Atendimento atendimento={atendimentoCompleto} />

          <Profissional
            profissional={profissionalCompleto}
          />
        </div>

        <Servicos servicos={servicos} />
      </main>

      <Footer texto="AgendaPro © 2026" />
    </>
  );
}

export default App;
