import "./card.css";
import MovImg from "../../../src/source/children.png";
const Card = (src) => {
  return (
    <div className="parent">
      <div className="card_row">
        <div className="cards">
          <img src={MovImg} alt="" />
          <img src={MovImg} alt="" />
          <img src={MovImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;
