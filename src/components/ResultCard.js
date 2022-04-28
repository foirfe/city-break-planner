import imagePlaceholder from "../images/img-placeholder.jpg"

export default function ResultCard({place}){
    return(
        <div className="resultcard">
<p>{place.Category.Name}</p>
<div>
<h2>{place.Name}</h2>
<div className="resultcardimage">
<img src={place.Files[0] ? place.Files[0].Uri : imagePlaceholder} alt={place.Name} />
</div>
<p>{place.distance.toFixed(2)}km</p>
</div>
        </div>
    )
}