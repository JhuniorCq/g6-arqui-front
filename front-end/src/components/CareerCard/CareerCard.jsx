import "./CareerCard.css";

export const CareerCard = ({ rutaImg, carrera }) => {
  return (
    <div className="contenedor-carrera">
      <img loading="lazy" src={rutaImg} alt={carrera} className="img-carrera" />
      <h2 className="carrera">{carrera}</h2>
    </div>
  );
};
