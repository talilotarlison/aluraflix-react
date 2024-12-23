import React, { useState } from "react";
import PageDefault from "../../../componestes/PageDefault";
import "./index.css"
import { Link } from "react-router-dom";
import FormField from "../../../componestes/FormField";

function CasdastroVideo() {

  const [videoCadastro, setvideoCadastro] = useState([])
  const [valueName, setValueName] = useState("Nome Video");
  const [valueUrl, setValueUrl] = useState("Url Video");
  const [valueDescricao, setValueDescricao] = useState("Descrição");


  function handleChangeName(e) {
    setValueName(e.target.value)
  }

  function handleChangeUrl(e) {
    setValueUrl(e.target.value)
  }

  function handleChangeDescricao(e) {
    setValueDescricao(e.target.value)
  }


  return (
    <div>
      <PageDefault>
        <div className="btnHome">
          <Link to="/">
            Voltar para Home
          </Link>
        </div>

        <h1>Cadastrar Videos:{valueName}</h1>
        <form onSubmit={function handleSubmit(e) {
          e.preventDefault();

          let dadosVideo = {
            nome: valueName,
            url: valueUrl,
            categoria: valueDescricao
          }

          setvideoCadastro([...videoCadastro, dadosVideo])
        }}>

          <FormField
            name="nome"
            id="nome"
            type="text"
            placeholder="Nome video"
            onChange={handleChangeName}>
            Nome Video:
          </FormField>

          <FormField
            name="url"
            id="url"
            type="text"
            placeholder="URL video"
            onChange={handleChangeUrl}>
            Descricao Video:
          </FormField>

          <FormField
            name="categoria"
            id="categoria"
            type="text"
            placeholder="Categoria"
            onChange={handleChangeDescricao}>
            Categoria Do Video:
          </FormField>
          <button type="submit">Cadastrar Video</button>
        </form>
        <Link to="/pages/categoria">
          Cadastrar Categoria
        </Link>
      </PageDefault>
    </div>
  );
}

export default CasdastroVideo;
