import React from "react";
import "./styles.css";

// icons
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import api from "../../services/api";

export interface IProffy {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface IProps {
  proffy: IProffy;
}

const TeacherItem: React.FC<IProps> = ({ proffy }) => {
  function createNewConnection() {
    api.post("connections", {
      user_id: proffy.id,
    });
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={proffy.avatar} alt={proffy.name} />

        <div>
          <strong>{proffy.name}</strong>
          <span>{proffy.subject}</span>
        </div>
      </header>

      <p>{proffy.bio}</p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ {proffy.cost}</strong>
        </p>
        <a
          onClick={createNewConnection}
          href={`https://wa.me/${proffy.whatsapp}`}
        >
          <img src={whatsappIcon} alt="whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
