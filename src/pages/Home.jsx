import "../assets/styles/basic.css";
import { Header } from "../compo/Header";
import { Hero } from "../compo/Hero";

export const Home = () => {
  return (
    <>
      <div className="grand-holder">
        <header>
          <Header />
        </header>
        <main>
          <section className="hero">
            <Hero />
          </section>
        </main>
        <footer></footer>
      </div>
    </>
  );
};
