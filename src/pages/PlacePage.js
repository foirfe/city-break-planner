import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function PlacePage(){
    const params = useParams();
    const placeId = params.id;
    const [place, setPlace] = useState([]);
    useEffect(()=>{
        async function getPlace(){
             const response = await fetch("https://raw.githubusercontent.com/cederdorff/react-visit-denmark/master/public/data/activities.json");
    const activites = await response.json();
    const response1 = await fetch("https://raw.githubusercontent.com/cederdorff/react-visit-denmark/master/public/data/attractions.json");
    const attractions = await response1.json();
    const response2 = await fetch("https://raw.githubusercontent.com/cederdorff/react-visit-denmark/master/public/data/placesToEat.json");
    const placesToEat = await response2.json();
    const combineddata = activites.concat(attractions, placesToEat);
    const filterplace = combineddata.filter(item=> placeId.includes(item.Id))
    console.log(filterplace);
    setPlace(filterplace);
        }
        getPlace();
    },[placeId])
    return(
        <div className="placepage">
            {place.map(selectedplace=>(
                <div>
                    <h1>{selectedplace.Name}</h1>
                </div>
            ))}
        </div>
    )
}