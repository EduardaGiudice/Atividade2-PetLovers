import { Component } from "react";
import M from "materialize-css";


class MaisConsumidos extends Component {

  componentDidMount() {
    M.AutoInit();
  }
  
 render() {
  return (
    <div style={{ margin: "3em" }}>
      <form className="col s12">
        <div className="center-align">
          <h2>Serviços/Produtos mais consumidos</h2>
        </div>
        <div className="row">
          <div className="col s6 offset-s3">
            <div
              className="input-field"
              style={{
                width: "40%",
                display: "inline-block",
                marginRight: "1rem",
              }}
            >
              <label htmlFor="tipoPet">Tipo:</label>
              <br />
              <select id="tipoPet" placeholder="Selecione um tipo">
                <option value="1">Nenhum</option>
                <option value="2">Cachorro</option>
                <option value="3">Gato</option>
              </select>
            </div>
            <div className="input-field"style={{width: "40%",display: "inline-block",marginLeft: "1rem",}}>
              <label htmlFor="racaPet">Raça:</label>
              <br />
              <select id="ordenarTabela" placeholder="Selecione como deseja ordenar a Tabela">
                <option value="1">Nenhum</option>
                <option value="2">Chow Chow</option>
                <option value="3">Spitz Alemão</option>
                <option value="3">GoldenRetriever</option>
                <option value="3">Dalmata</option>
                <option value="3">Pinsher</option>
              </select>
            </div>
            <button
              className="btn"
              type="button"
              style={{ marginLeft: "1rem" }}
            >
              Pesquisar
            </button>
          </div>
        </div>
      </form>

      {/* Tabela */}
      <div className="row">
        <div className="col s6 offset-s3 ">
          <table className="striped responsive-table custom-width blue lighten-4">
            <thead>
              <tr>
                <th>Ranking</th>
                <th>Nome Item</th>
                <th>Categoria</th>
                <th>Quantidade</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td>1</td>
                  <td>Banho</td>
                  <td>Serviço</td>
                  <td>72</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Shampoo Anti-pulgas</td>
                  <td>Produto</td>
                  <td>57</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Cortar unhas</td>
                  <td>Serviço</td>
                  <td>55</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Remédio para Carrapato</td>
                  <td>Produto</td>
                  <td>52</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Coleira</td>
                  <td>Produto</td>
                  <td>43</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Guia de passeio</td>
                  <td>Produto</td>
                  <td>41</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Vacinação tipo A</td>
                  <td>Serviço</td>
                  <td>32</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Roupinha para Gatos</td>
                  <td>Produto</td>
                  <td>27</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Vermifugação tipo C</td>
                  <td>Serviço</td>
                  <td>24</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Shampoo Anti-pulgas</td>
                  <td>Produto</td>
                  <td>16</td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
}

export default MaisConsumidos;
