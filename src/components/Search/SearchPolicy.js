import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchPolicy = (props) =>{
    const [localSearchPolicy, setlocalSearchPolicy] = useState("");
    const navigate = useNavigate();
    const [valid,setValid] = useState(true);
    const [touched,setTouched] = useState(false);

    const checkValidity = (value) => {
        setValid(value.trim().length > 0);
    }
    const handleChange = (event) =>
    {
      setTouched(true);
      setlocalSearchPolicy(event.target.value);
      checkValidity(event.target.value);
    }
    const doSearch = (event) =>
    {
         event.preventDefault();
         props.setSearchPolicyClaim(localSearchPolicy);
         console.log("Search Term", localSearchPolicy);
         navigate(`/findpolicy/${localSearchPolicy}`);
    }
    const clearForm = () => {
        setlocalSearchPolicy("");
        setTouched(false);
        setValid(true);
        props.setSearchPolicyClaim("");
       // navigate("/findclaim");

    }
    return <div className="searchBox">
    <form onSubmit={doSearch}>
        <label htmlFor ="policyNumber"> Policy Number</label>
        <input onChange={handleChange} value={localSearchPolicy} id="policyNumber" type="text" 
               style={{border: valid ? "2px solid #000" : "2px solid #f00"}}
        />
        <button type="submit" disabled={!valid || !touched}>Search</button>
        <button onClick={clearForm}>Reset</button>
    </form>
    </div>
}
export default SearchPolicy;