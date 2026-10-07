import { useState } from "react";

function FormularioCadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [curso, setCurso] = useState("");
  const [mensagem, setMensagem] = useState("");

  function enviarFormulario(event) {
    event.preventDefault();

    console.log("Nome:", nome);
    console.log("E-mail:", email);
    console.log("Curso:", curso);
    console.log("Mensagem:", mensagem);
  }

  return (
    <form className="formulario" onSubmit={enviarFormulario}>
      <h2>Cadastro de Interesse</h2>

      <label htmlFor="nome">Nome</label>
      <input
        id="nome"
        name="nome"
        type="text"
        placeholder="Digite seu nome"
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        required
      />

      <label htmlFor="email">E-mail</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Digite seu e-mail"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        required
      />

      <label htmlFor="curso">Curso</label>
      <select
        id="curso"
        name="curso"
        value={curso}
        onChange={(event) => {
          setCurso(event.target.value);
        }}
        required
      >
        <option value="" disabled>Selecione um curso</option>
        <option value="react">React</option>
        <option value="javascript">JavaScript</option>
        <option value="node">Node.js</option>
      </select>

      <label htmlFor="mensagem">Mensagem</label>
      <textarea
        id="mensagem"
        name="mensagem"
        placeholder="Escreva uma mensagem"
        value={mensagem}
        onChange={(event) => {
          setMensagem(event.target.value);
        }}
      />

      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default FormularioCadastro;
