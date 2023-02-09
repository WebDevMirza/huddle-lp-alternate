import "../assets/styles/card.css";

export const Card = ({ data }) => {
  return (
    <>
      <div className="holder-card flow flow-all">
        <div className="card-img">
          <img src={data.photo} alt="" width={312} height={245} />
        </div>
        <div className="card-body">
          <h1 className="card-title">{data.title}</h1>
          <p className="card-text">{data.desc}</p>
        </div>
      </div>
    </>
  );
};
