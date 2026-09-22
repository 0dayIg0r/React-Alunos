function Header({ titulo }) {
  return (
    <header className="header">
      <div className="marca">
        <div className="marca-icone">AP</div>

        <div>
          <h1>{titulo}</h1>
          <p>Organize seu tempo, foque no que importa.</p>
        </div>
      </div>

      <nav>
        <a href="#inicio">Início</a>
        <a href="#atendimento">Atendimento</a>
        <a href="#servicos">Serviços</a>
        <a href="#profissional">Profissional</a>
      </nav>
    </header>
  );
}

export default Header;
