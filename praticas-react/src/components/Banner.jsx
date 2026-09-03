import Caixa from "./Caixa";

function Banner() {
    return (
        <section className="banner">
            <p>CAFÉ ESPECIAL</p>
            <h2>Café para todos os momentos</h2>
            <span>
                Escolha seu favorito e aproveite.
            </span>

            <Caixa>
                Caixa dentrto do banner
            </Caixa>
        </section>
    );
}

export default Banner;