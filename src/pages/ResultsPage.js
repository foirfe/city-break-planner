import { useEffect, useState } from "react";
import ResultCard from "../components/ResultCard";

export default function ResultsPage(){
const [places, setPlaces] = useState([]);

useEffect(()=>{
    async function getCurrentLocation() {
        const location = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        return {
          longitude: location.coords.longitude,
          latitude: location.coords.latitude,
        };
      };
      function calcDistance(lat1, lon1, lat2, lon2, unit = "K") {
        if ((lat1 === lat2) && (lon1 === lon2)) {
          return 0;
        }
        else {
          let radlat1 = Math.PI * lat1 / 180;
          let radlat2 = Math.PI * lat2 / 180;
          let theta = lon1 - lon2;
          let radtheta = Math.PI * theta / 180;
          let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
          if (dist > 1) {
            dist = 1;
          }
          dist = Math.acos(dist);
          dist = dist * 180 / Math.PI;
          dist = dist * 60 * 1.1515;
          if (unit === "K") { dist = dist * 1.609344 }
          if (unit === "N") { dist = dist * 0.8684 }
          return dist;
        }
      };
    async function getActivites(){
        let currentlocation = await getCurrentLocation();
    const response = await fetch("https://raw.githubusercontent.com/cederdorff/react-visit-denmark/master/public/data/activities.json");
    const activites = await response.json();
    const response1 = await fetch("https://raw.githubusercontent.com/cederdorff/react-visit-denmark/master/public/data/attractions.json");
    const attractions = await response1.json();
    const response2 = await fetch("https://raw.githubusercontent.com/cederdorff/react-visit-denmark/master/public/data/placesToEat.json");
    const placesToEat = await response2.json();
    const combineddata = activites.concat(attractions, placesToEat);
    const filterdata = combineddata.filter(item => item.Address.GeoCoordinate);
    filterdata.forEach(doc => {
      let location = doc;
      location.distance = calcDistance(currentlocation.latitude, currentlocation.longitude, doc.Address.GeoCoordinate.Latitude, doc.Address.GeoCoordinate.Longitude)
    });
    filterdata.sort(function (a, b){
      return a.distance - b.distance;
    })
    console.log(combineddata);
    setPlaces(filterdata);
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