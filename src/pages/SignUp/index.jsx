import { useState } from "react";
import styles from "./styleSign.module.css";
import DefaultButton from "./../../components/DefaultButton/index";

export default function SignUp() {
  const [Name, setName] = useState("");
  const [UserName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [CPF, setCPF] = useState("");

  return (
    <div className={styles.SignUp}>
      <div className="logo">
        <img src="../../images/logocor.png" alt="b2list" />
      </div>

      <div className={styles.ContainerSign}>
        {/* div que engolga o form */}
        <div>
          <div className={styles.title}>
            <h1>Cadastrar Usuario</h1>
          </div>
          <div className={styles.SignName}>
            {/* <MdOutlinePeopleAlt /> */}
            <input
              type="name"
              placeholder="Informe seu nome completo"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className={styles.SignUserName}>
            {/* <MdOutlinePeopleAlt /> */}
            <input
              type="username"
              placeholder="Informe seu nome de usuario"
              value={UserName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className={styles.SignEmail}>
            {/* <MdOutlinePeopleAlt /> */}
            <input
              type="email"
              placeholder="Informe seu Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.SignCPF}>
            {/* <MdOutlinePeopleAlt /> */}
            <input
              type="cpf"
              placeholder="Informe seu CPF"
              value={CPF}
              onChange={(e) => setCPF(e.target.value)}
            />
          </div>
        </div>

        {/* Button Componenetes */}
        <div className={styles.buttons}>
          <DefaultButton
            title={"Cancelar"}
            paddingButton={" 0px 45px 0px 45px"}
            backgroundColorButton={"#2DC8C5"}
            colorText={"#085195"}
            fontButton={700}
            heightBuiton={"53px"}
          />
          <DefaultButton
            title={"Salvar"}
            paddingButton={" 0px 40px 0px 40px"}
            backgroundColorButton={"#2DC8C5"}
            colorText={"#085195"}
            fontButton={700}
            heightBuiton={"53px"}
          />
        </div>
      </div>

      
      <footer className={styles.footer}>
        <p>12/12/2022 © Copyrigth B2list -</p>
        <p>Todos os direitos reservados</p>
      </footer>
    </div>
    
  );
}
