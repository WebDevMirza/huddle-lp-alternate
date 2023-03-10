import { useState } from "react";
import { Card } from "../compo/Card";
import { Header } from "../compo/Header";
import { Hero } from "../compo/Hero";

import "../assets/styles/basic.css";
import Data from "../assets/data/Data.json";
import { Footer } from "../compo/Footer";
import { Cta } from "../compo/Cta";

export const Home = () => {
  const [data, setData] = useState(Data);
  return (
    <>
      <div className="grand-holder">
        <header>
          <Header />
        </header>
        <main>
          <section className="hero-section">
            <Hero />
          </section>
          <section className="card-section">
            <div className="holder lg-flow">
              {data.map((v) => {
                return <Card key={v.id} data={v} />;
              })}
            </div>
          </section>
          <section className="cta">
            <Cta />
          </section>
        </main>
        <footer className="bg-footer">
          <Footer />
        </footer>
      </div>
    </>
  );
};

// 1. cta
