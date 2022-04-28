import { useEffect, useState } from "react";
import ResultCard from "../components/ResultCard";

export default function ResultsPage(){
const [places, setPlaces] = useState([]);

useEffect(()=>{
    //Get Users Current GeoLocation
    async function getCurrentLocation() {
        const location = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        return {
          longitude: location.coords.longitude,
          latitude: location.coords.latitude,
        };
      };
      //Function to Calculate distance between two GeoCoordinates
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

      function getFilters(){
        const filters = [];
        if(localStorage.getItem("Parks and gardens")){
          filters.push("Parks and gardens");
          filters.push("Natural Areas");
        }
        if(localStorage.getItem("Museums")){
          filters.push("Museums");
        }
        if(localStorage.getItem("Amusements")){
          filters.push("Amusement and Theme Parks");
          filters.push("Indoor fun for young and old");
        }
        if(localStorage.getItem("Beaches and lidos")){
          filters.push("Beaches and lidos");
          filters.push("Swimming pools and water parks");
        }
        if(localStorage.getItem("Culture and history")){
          filters.push("Ancient Monuments & Ruins");
          filters.push("Street Art and Sculptures");
          filters.push("Cultural Centres / Music venue");
          filters.push("Galleries");
        }
        if(localStorage.getItem("Nightlife and clubs")){
          filters.push("Nightlife and Clubs");
        }
        if(localStorage.getItem("Architecture and urban spaces")){
          filters.push("Architecture and Urban Spaces")
        }
        if(localStorage.getItem("Food")){
          filters.push("Restaurants");
          filters.push("Cafés");
          filters.push("Local Specialties");
        }
        if(localStorage.getItem("Sightseeing")){
          filters.push("Sightseeing");
          filters.push("Yachting harbours");
        }
        if(localStorage.getItem("Sports and activites")){
          filters.push("Sport and Activities");
          filters.push("Bike Rentals");
          filters.push("Golf Courses");
          filters.push("Angling");
        }
        if(localStorage.getItem("Kids")){
          filters.push("Playgrounds");
        }
        if(localStorage.getItem("Zoos and animals")){

        }
        return filters;
      }

    async function getActivites(){
        let currentlocation = await getCurrentLocation();
    const response = await fetch("https://raw.githubusercontent.com/cederdorff/react-visit-denmark/master/public/data/activities.json");
    const activites = await response.json();
    const response1 = await fetch("https://raw.githubusercontent.com/cederdorff/react-visit-denmark/master/public/data/attractions.json");
    const attractions = await response1.json();
    const response2 = await fetch("https://raw.githubusercontent.com/cederdorff/react-visit-denmark/master/public/data/placesToEat.json");
    const placesToEat = await response2.json();
    const combineddata = activites.concat(attractions, placesToEat);
    //Log to easier find categories.
   combineddata.forEach(doc =>{
     let location = doc;
     console.log(location.Category.Name);
   })
 
    //Distance between Users Current Location and Place Location
    const filters = getFilters();
    const results = combineddata.filter(item => filters.includes(item.Category.Name));
    const filterdatawithlocation = results.filter(item => item.Address.GeoCoordinate);
    filterdatawithlocation.forEach(doc => {
      let location = doc;
      location.distance = calcDistance(currentlocation.latitude, currentlocation.longitude, doc.Address.GeoCoordinate.Latitude, doc.Address.GeoCoordinate.Longitude)
      
    })
    setPlaces(filterdatawithlocation);

    }
   
getActivites();
},[]);

    return(
        <div className="resultspage">
        <h1>Resultater</h1>
        <p>Test for sorting</p>
        {places.map(place =>(
            <ResultCard place={place} key={place.Id}/>
        ))}
       </div>
    );
}