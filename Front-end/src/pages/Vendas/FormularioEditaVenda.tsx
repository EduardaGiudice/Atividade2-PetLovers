import { Component} from "react";
import { Link } from "react-router-dom";
import M from 'materialize-css';

class FormularioEditaVenda extends Component {

  componentDidMount() {
    M.AutoInit();
  }

  render() {
  return (
    <div style={{ margin: "3em" }}>
      <form className="col s12">
        <div className="center-align">
          <h2>Dados da Venda</h2>
        </div>
        <div className="row">
          <div className="input-field col s3 offset-s4">
            <label htmlFor="nomeCliente">Cliente:</label>
            <br/>
            <select id="nomeCliente" placeholder="Selecione um Cliente">
                <option value="1">Francisca de Moraes</option>
                <option value="2">Carlos de Almeida</option>
                <option value="3">Eduardo Carvalho</option>
              </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s3 offset-s4">
            <label htmlFor="categoria">Categoria:</label>
            <br />
            <select id="categoria" placeholder="Selecione uma categoria">
                <option value="1">Serviço</option>
                <option value="2">Produto</option>
              </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6 offset-s3">
            <label htmlFor="itens">Item:</label>
            <br />
            <select id="itens" placeholder="Selecione um item">
                <option value="1">Banho</option>
                <option value="2">Tosa</option>
                <option value="3">Cortar Unhas</option>
                <option value="3">Vacinação tipo A</option>
                <option value="3">Vermifugação Tipo C</option>
                <option value="3">Banho Anti-pulgas</option>
              </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12 center">
            <h5>Valor: R$40</h5>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <Link to='/ListaVendas' className="btn" type="submit" style={{ position: "absolute", bottom: 50, left: 50 }}>
              Atualizar
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
}

export default FormularioEditaVenda;