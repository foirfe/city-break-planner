import Form from "../components/Form";
import Logo from "../images/visitdanmarklogo.png";

export default function FilterPage() {
   return (
      <div className="filterpage">
         <h1>
            What would you like to <span className="color">experience?</span>
         </h1>
         <h2>Activites</h2>
         <Form />
         <img className="logo" src={Logo} alt="Logo" />
      </div>
   );
}
