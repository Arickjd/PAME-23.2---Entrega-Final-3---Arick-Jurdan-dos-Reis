import "./Login.css";

export default function Login() {
  return (
    <div classname="Fundo">
      <div className="Card">
        <h2>Área de Autenticação</h2>
        <form>
          <label htmlFor="usuario">Usuário:</label>
          <input type="text" id="usuario" name="usuario" />

          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" name="senha" />

          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}
