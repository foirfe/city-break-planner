import { useEffect, useState } from "react";

export default function ResultsPage(){
const [places, setPlaces] = useState([]);
useEffect(()=>{
    async function getActivites(){
    const response = await fetch("https://raw.githubusercontent.com/cederdorff/react-visit-denmark/master/public/data/activities.json");
    const data = await response.json()
    console.log(data);
        //const urls = ["", "https://raw.githubusercontent.com/cederdorff/react-visit-denmark/master/public/data/attractions.json"];
    }

    async function getAttractions(){
        const response = await fetch("https://raw.githubusercontent.com/cederdorff/react-visit-denmark/master/public/data/attractions.json");
        const data = await response.json()
        console.log(data);
    }
    getActivites();
    getAttractions();
})
    return(
        <h1>Resultater</h1>
        
    );
}