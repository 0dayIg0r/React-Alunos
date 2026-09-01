function Produto({ nome, preco, descricao }) {
    return (
        <div className="produto">
            <h3>{nome}</h3>
            <p>{descricao}</p>
            <strong>{preco}</strong>
        </div>
    );
}
export default Produto

