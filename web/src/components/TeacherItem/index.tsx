import React from "react";
import "./styles.css";

// icons
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

interface IProps {}

const TeacherItem: React.FC<IProps> = (props) => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/52337966?s=460&u=17eccc5cafaa84bdecf8d46d0acbc42c6d10d381&v=4"
          alt="avatar"
        />

        <div>
          <strong>Carlos Emanuel</strong>
          <span>Astronômo</span>
        </div>
      </header>

      <p>
        aaaaaaaa
        <br /> <br />
        aaaaaaaaaa
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ 20,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
