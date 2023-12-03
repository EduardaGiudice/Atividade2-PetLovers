import { Component } from "react";
import M from 'materialize-css';


class ListaProdServ extends Component {

  componentDidMount() {
    M.AutoInit();
  }

  render() {
  return (
    <>
      <div className="row" style={{ margin: "3em" }}>
      <div className="center">
        <br/>
      <h2>Produtos e Serviços</h2>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
        <div className="input-field col s3">
          <label htmlFor="categoriaItem">Categoria:</label>
          <br />
          <select id="categoriaItem" placeholder="Selecione uma categoria">
                <option value="1">Serviço</option>
                <option value="2">Produto</option>
              </select>
        </div>
        <div className="input-field col s3">
          <label htmlFor="nomeItem" className="label">
            Nome:
          </label>
          <br />
          <input
            id="nomeItem"
            type="text"
            className="validate"
          />
        </div>
        <div className="input-field col s1">
          <label htmlFor="valorItem" className="label">
            Valor:
          </label>
          <br />
          <input
            id="valorItem"
            type="text"
            className="validate"
          />
        </div>
        <div className="col s1">
          <br />
          <br/>
          <button className="btn" type="button">
            Salvar
          </button>
        </div>
      </div>
      <div className="collection">
      <div style={{ margin: "1em", borderBottom: "1px solid #ddd" }}>
        <a className="collection-item" style={{ position: "relative" }}>
          <div className="row">
            <div className="col s5">
              <h5>Nome: Anti-Pulgas</h5>
            </div>
            <div className="col s3">
              <h5>Categoria: Produto</h5>
            </div>
            <div className="col s3">
              <h5>Valor: R$70</h5>
            </div>
          </div>
          <button
            className="btn pl-2"
            style={{ position: "absolute", top: "10px", right: "60px" }}
          >
            Editar
          </button>
          <button
            className="btn-floating btn waves red pl-2"
            style={{ position: "absolute", top: "10px", right: "10px" }}
          >
            X
          </button>
        </a>
        <a className="collection-item" style={{ position: "relative" }}>
          <div className="row">
            <div className="col s5">
              <h5>Nome: Cortar Unhas</h5>
            </div>
            <div className="col s3">
              <h5>Categoria: Serviço</h5>
            </div>
            <div className="col s3">
              <h5>Valor: R$20</h5>
            </div>
          </div>
          <button
            className="btn pl-2"
            style={{ position: "absolute", top: "10px", right: "60px" }}
          >
            Editar
          </button>
          <button
            className="btn-floating btn waves red pl-2"
            style={{ position: "absolute", top: "10px", right: "10px" }}
          >
            X
          </button>
        </a>
        <a className="collection-item" style={{ position: "relative" }}>
          <div className="row">
            <div className="col s5">
              <h5>Nome: Coleira</h5>
            </div>
            <div className="col s3">
              <h5>Categoria: Produto</h5>
            </div>
            <div className="col s3">
              <h5>Valor: R$30</h5>
            </div>
          </div>
          <button
            className="btn pl-2"
            style={{ position: "absolute", top: "10px", right: "60px" }}
          >
            Editar
          </button>
          <button
            className="btn-floating btn waves red pl-2"
            style={{ position: "absolute", top: "10px", right: "10px" }}
          >
            X
          </button>
        </a>
        <a className="collection-item" style={{ position: "relative" }}>
          <div className="row">
            <div className="col s5">
              <h5>Nome: Tosa</h5>
            </div>
            <div className="col s3">
              <h5>Categoria: Serviço</h5>
            </div>
            <div className="col s3">
              <h5>Valor: R$60</h5>
            </div>
          </div>
          <button
            className="btn pl-2"
            style={{ position: "absolute", top: "10px", right: "60px" }}
          >
            Editar
          </button>
          <button
            className="btn-floating btn waves red pl-2"
            style={{ position: "absolute", top: "10px", right: "10px" }}
          >
            X
          </button>
        </a>
        <a className="collection-item" style={{ position: "relative" }}>
          <div className="row">
            <div className="col s5">
              <h5>Nome: Banho</h5>
            </div>
            <div className="col s3">
              <h5>Categoria: Serviço</h5>
            </div>
            <div className="col s3">
              <h5>Valor: R$50</h5>
            </div>
          </div>
          <button
            className="btn pl-2"
            style={{ position: "absolute", top: "10px", right: "60px" }}
          >
            Editar
          </button>
          <button
            className="btn-floating btn waves red pl-2"
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
export default ListaProdServ;
