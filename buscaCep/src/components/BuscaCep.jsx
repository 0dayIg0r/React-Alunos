function BuscaCep({ cep, setCep, buscarCep }) {
  return (
    <div>
      <input
        id="cep"
        type="text"
        placeholder="ex: 01001000"
        value={cep}
        onChange={(event) => {
            // Hooks
          setCep(event.target.value);
        }}
      />

      <button onClick={buscarCep}>
        procurar
      </button>
    </div>
  );
}

export default BuscaCep;
