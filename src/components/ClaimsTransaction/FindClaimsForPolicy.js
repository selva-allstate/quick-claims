import { useEffect } from "react";
import { useParams } from "react-router-dom";
import SearchPolicy from "../Search/SearchPolicy";
import ClaimDetail from "./ClaimDetail";
import ClaimsTable from "./ClaimsTable";


const FindClaimsForPolicy = (props) =>
{

const params = useParams();

useEffect ( () => {
    console.log("First SearchPolicyClaim", props.searchPolicyClaim );
    console.log("First Params", params.srchpol);
    //if ( params.srchpol != null && params.srchpol !== props.SearchPolicyClaim){
        if (params.srchpol != null){
        console.log("SearchPolicyClaim", props.searchPolicyClaim );
        console.log("Params", params.srchpol);
        props.setSearchPolicyClaim(params.srchpol);
    }
}, [params]

);
return(
    <>
     {console.log("1st props.searchPolicyClaim", props.searchPolicyClaim)};
       <SearchPolicy searchPolicyClaim = {props.searchPolicyClaim} setSearchPolicyClaim = {props.setSearchPolicyClaim}/>
       {console.log("props.searchPolicyClaim", props.searchPolicyClaim)};
       <ClaimsTable searchPolicyClaim = {props.searchPolicyClaim} setSearchPolicyClaim = {props.setSearchPolicyClaim}
       setSelectedClaim={props.setSelectedClaim} />
     
       {props.selectedClaim != null && <ClaimDetail claim={props.selectedClaim} />}
    
      {
     /*
      {props.SelectedClaim != null && params.srchpol !=null} && <ClaimDetail claim={props.SelectedClaim} />
     */
      }
     
    </>
);
}
export default FindClaimsForPolicy;