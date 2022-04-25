import { useEffect, useState } from "react"

export default function HomePage(){
    const [day, setDay] = useState("monday");
    const [timeofday, setTimeofday] = useState("morning");
   
    useEffect(()=>{
    function handleWeekday(){
        const date = new Date();
        const weekday = date.getDay();
        if(weekday === 0)
        setDay("sunday");
        else if(weekday === 1)
        setDay("monday");
        else if(weekday === 2)
        setDay("tuesday");
        else if(weekday === 3)
        setDay("wednesday");
        else if(weekday === 4)
        setDay("thursday");
        else if(weekday === 5)
        setDay("friday");
        else if(weekday === 6)
        setDay("saturday");
    }; 
    function handleTimeOfDay(){
        const date = new Date();
        const timenow = date.getHours();
        if(timenow > 10)
        setTimeofday("morning");
        if(timenow > 11)
        setTimeofday("afternoon");
        if(timenow > 17 )
        setTimeofday("evening");
    }
    handleWeekday();
    handleTimeOfDay();
    })
   
    
   
    return (
        <div className="homepage">
            <h1>Just another {day} {timeofday} in Denmark.</h1>
        </div>
    )
}