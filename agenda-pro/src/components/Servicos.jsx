import Card from "./Card";

function Servicos({ servicos }) {
  const [
    servico1,
    servico2,
    servico3,
    servico4
  ] = servicos;

  return (
    <section
      className="servicos"
      id="servicos"
    >
      <div className="servicos-topo">
        <div>
          <p className="etiqueta">SERVIÇOS</p>
          <h2>Serviços oferecidos</h2>
        </div>

        <p>Conheça os serviços disponíveis</p>
      </div>

      <div className="cards">
        <Card
          titulo={servico1.nome}
          descricao={servico1.descricao}
          valor={servico1.valor}
        />

        <Card
          titulo={servico2.nome}
          descricao={servico2.descricao}
          valor={servico2.valor}
        />

        <Card
          titulo={servico3.nome}
          descricao={servico3.descricao}
          valor={servico3.valor}
        />

        <Card
          titulo={servico4.nome}
          descricao={servico4.descricao}
          valor={servico4.valor}
        />
      </div>
    </section>
  );
}

export default Servicos;
