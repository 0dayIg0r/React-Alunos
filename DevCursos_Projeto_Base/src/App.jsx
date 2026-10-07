import "./App.css";

function App() {
  const cursos = [
    {
      id: 1,
      nome: "React para Iniciantes",
      categoria: "Front-end",
      cargaHoraria: 40,
      preco: 250,
      nivel: "Iniciante",
      modalidade: "Online",
      professor: "Marina Souza",
      vagas: 20,
      descricao:
        "Aprenda os fundamentos do React, componentes, props e estado."
    },
    {
      id: 2,
      nome: "JavaScript Moderno",
      categoria: "Front-end",
      cargaHoraria: 30,
      preco: 180,
      nivel: "Iniciante",
      modalidade: "Online",
      professor: "Carlos Lima",
      vagas: 25,
      descricao:
        "Revise JavaScript moderno com funções, arrays, objetos e métodos."
    },
    {
      id: 3,
      nome: "HTML e CSS Essencial",
      categoria: "Front-end",
      cargaHoraria: 24,
      preco: 150,
      nivel: "Iniciante",
      modalidade: "Presencial",
      professor: "Ana Martins",
      vagas: 18,
      descricao:
        "Crie páginas responsivas utilizando HTML semântico e CSS."
    },
    {
      id: 4,
      nome: "Node.js Essencial",
      categoria: "Back-end",
      cargaHoraria: 30,
      preco: 220,
      nivel: "Intermediário",
      modalidade: "Online",
      professor: "Rafael Costa",
      vagas: 20,
      descricao:
        "Aprenda os fundamentos do desenvolvimento back-end com Node.js."
    },
    {
      id: 5,
      nome: "APIs com Node.js",
      categoria: "Back-end",
      cargaHoraria: 36,
      preco: 290,
      nivel: "Intermediário",
      modalidade: "Online",
      professor: "Rafael Costa",
      vagas: 15,
      descricao:
        "Desenvolva APIs utilizando Node.js e organize rotas e dados."
    },
    {
      id: 6,
      nome: "Banco de Dados com MySQL",
      categoria: "Banco de Dados",
      cargaHoraria: 32,
      preco: 210,
      nivel: "Iniciante",
      modalidade: "Presencial",
      professor: "Juliana Alves",
      vagas: 22,
      descricao:
        "Aprenda modelagem, criação de tabelas e consultas SQL."
    },
    {
      id: 7,
      nome: "Git e GitHub",
      categoria: "Ferramentas",
      cargaHoraria: 16,
      preco: 120,
      nivel: "Iniciante",
      modalidade: "Online",
      professor: "Pedro Rocha",
      vagas: 30,
      descricao:
        "Aprenda versionamento de código com Git e colaboração pelo GitHub."
    },
    {
      id: 8,
      nome: "React: Projeto Prático",
      categoria: "Front-end",
      cargaHoraria: 48,
      preco: 320,
      nivel: "Intermediário",
      modalidade: "Presencial",
      professor: "Marina Souza",
      vagas: 12,
      descricao:
        "Construa uma aplicação React utilizando componentes, props e useState."
    }
  ];

  console.log(cursos);

  return (
    <main className="container">
      <h1>DevCursos</h1>

      <p className="subtitulo">
        Encontre seu próximo curso.
      </p>

      <section className="orientacoes">
        <h2>Projeto de consolidação</h2>

        <p>
          Desenvolva a aplicação utilizando apenas os conteúdos
          estudados até agora.
        </p>

        <ul>
          <li>Criar componentes.</li>
          <li>Usar props.</li>
          <li>Criar pelo menos um componente com children.</li>
          <li>Renderizar os cursos com map.</li>
          <li>Filtrar cursos com filter.</li>
          <li>Localizar um curso com find.</li>
          <li>Usar useState.</li>
          <li>Permitir selecionar um curso.</li>
          <li>Mostrar detalhes do curso selecionado.</li>
          <li>Criar um formulário de inscrição.</li>
          <li>Usar onSubmit e preventDefault().</li>
          <li>Usar renderização condicional.</li>
        </ul>
      </section>
    </main>
  );
}

export default App;
