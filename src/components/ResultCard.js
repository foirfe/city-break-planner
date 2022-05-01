import { useNavigate } from "react-router-dom";
import imagePlaceholder from "../images/img-placeholder.jpg";

export default function ResultCard({ place }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/place/${place.Id}`);
  }

  return (
    <>
      <p>{place.Category.Name}</p>
      <div onClick={handleClick} className="resultcard">
        <div>
          <div className="resultcardimage">
            <img src={place.Files[0] ? place.Files[0].Uri : imagePlaceholder} alt={place.Name} />
            <div className="h2">
              <h2>{place.Name}</h2>
            </div>
            <div className="p">
              <p>{place.distance.toFixed(2)}km</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}