import "../assets/styles/card.css";

export const Card = ({ data }) => {
  return (
    <>
      <div className="holder-card flow flow-all">
        <div className="card-img">
          <img src={data.photo} alt="" />
        </div>
        <div className="card-body">
          <h1 className="card-title">{data.title}</h1>
          <p className="card-text">{data.desc}</p>
        </div>
      </div>
    </>
  );
};
