import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function FilterPage(){
    const navigate = useNavigate();
    const [checked, setChecked] = useState(false);
    
    useEffect(()=>{
        function handleChecked(){
            const checkbox = document.querySelectorAll("input[type='checkbox']")
            const checkboxname = checkbox[0].name;
            console.log(checkboxname);
        if(localStorage.getItem(checkboxname)){
        setChecked(true)
    }   else {
        setChecked(false)
    }
        }
        handleChecked();
    },[])
    
    function handleChange(event){
        const property = event.target.name;
        console.log(event.target.checked);
        if(event.target.checked){
            localStorage.setItem(property, true)
        } else {
            localStorage.removeItem(property)
        }
    }
        function submitEvent(event){
            event.preventDefault();
            navigate("/resultater");
                }
    
        return(
            <div className="filterpage">
            <h1>Filtrering</h1>
            <form onSubmit={submitEvent}>
                <label>Parks & Garden</label>
                    <input type="checkbox" name="Parks and garden" onChange={handleChange} checked={checked}></input>
                    <label>Museum</label>
                    <input type="checkbox" name="Museum" onChange={handleChange} checked={checked}></input>
                    <button>Discover now</button>
            </form>
            </div>
        );
    
}