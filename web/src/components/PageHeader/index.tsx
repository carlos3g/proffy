import React from "react";
import "./styles.css";

// navigation
import { Link } from "react-router-dom";

// images
import logoImg from "../../assets/images/logo.svg";
// icons
import backIcon from "../../assets/images/icons/back.svg";

interface IProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<IProps> = ({ title, children, description }) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="Proffy" />
      </div>

      <div className="header-content">
        <strong>{title}</strong>
        {description && <p>{description}</p>}
        {children}
      </div>
    </header>
  );
};

export default PageHeader;
