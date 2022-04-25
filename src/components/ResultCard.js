import imagePlaceholder from "../images/img-placeholder.jpg"

export default function ResultCard({place}){
    return(
        <div className="Resultcard">
<h2>{place.Name}</h2>
<img src={place.Files[0] ? place.Files[0].Uri : imagePlaceholder} alt={place.Name} />
<p>{place.Category.Name}</p>
        </div>
    )
}