import "./App.css";
import DefaultButton from "./components/DefaultButton";


function App() {
  // const [count, setCount] = useState(0)
  
  return (
    <div className="App">
      <div className="imageContainer">
        <img src="../src/images/capa.png" alt="" />
      </div>

      <div className="textContainer">
        <div className="circleEffectsArea">
          <div id="circleEFfectElipse">.</div>
          <div id="circleEFfectElipse">.</div>
        </div>

        <div className="titles">
          <h2>Bem vindo ao B2list</h2>
          <h1>Simples, prático e eficiente</h1>
        </div>

        <div className="buttons">
          <DefaultButton
            title={"Cadastrar"}
            paddingButton={" 0px 40px 0px 40px"}
            backgroundColorButton={"#2DC8C5"}
            colorText={"#085195"}
            fontButton={700}
            href="/signup"
            
          />

          <DefaultButton
            title={"Listar Usuários"}
            paddingButton={"0px 60px 0px 60px"}
            backgroundColorButton={"#085195"}
            colorText={"#FFFFFf"}
            fontButton={700}
            
            
          />
        </div>

        <footer className="footer">
          <p>2022 © Copyright -</p>
          <p>Todos os direitos reservados</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
("");
