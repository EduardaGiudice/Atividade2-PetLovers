import { Component } from "react";
import M from "materialize-css";


class ClientesConsumidores extends Component {

  componentDidMount() {
    M.AutoInit();
  }
  
 render() {
  return (
    <div style={{ margin: "3em" }}>
      <form className="col s12">
        <div className="center-align">
          <h2>Top 10 Clientes Consumidores</h2>
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
              <label htmlFor="categoria">Categoria:</label>
              <br />
              <select id="categoria" placeholder="Selecione uma categoria">
                <option value="1">Nenhum</option>
                <option value="2">Serviço</option>
                <option value="3">Produto</option>
              </select>
            </div>
            <div className="input-field"style={{width: "40%",display: "inline-block",marginLeft: "1rem",}}>
              <label htmlFor="ordenarTabela">Ordenar por:</label>
              <br />
              <select id="ordenarTabela" placeholder="Selecione como deseja ordenar a Tabela">
                <option value="1">Nenhum</option>
                <option value="2">Valor R$</option>
                <option value="3">Quantidade</option>
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
                <th>Nome</th>
                <th>Quantidade de Itens</th>
                <th>Valor Total</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td>1</td>
                  <td>Maria Aparecida de Jesus</td>
                  <td>17</td>
                  <td>R$ 2500,00</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Claudio Pereira da Silva</td>
                  <td>15</td>
                  <td>R$ 2400,00</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Maria Antonieta Alves</td>
                  <td>14</td>
                  <td>R$ 1750,00</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Vitor Tadeu de Lima</td>
                  <td>12</td>
                  <td>R$ 1250,00</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Ágatha Oliveira Goncalves</td>
                  <td>11</td>
                  <td>R$ 1250,00</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Erick Barros Oliveira</td>
                  <td>9</td>
                  <td>R$ 1150,00</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>João Goncalves Lima</td>
                  <td>9</td>
                  <td>R$ 1000,00</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Giovana Ribeiro Araujo</td>
                  <td>7</td>
                  <td>R$ 650,00</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Laura Santos Martins</td>
                  <td>7</td>
                  <td>R$ 500,00</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Julieta Barbosa Azevedo</td>
                  <td>4</td>
                  <td>R$ 320,00</td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
}

export default ClientesConsumidores;
