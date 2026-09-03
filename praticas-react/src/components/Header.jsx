import Caixa from "./Caixa"

function Header() {
    return (
        <header>
            <h1>Essenza Café</h1>
            <nav>
                <a href="#Inicio">Inicio</a>
                <a href="#Produto">Produto</a>
                <a href="#Contato">Contato</a>
            </nav>
            <Caixa>
                <p>Olá teste</p>
            </Caixa>
        </header>
    )
}

export default Header


