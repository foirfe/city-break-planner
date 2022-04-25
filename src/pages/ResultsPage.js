import { useEffect, useState } from "react";
import ResultCard from "../components/ResultCard";

export default function ResultsPage(){
const [places, setPlaces] = useState([]);

useEffect(()=>{
    async function getActivites(){
    const response = await fetch("https://raw.githubusercontent.com/cederdorff/react-visit-denmark/master/public/data/activities.json");
    const activites = await response.json();
    const response1 = await fetch("https://raw.githubusercontent.com/cederdorff/react-visit-denmark/master/public/data/attractions.json");
    const attractions = await response1.json();
    const response2 = await fetch("https://raw.githubusercontent.com/cederdorff/react-visit-denmark/master/public/data/placesToEat.json");
    const placesToEat = await response2.json();
    const combineddata = activites.concat(attractions, placesToEat);
    console.log(combineddata);
    setPlaces(combineddata);
    }
getActivites();
},[]);

    return(
        <div className="resultspage">
        <h1>Resultater</h1>
        {places.map(place =>(
            <ResultCard place={place} key={place.Id}/>
        ))}
       </div>
    );
}