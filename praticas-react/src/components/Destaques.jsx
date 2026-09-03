import Caixa from "./Caixa";
import Card from "./Card";

function Destaques() {
    return (
        <section className="destaques">
            <h2>Destaques</h2>

            <Card titulo='Ofertinha'>
                <p>Cappuccino com 20% de desconto.</p>
            </Card>

            <Card titulo='Novidadezinha'>
                <p>Conheça nosso novo Mocha.</p>
            </Card>

            <Caixa>
                <h2>Olá 1</h2>
                <p>Esse conteúdo está dentro da caixa 1.</p>
            </Caixa>
            
            <Caixa>
                <h2>Olá 2</h2>
                <p>Esse conteúdo está dentro da caixa 2.</p>
            </Caixa>

        </section>
    );
}
export default Destaques;