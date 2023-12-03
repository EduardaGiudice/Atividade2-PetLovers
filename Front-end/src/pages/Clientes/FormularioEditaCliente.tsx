import { Component } from "react";
import { Link } from "react-router-dom";

class FormularioEditaCliente extends Component {
  render() {
    return (
      <div style={{ margin: "3em" }}>
        <form className="col s12">
          <div className="center-align">
            <h2>Dados do Cliente</h2>
          </div>
          <div className="row">
            <div className="input-field col" style={{ width: "25%" }}>
              <label htmlFor="nome">Nome:</label>
              <br />
              <input id="nome" type="text" className="validate" />
            </div>
            <div className="input-field col" style={{ width: "25%" }}>
              <label htmlFor="nomeSocial">Nome Social:</label>
              <br />
              <input id="nomeSocial" type="text" className="validate" />
            </div>
            <div className="input-field col" style={{ width: "50%" }}>
              <label htmlFor="email" className="label">
                Email:
              </label>
              <br />
              <input id="email" type="text" className="validate" />
            </div>
          </div>
          <label className="label">Telefones:</label>
          <div className="row">
            <div className="input-field col s1">
              <input type="text" placeholder="DDD" />
            </div>
            <div className="input-field col s2">
              <input type="text" placeholder="Número" />
            </div>
            <div className="col s1">
              <br />
              <button
                style={{ fontSize: "1.5rem" }}
                className="btn"
                type="button"
              >
                +
              </button>
            </div>
            <div className="col">
              <div className="row ml-2">
                <div>
                  <div className="row">
                    <div className="col s2">
                      <p>12</p>
                    </div>
                    <div className="col s5">
                      <p>982736432</p>
                    </div>
                    <div className="col s3">
                      <button
                        className="btn red btn-floating btn-small valign-wrapper"
                        type="button"
                      >
                        <span className="valign">X</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h4>Endereço</h4>
          <div className="row">
            <div className="input-field col s3">
              <label htmlFor="estado" className="label">
                Estado:
              </label>
              <br />
              <input id="estado" type="text" className="validate" />
            </div>
            <div className="input-field col s3">
              <label htmlFor="cidade" className="label">
                Cidade:
              </label>
              <br />
              <input id="cidade" type="text" className="validate" />
            </div>
            <div className="input-field col s3">
              <label htmlFor="bairro" className="label">
                Bairro:
              </label>
              <br />
              <input id="bairro" type="text" className="validate" />
            </div>
            <div className="input-field col s3">
              <label htmlFor="rua" className="label">
                Rua:
              </label>
              <br />
              <input id="rua" type="text" className="validate" />
            </div>
          </div>

          <div className="row">
            <div className="input-field col s1">
              <label htmlFor="numero" className="label">
                Número:
              </label>
              <br />
              <input id="numero" type="text" className="validate" />
            </div>
            <div className="input-field col s2">
              <label htmlFor="codigoPostal" className="label">
                Código Postal:
              </label>
              <br />
              <input id="codigoPostal" type="text" className="validate" />
            </div>
            <div className="input-field col s8">
              <label htmlFor="informacoesAdicionais" className="label">
                Informações Adicionais:
              </label>
              <br />
              <br />
              <textarea
                id="informacoesAdicionais"
                className="materialize-textarea validate"
                style={{ height: "10rem" }}
                rows={3}
              />
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <Link to="/" className="btn">
                Atualizar
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default FormularioEditaCliente;