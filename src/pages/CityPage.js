import React from "react";
import Aarhus from "../images/aarhus.png";
import Aalborg from "../images/aalborg.png";
import Copenhagen from "../images/copenhagen.png";
import Odense from "../images/odense.png";
import Logo from "../images/visitdanmarklogo.png";
import { NavLink } from "react-router-dom";

export default function CityPage() {
   return (
      <div className="container">
         <div className="citypage">
            <div>
               <h1>
                  Where is your <br></br>next <br></br>adventure?
               </h1>
            </div>

            <div className="places">
               <img src={Aalborg} alt="Aalborg" />
               <h2>Aalborg</h2>
            </div>

            <div className="places">
               <NavLink to="/filter">
                  <img src={Aarhus} alt="Aarhus" />
                  <h2>Aarhus</h2>
               </NavLink>
            </div>
            <div className="places">
               <img src={Copenhagen} alt="Copenhagen" />
               <h2>Copenhagen</h2>
            </div>
            <div className="places fix">
               <img src={Odense} alt="Odense" />
               <h2>Odense</h2>
            </div>
            <div className="findplace">
               <p>Find Places near me</p>
            </div>
            <div className="svg-logo">
               <img src={Logo} alt="Logo" />
            </div>
         </div>
      </div>
   );
}
