import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import imagePlaceholder from "../images/img-placeholder.jpg";
import Logo from "../images/visitdanmarklogo.png";

export default function PlacePage(){
    const params = useParams();
    const placeId = params.id;
    const [place, setPlace] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{         //Get Users Current GeoLocation
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

        async function getPlace(){
            let currentlocation = await getCurrentLocation();
             const response = await fetch("https://raw.githubusercontent.com/cederdorff/react-visit-denmark/master/public/data/activities.json");
    const activites = await response.json();
    const response1 = await fetch("https://raw.githubusercontent.com/cederdorff/react-visit-denmark/master/public/data/attractions.json");
    const attractions = await response1.json();
    const response2 = await fetch("https://raw.githubusercontent.com/cederdorff/react-visit-denmark/master/public/data/placesToEat.json");
    const placesToEat = await response2.json();
    const combineddata = activites.concat(attractions, placesToEat);
    const filterplace = combineddata.filter(item=> placeId.includes(item.Id))
    filterplace.forEach(doc => {
        let location = doc;
        location.distance = calcDistance(currentlocation.latitude, currentlocation.longitude, doc.Address.GeoCoordinate.Latitude, doc.Address.GeoCoordinate.Longitude)
      })
    setPlace(filterplace);
        }
        getPlace();
    },[placeId])
    function handleBack(){
      navigate("/results")
    }
    return(
        <div className="placepage" >
            {place.map(selectedplace=>(
                <div className="placecontent" key={selectedplace.Id}>
                    <div className="header">
                    <img className="headerimg" src={selectedplace.Files[0] ? selectedplace.Files[0].Uri : imagePlaceholder} alt={place.Name} />
                    <div onClick={handleBack} className="back">
      &#11164; <span>Back</span> 
      </div>
                    <div className="headerinfo">
                    <h1>{selectedplace.Name}</h1>
                    <p className="address">{selectedplace.Address.AddressLine1}, {selectedplace.Address.City}</p>
                    </div>
                    </div>
                    <p className="distance">{selectedplace.distance.toFixed(2)} km</p>
                    <p className="infotext">{selectedplace.Descriptions[0]?.Text}</p>
                    <img className="logo" src={Logo} alt="Logo"/>
                </div>
            ))}
          
        </div>
    )
}