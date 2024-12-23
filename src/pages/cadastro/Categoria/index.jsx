import React, { useState } from "react";
import PageDefault from "../../../componestes/PageDefault";
import "./index.css"
import { Link } from "react-router-dom";
import FormField from "../../../componestes/FormField";

function CasdastroCategoria() {

    const [categorias, setCategorias] = useState([])
    const [valueName, setValueName] = useState("Nome Categoria");
    const [valueDescricao, setValueDescricao] = useState("Descrição");
    const [valueCor, setValueCor] = useState("Cor");


    function handleChangeName(e) {
        setValueName(e.target.value)
    }

    function handleChangeDescricao(e) {
        setValueDescricao(e.target.value)
    }

    function handleChangeCor(e) {
        setValueCor(e.target.value)
    }

    return (
        <div className="box">

            <PageDefault>
                <div className="btnHome">
                    <Link to="/">
                        Voltar para Home
                    </Link>
                </div>

                <h1>Cadastrar Categoria:{valueName}</h1>
                <form onSubmit={function handleSubmit(e) {
                    e.preventDefault();

                    let valoresIniciais = {
                        nome: valueName,
                        discricao: valueDescricao,
                        cor: valueCor
                    }

                    setCategorias([...categorias, valoresIniciais])
                }}>

                    <FormField
                        name="nome"
                        id="nome"
                        type="text"
                        placeholder="Nome categoria"
                        onChange={handleChangeName}>
                        Nome Categoria:
                    </FormField>

                    <FormField
                        name="descricao"
                        id="descricao"
                        type="text"
                        placeholder="Descricao"
                        onChange={handleChangeDescricao}>
                        Descricao Categoria:
                    </FormField>

                    <FormField
                        name="cor"
                        id="color"
                        type="color"
                        placeholder="Descricao"
                        onChange={handleChangeCor}>
                        Cor Da Categoria:
                    </FormField>
                    <button type="submit">Cadastrar categoria</button>
                </form>
                <div className="categoria_lista">
                    <lu>
                        {
                            categorias.map((categoria, index) => {
                                return <li key={index}>{categoria.nome}</li>
                            })
                        }
                    </lu>
                </div>
                <Link to="/pages/cadastro">
          Cadastrar Novo Video
        </Link>
            </PageDefault>
        </div>
    );
}

export default CasdastroCategoria;
