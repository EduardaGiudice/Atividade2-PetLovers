import{ Component } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';


class FormularioCadastroPet extends Component {

  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <div style={{ margin: '3em' }}>
        <form className="col s12">
          <div className="center-align">
            <h2>Cadastro de Pets</h2>
          </div>
          <div className="row">
            <div className="input-field col s3 offset-s4">
              <label htmlFor="donoPet">Dono:</label>
              <br />
              <select id="donoPet" placeholder="Selecione um dono">
                <option value="1">Francisca de Moraes</option>
                <option value="2">Carlos de Almeida</option>
                <option value="3">Eduardo Carvalho</option>
              </select>
            </div>
          </div>
          <h4>Dados do Pet</h4>
          <div className="row">
            <div className="input-field col s3">
              <label htmlFor="nomePet" className="label">
                Nome:
              </label>
              <br />
              <input id="nomePet" type="text" className="validate" />
            </div>
            <div className="input-field col s3">
              <label htmlFor="tipoPet">Tipo:</label>
              <br />
              <select id="tipoPet" placeholder="Selecione um tipo">
                <option value="1">Cachorro</option>
                <option value="2">Gato</option>
              </select>
            </div>
            <div className="input-field col s3">
              <label htmlFor="racaPet" className="label">
                Raça:
              </label>
              <br />
              <input id="racaPet" type="text" className="validate" />
            </div>
            <div className="input-field col s3">
              <label htmlFor="generoPet">Gênero:</label>
              <br />
              <select id="generoPet" placeholder="Selecione um gênero">
                <option value="1">Macho</option>
                <option value="2">Fêmea</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <Link
                to="/ListaPets"
                className="btn"
                style={{ position: 'absolute', bottom: 50, left: 50 }}
              >
                Cadastrar
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default FormularioCadastroPet;