import React from "react";
import "./App.css";
import "./Login.css";
import "./Login.js";
import Login from "./Login.js";

export default function App() {
  const handleEntrar = () => {
    Login();
  };

  return (
    <div className="App">
      <div className="Barra">
        <div className="Nome">
          <h1 className="h1">VariedadeTop</h1>
        </div>
        <div className="Botoes">
          <div className="BotoesDireita">
            <button onClick={handleEntrar}>Entrar na conta</button>
            <button>Cadastrar-se</button>
          </div>
        </div>
      </div>

      <div className="Corpo">
        <div className="Sidebar">
          <h2>Categorias</h2>
          <ul>
            <li>Eletrônicos</li>
            <li>Roupas</li>
            <li>Calçados</li>
            <li>Decoração</li>
          </ul>

          <h2>Informações Adicionais</h2>
          <p>Frete grátis em compras acima de R$ 250,00</p>
          <p>Horário de atendimento: das 08 às 21h.</p>
        </div>

        <div className="Caixa">
          <div className="BarraDeBusca">
            <img src="iphone.jpg" alt="Iphone 15"></img>

            <input
              type="text"
              placeholder="Pesquisar por produto ou categoria"
            />
            <button>Pesquisar</button>
          </div>

          <div className="ListagemProdutos">
            <div className="Produto">
              <img src="" alt="Produto"></img>
              <div className="DetalhesProduto">
                <h2>Nome do Produto</h2>
                <p>Categoria: Categoria do Produto</p>
                <p>Tamanho: Tamanho do Produto</p>
                <p>Material: Material do Produto</p>
                <p>Preço: R$ 999,99</p>
              </div>
            </div>
            <div className="Produto">
              <img src="" alt="Produto" />
              <div className="DetalhesProduto">
                <h2>Nome do Produto</h2>
                <p>Categoria: Categoria do Produto</p>
                <p>Tamanho: Tamanho do Produto</p>
                <p>Material: Material do Produto</p>
                <p>Preço: R$ 99,99</p>
              </div>
            </div>
            <div className="Produto">
              <img src="" alt="Produto" />
              <div className="DetalhesProduto">
                <h2>Nome do Produto</h2>
                <p>Categoria: Categoria do Produto</p>
                <p>Tamanho: Tamanho do Produto</p>
                <p>Material: Material do Produto</p>
                <p>Preço: R$ 99,99</p>
              </div>
            </div>
            <div className="Produto">
              <img src="" alt="Produto" />
              <div className="DetalhesProduto">
                <h2>Nome do Produto</h2>
                <p>Categoria: Categoria do Produto</p>
                <p>Tamanho: Tamanho do Produto</p>
                <p>Material: Material do Produto</p>
                <p>Preço: R$ 99,99</p>
              </div>
            </div>
            <div className="Produto">
              <img src="" alt="Produto" />
              <div className="DetalhesProduto">
                <h2>Nome do Produto</h2>
                <p>Categoria: Categoria do Produto</p>
                <p>Tamanho: Tamanho do Produto</p>
                <p>Material: Material do Produto</p>
                <p>Preço: R$ 99,99</p>
              </div>
            </div>
            <div className="Produto">
              <img src="" alt="Produto" />
              <div className="DetalhesProduto">
                <h2>Nome do Produto</h2>
                <p>Categoria: Categoria do Produto</p>
                <p>Tamanho: Tamanho do Produto</p>
                <p>Material: Material do Produto</p>
                <p>Preço: R$ 99,99</p>
              </div>
            </div>
            <div className="Produto">
              <img src="" alt="Produto" />
              <div className="DetalhesProduto">
                <h2>Nome do Produto</h2>
                <p>Categoria: Categoria do Produto</p>
                <p>Tamanho: Tamanho do Produto</p>
                <p>Material: Material do Produto</p>
                <p>Preço: R$ 99,99</p>
              </div>
            </div>
            <div className="Produto">
              <img src="" alt="Produto" />
              <div className="DetalhesProduto">
                <h2>Nome do Produto</h2>
                <p>Categoria: Categoria do Produto</p>
                <p>Tamanho: Tamanho do Produto</p>
                <p>Material: Material do Produto</p>
                <p>Preço: R$ 99,99</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
