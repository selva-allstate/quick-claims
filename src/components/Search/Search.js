import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = (props) => {
    const [localSearchClaim, setlocalSearchClaim] = useState("");
    const [valid,setValid] = useState(true);
    const [touched,setTouched] = useState(false);
    const navigate = useNavigate();
   
    const checkValidity = (value) => {
        setValid(value.trim().length > 0);
    }
    const handleChange = (event) =>
    {
      setTouched(true);
      setlocalSearchClaim(event.target.value);
      checkValidity(event.target.value);
    }
    const doSearch = (event) =>
    {
         event.preventDefault();
         props.setSearchClaim(localSearchClaim);
         console.log("Search Term", props.SearchClaim);
         navigate(`/findclaim/${localSearchClaim}`);
    }

    const clearForm = () => {
        setlocalSearchClaim("");
        setTouched(false);
        setValid(true);
        props.setSearchClaim("");
        navigate("/findclaim");

    }
    return <div className="searchBox">
        <form onSubmit={doSearch}>
            <label htmlFor ="claimNumber"> Claim Number</label>
            <input onChange={handleChange} value={localSearchClaim} id="claimNumber" type="text" 
                   style={{border: valid ? "2px solid #000" : "2px solid #f00"}}
            />
            <button type="submit" disabled={!valid || !touched}>Search</button>
            <button onClick={clearForm}>Reset</button>
        </form>
    </div>
}
export default Search;