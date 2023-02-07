import Logo from "../assets/images/logo.svg";
import "../assets/styles/header.css";

export const Header = () => {
  return (
    <>
      <div className="holder holder-header flow">
        <div className="logo">
          <img src={Logo} alt="Huddle" />
        </div>
        <div>
          <a href="#" className="btn">
            Try It Free
          </a>
        </div>
      </div>
    </>
  );
};
