function Card({ img, title, data }) {
  return (
    <div>
      <img src={img} alt="" />
      <h5>{title}</h5>
      <p>{data}</p>
      <span>Click me</span>
    </div>
  );
}

export default Card;
