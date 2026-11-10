import { Link } from "react-router-dom";

function Error() {
  return <div>
    <h1>Página não encontrada</h1>

    <Link to={'/'}>
    Voltar para o inicio
    </Link>
  </div>;
}

export default Error;
