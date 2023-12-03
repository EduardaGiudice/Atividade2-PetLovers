import{ Component } from "react";
import { Link } from "react-router-dom";
import M from 'materialize-css';


class ListaVendas extends Component {

  componentDidMount() {
    M.AutoInit();
  }

  render() {
  return (
    <>
    <div style={{ margin: "1em" }}>
      <div className="center">
        <br/>
      <h2>Vendas</h2>
      </div>
      <Link to="/CadastrarVenda" className="btn waves-effect waves-light blue">
        Cadastrar Venda
      </Link>
      <br/>
      <br/>
      <br/>
    </div>
    <div className="collection">
    <div style={{ margin: "1em", borderBottom: "1px solid #ddd" }}>
        <a
          className="collection-item"
          style={{ position: "relative" }}
        >
          <div className="row">
            <div className="col s5">
              <h5>Cliente: Maria Aparecida de Moraes</h5>
              <h6>CPF: 48475647382</h6>
            </div>
            <div className="col s4">
              <h5>Item: Banho</h5>
              <h6>Categoria: Serviço</h6>
            </div>
            <div className="col s3">
              <br />
              <h5>Valor: R$50</h5>
            </div>
          </div>

          <Link
          to="/EditarVenda"
            className="btn waves"
            style={{ position: "absolute", bottom: "10px", right: "10px" }}
          >
            Visualizar
          </Link>
          <button
            className=" btn-floating btn waves red pl-2"
            style={{ position: "absolute", top: "10px", right: "10px" }}
          >
            X
          </button>
        </a>
        <a
          className="collection-item"
          style={{ position: "relative" }}
        >
          <div className="row">
            <div className="col s5">
              <h5>Cliente: Marcos Antonio Souza </h5>
              <h6>CPF: 584958485743</h6>
            </div>
            <div className="col s4">
              <h5>Item: Coleira</h5>
              <h6>Categoria: Produto</h6>
            </div>
            <div className="col s3">
              <br />
              <h5>Valor: R$30</h5>
            </div>
          </div>

          <Link
          to="/EditarVenda"
            className="btn waves"
            style={{ position: "absolute", bottom: "10px", right: "10px" }}
          >
            Visualizar
          </Link>
          <button
            className=" btn-floating btn waves red pl-2"
            style={{ position: "absolute", top: "10px", right: "10px" }}
          >
            X
          </button>
        </a>
        <a
          className="collection-item"
          style={{ position: "relative" }}
        >
          <div className="row">
            <div className="col s5">
              <h5>Cliente: Celso Tadeu</h5>
              <h6>CPF: 58494736473</h6>
            </div>
            <div className="col s4">
              <h5>Item: Cortar Unhas</h5>
              <h6>Categoria: Serviço</h6>
            </div>
            <div className="col s3">
              <br />
              <h5>Valor: R$20</h5>
            </div>
          </div>

          <Link
          to="/EditarVenda"
            className="btn waves"
            style={{ position: "absolute", bottom: "10px", right: "10px" }}
          >
            Visualizar
          </Link>
          <button
            className=" btn-floating btn waves red pl-2"
            style={{ position: "absolute", top: "10px", right: "10px" }}
          >
            X
          </button>
        </a>
        <a
          className="collection-item"
          style={{ position: "relative" }}
        >
          <div className="row">
            <div className="col s5">
              <h5>Cliente: Vitor Antônio</h5>
              <h6>CPF: 10394736234</h6>
            </div>
            <div className="col s4">
              <h5>Item: Tosa</h5>
              <h6>Categoria: Serviço</h6>
            </div>
            <div className="col s3">
              <br />
              <h5>Valor: R$60</h5>
            </div>
          </div>

          <Link
          to="/EditarVenda"
            className="btn waves"
            style={{ position: "absolute", bottom: "10px", right: "10px" }}
          >
            Visualizar
          </Link>
          <button
            className=" btn-floating btn waves red pl-2"
            style={{ position: "absolute", top: "10px", right: "10px" }}
          >
            X
          </button>
        </a>
      </div>
    </div>
    </>
  );
}
}

export default ListaVendas;