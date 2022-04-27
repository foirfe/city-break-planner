import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Form(){
    const navigate = useNavigate();
    const [museum, setMuseum] = useState(localStorage.getItem("Museum"));
    const [parksandgardens, setParksandgardens] = useState(localStorage.getItem("Parks and gardens"));
    const [churches, setChurces] = useState(localStorage.getItem("Churches"));

    function handleSubmit(event) {
        event.preventDefault();

        for (const item of event.target.elements) {
            if (item.checked) {
                localStorage.setItem(item.value, true);
            } else {
                localStorage.removeItem(item.value);
            }
        }
        navigate("/results")
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Museum
                    <input type="checkbox" value="Museum" onChange={e => setMuseum(e.target.checked)} checked={museum} />
                </label>
                <label>
                    Parks and Gardens
                    <input type="checkbox" value="Parks and gardens" onChange={e => setParksandgardens(e.target.checked)} checked={parksandgardens} />
                </label>
                <label>
                    Churches
                    <input type="checkbox" value="Churches" onChange={e => setChurces(e.target.checked)} checked={churches} />
                </label>

                <button>Discover</button>
            </form>
        </>
    );
}