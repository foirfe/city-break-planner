import { useEffect, useState } from "react";
import LandingPic from "../images/landingpage.png";
import Logo from "../images/visitdanmarklogo.png";
import { NavLink } from "react-router-dom";

export default function HomePage() {
  const [day, setDay] = useState("monday");
  const [timeofday, setTimeofday] = useState("morning");

  useEffect(() => {
    function handleWeekday() {
      const date = new Date();
      const weekday = date.getDay();
      if (weekday === 0) setDay("sunday");
      else if (weekday === 1) setDay("monday");
      else if (weekday === 2) setDay("tuesday");
      else if (weekday === 3) setDay("wednesday");
      else if (weekday === 4) setDay("thursday");
      else if (weekday === 5) setDay("friday");
      else if (weekday === 6) setDay("saturday");
    }
    function handleTimeOfDay() {
      const date = new Date();
      const timenow = date.getHours();
      if (timenow > 10) setTimeofday("morning");
      if (timenow > 11) setTimeofday("afternoon");
      if (timenow > 17) setTimeofday("evening");
    }
    handleWeekday();
    handleTimeOfDay();
  });

  return (
    <div className="content">
      <div className="row">
        <div className="banner">
          <img src={LandingPic} alt="Landing Page Pic" />
          <div className="home">
            <div>
              <h1>
                Just another <br></br>
                {day} <br></br> {timeofday} &ensp;
                <span>
                  in <br></br> Denmark.
                </span>
              </h1>
            </div>
            <div className="btn">
              <NavLink to="/byer">
                <button type="button">Explore Now</button>
                
              </NavLink>
            </div>
            <div className="logoo">
              <img src={Logo} alt="Logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
