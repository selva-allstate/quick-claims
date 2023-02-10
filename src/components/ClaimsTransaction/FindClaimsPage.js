import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Search from "../Search/Search";
import ClaimDetail from "./ClaimDetail";
import ClaimsTable from "./ClaimsTable";

const FindClaimsPage = (props) =>
{

const params = useParams();
useEffect ( () => {
    if ( params.claimNo != null && params.claimNo !== props.SearchClaim){
        props.setSearchClaim(params.claimNo);
    }
}, [params]

);
return(
    <>
       <Search SearchClaim = {props.SearchClaim} setSearchClaim = {props.setSearchClaim}/>
       
       <ClaimsTable setSelectedClaim={props.setSelectedClaim} SearchClaim={props.SearchClaim}/>
     {
     /*
      {props.SelectedClaim != null && params.claimNo !=null} && <ClaimDetail claim={props.SelectedClaim} />
     */
     }
    </>
);
}
export default FindClaimsPage;