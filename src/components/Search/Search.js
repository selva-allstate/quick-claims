import { useState } from "react";

const Search = (props) => {
    const [localSearchClaim, setlocalSearchClaim] = useState("");
    const [valid,setValid] = useState(true);
    const [touched,setTouched] = useState(false);
   
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
    }
    return <div className="searchBox">
        <form onSubmit={doSearch}>
            <label htmlFor ="claimNumber"> Claim Number</label>
            <input onChange={handleChange} value={localSearchClaim} id="claimNumber" type="text" 
                   style={{border: valid ? "2px solid #000" : "2px solid #f00"}}
            />
            <button type="submit" disabled={!valid || !touched}>Search</button>
        </form>
    </div>
}
export default Search;