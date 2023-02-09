import Logo from "../assets/images/logo.svg";
import "../assets/styles/header.css";

export const Header = () => {
  return (
    <>
      <div className="holder holder-header flow">
        <div className="logo">
          <a href="#">
            <img src={Logo} alt="Huddle" width={240} height={39} />
          </a>
        </div>
        <div>
          <a href="#" className="btn btn-trial">
            Try It Free
          </a>
        </div>
      </div>
    </>
  );
};
