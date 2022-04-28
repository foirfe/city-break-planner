import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ParksIcon } from "../images/icons/parks.svg";
import { ReactComponent as MuseumIcon } from "../images/icons/museums.svg";
import { ReactComponent as AmusementsIcon } from "../images/icons/amusements.svg";
import { ReactComponent as BeachesIcon } from "../images/icons/beaches.svg";
import { ReactComponent as CultureIcon } from "../images/icons/culture.svg";
import { ReactComponent as NightlifeIcon } from "../images/icons/nightlife.svg";
import { ReactComponent as ArchitectureIcon } from "../images/icons/architecture.svg";
import { ReactComponent as FoodIcon } from "../images/icons/food.svg";
import { ReactComponent as SightseeingIcon } from "../images/icons/sightseeing.svg";
import { ReactComponent as SportsIcon } from "../images/icons/sports.svg";
import { ReactComponent as KidsIcon } from "../images/icons/kids.svg";
import { ReactComponent as ZoosIcon } from "../images/icons/zoos.svg";

export default function Form() {
   const navigate = useNavigate();
   const [parksandgardens, setParksandgardens] = useState(localStorage.getItem("Parks and gardens"));
   const [museum, setMuseum] = useState(localStorage.getItem("Museum"));
   const [amusements, setAmusements] = useState(localStorage.getItem("Amusements"));
   const [beacheswater, setBeachesandwater] = useState(localStorage.getItem("Beaches and lidos"));
   const [cultureandhistory, setCultureandhistory] = useState(localStorage.getItem("Culture and history"));
   const [nightlifeandclubs, setNightlifeandclubs] = useState(localStorage.getItem("Nightlife and clubs"));
   const [architectureandurbanspaces, setArchitectureandurbanspaces] = useState(localStorage.getItem("Architecture and urban spaces"));
   const [food, setFood] = useState(localStorage.getItem("Food"));
   const [sightseeing, setSightseeing] = useState(localStorage.getItem("Sightseeing"));
   const [sportsandactivites, setSportsandactivites] = useState(localStorage.getItem("Sports and activites"));
   const [kids, setKids] = useState(localStorage.getItem("Kids"));
   const [zoosandanimals, setZoosandanimals] = useState(localStorage.getItem("Zoos and animals"));
   const [errormessage, setErrormessage] = useState("");

   function handleSubmit(event) {
      event.preventDefault();
      const checked = document.querySelectorAll("input[type=checkbox]:checked").length;
      if (!checked) {
         setErrormessage("You must pick one category");
      } else {
         for (const item of event.target.elements) {
            if (item.checked) {
               localStorage.setItem(item.value, true);
            } else {
               localStorage.removeItem(item.value);
            }
         }
         navigate("/results");
      }
   }
   return (
      <>
         <form onSubmit={handleSubmit}>
            <div className="checkboxes">
               <div className="row-manager">
                  {/*Manager flex for de to kommende div kasser*/}
                  <div className="row1">
                     {/*første row til flex*/}
                     <div className="label-box">
                        <label>
                           <input
                              type="checkbox"
                              value="Parks and gardens"
                              onChange={e => setParksandgardens(e.target.checked)}
                              checked={parksandgardens}
                           />

                           <div className="span-icon-box">
                              <span className="span-icon">
                                 <ParksIcon />
                              </span>
                              <span className="span-text"> Parks &#38; Gardens</span>
                           </div>
                        </label>
                     </div>
                     <div className="label-box">
                        <label>
                           <input type="checkbox" value="Museums" onChange={e => setMuseum(e.target.checked)} checked={museum} />
                           <div className="span-icon-box">
                              <span className="span-icon">
                                 <MuseumIcon />
                              </span>
                              <span className="span-text">Museums</span>
                           </div>
                        </label>
                     </div>
                     <div className="label-box">
                        <label>
                           <input type="checkbox" value="Amusements" onChange={e => setAmusements(e.target.checked)} checked={amusements} />
                           <div className="span-icon-box">
                              <span className="span-icon">
                                 <AmusementsIcon />
                              </span>
                              <span className="span-text">Amusements</span>
                           </div>
                        </label>
                     </div>
                     <div className="label-box">
                        <label>
                           <input
                              type="checkbox"
                              value="Beaches and lidos"
                              onChange={e => setBeachesandwater(e.target.checked)}
                              checked={beacheswater}
                           />
                           <div className="span-icon-box">
                              <span className="span-icon">
                                 <BeachesIcon />
                              </span>
                              <span className="span-text"> Beaches &#38; Water</span>
                           </div>
                        </label>
                     </div>
                     <div className="label-box">
                        <label>
                           <input
                              type="checkbox"
                              value="Culture and history"
                              onChange={e => setCultureandhistory(e.target.checked)}
                              checked={cultureandhistory}
                           />
                           <div className="span-icon-box">
                              <span className="span-icon">
                                 <CultureIcon />
                              </span>
                              <span className="span-text">Culture &#38; History</span>
                           </div>
                        </label>
                     </div>
                     <div className="label-box">
                        <label>
                           <input
                              type="checkbox"
                              value="Nightlife and clubs"
                              onChange={e => setNightlifeandclubs(e.target.checked)}
                              checked={nightlifeandclubs}
                           />
                           <div className="span-icon-box">
                              <span className="span-icon">
                                 <NightlifeIcon />
                              </span>
                              <span className="span-text"> Nightlife &#38; Clubs</span>
                           </div>
                        </label>
                     </div>
                  </div>
                  <div className="row2">
                     {/*anden row til flex*/}
                     <div className="label-box">
                        <label>
                           <input
                              type="checkbox"
                              value="Architecture and urban spaces"
                              onChange={e => setArchitectureandurbanspaces(e.target.checked)}
                              checked={architectureandurbanspaces}
                           />
                           <div className="span-icon-box">
                              <span className="span-icon">
                                 <ArchitectureIcon />
                              </span>
                              <span className="span-text"> Architecture &#38; Urban Spaces</span>
                           </div>
                        </label>
                     </div>
                     <div className="label-box">
                        <label>
                           <input type="checkbox" value="Food" onChange={e => setFood(e.target.checked)} checked={food} />
                           <div className="span-icon-box">
                              <span className="span-icon">
                                 <FoodIcon />
                              </span>
                              <span className="span-text">Food</span>
                           </div>
                        </label>
                     </div>
                     <div className="label-box">
                        <label>
                           <input type="checkbox" value="Sightseeing" onChange={e => setSightseeing(e.target.checked)} checked={sightseeing} />
                           <div className="span-icon-box">
                              <span className="span-icon">
                                 <SightseeingIcon />
                              </span>
                              <span className="span-text">Sightseeing</span>
                           </div>
                        </label>
                     </div>
                     <div className="label-box">
                        <label>
                           <input
                              type="checkbox"
                              value="Sports and activites"
                              onChange={e => setSportsandactivites(e.target.checked)}
                              checked={sportsandactivites}
                           />
                           <div className="span-icon-box">
                              <span className="span-icon">
                                 <SportsIcon />
                              </span>
                              <span className="span-text"> Sports &#38; Activities</span>
                           </div>
                        </label>
                     </div>
                     <div className="label-box">
                        <label>
                           <input type="checkbox" value="Kids" onChange={e => setKids(e.target.checked)} checked={kids} />
                           <div className="span-icon-box">
                              <span className="span-icon">
                                 <KidsIcon />
                              </span>
                              <span className="span-text"> Kids</span>
                           </div>
                        </label>
                     </div>
                     <div className="label-box">
                        <label>
                           <input
                              type="checkbox"
                              value="Zoos and animals"
                              onChange={e => setZoosandanimals(e.target.checked)}
                              checked={zoosandanimals}
                           />
                           <div className="span-icon-box">
                              <span className="span-icon">
                                 <ZoosIcon />
                              </span>
                              <span className="span-text">Zoos &#38; Animals</span>
                           </div>
                        </label>
                     </div>
                  </div>
               </div>
            </div>
            <button>Discover Now</button>
            <p>{errormessage}</p>
         </form>
      </>
   );
}
