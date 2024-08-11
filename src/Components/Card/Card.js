import "../../Assets/css/card.css";
function Card({ img, title, data }) {
  return (
    <div className="card-container">
      <div className="card-img">
        <img src={img} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="card-content">
        <h5 className="card-title">{title}</h5>
        <p className="card-details">{data}</p>
        <button className="card-button">Click me</button>
      </div>
    </div>
  );
}

export default Card;
