import "../assets/styles/hero.css";
import HeroImg from "../assets/images/illustration-mockups.svg";

export const Hero = () => {
  return (
    <>
      <div className="holder holder-hero">
        <div className="hero-body flow-all">
          <h1>Build The Community Your Fans Will Love</h1>
          <p>
            Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create
            connections with your users as you engage in genuine discussion.{" "}
          </p>
          <a className="btn-main" href="#">
            Get Started For Free
          </a>
        </div>
        <div className="hero-img">
          <img src={HeroImg} alt="Huddle features" />
        </div>
      </div>
    </>
  );
};
