import React from "react";

import "./styles.css";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import api from "../../services/api";

export interface ClassItem {
  id: string;
  subject: string;
  cost: Number;
  user_id: string;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
}

interface TeacherItemProps {
  classItem: ClassItem;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ classItem }) => {
  const contact = () => {
    api.post("/connections", {
      user_id: classItem.user_id,
    });
  };

  return (
    <article className="teacher-item">
      <header>
        <img src={classItem.avatar} alt={classItem.name} />
        <div>
          <strong>{classItem.name}</strong>
          <span>{classItem.subject}</span>
        </div>
      </header>
      <p>{classItem.bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {classItem.cost}</strong>
        </p>
        <a
          onClick={contact}
          href={`https://api.whatsapp.com/send?phone=${classItem.whatsapp}`}
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em Contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
