//import { useState } from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getAllClaims } from "../../data/ClaimsData";
import ClaimsRow from "./ClaimsRow";
import "./ClaimsTransaction.css";

const ClaimsTable = (props) => {
    
    const [SearchParams, setSearchParams] = useSearchParams();

    const claims = getAllClaims();
    console.log(claims);
    const allClaims = claims.map (claim => claim.claim_number);
    console.log(allClaims);
    //const [selectedClaim, setSelectedClaim] = useState(allClaims[0]);
    //const [claimIndex, setClaimIndex] = useState(0);
    //const clicked_claim = allClaims[claimIndex];
    //console.log(clicked_claim);
    const allStatuscodes = claims.map( claim => claim.status_code);
    console.log(allStatuscodes);

    useEffect(() => {
        if(props.SearchClaim !== "") {
            console.log("Searching for", props.SearchClaim)
        }
    }, [props.SearchClaim]);

    const uniqueStatuscodes = [...new Set(allStatuscodes)];
    const uniqueStatuscodes1 =[...uniqueStatuscodes, "All"]
    console.log(uniqueStatuscodes1);
    
    
    const [selectedStatuscode, setSelectedStatuscode] =  useState(uniqueStatuscodes1[0]);
    
    useEffect( () => {
        const statuscode = SearchParams.get("statuscode");
        if (statuscode !== selectedStatuscode) {
            setSelectedStatuscode(statuscode);
        }
    }, []);
    const changeStatuscode = (event) => {
        const option = event.target.options.selectedIndex;
        setSelectedStatuscode(uniqueStatuscodes1[option]);
        setSearchParams({ "statuscode" : uniqueStatuscodes1[option]});
    }
    return ( <div>
        { props.SearchClaim === "" &&
        <div className="claimStatusSelector">
          <label>Claim Status  </label>
          <select onChange={changeStatuscode}>
            
           {uniqueStatuscodes1.map (statuscode => <option key={statuscode} value={statuscode}>{statuscode}</option>)}
          </select>
        </div>}
        <table className="claimsTable">
            <thead>
            
                <tr>
                    <th>Claim Number</th>
                    <th>Claim Date</th>
                    <th>Claim Amount</th>
                    <th>Claim Type</th>
                    <th>Claim Status</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                
                claims.map((claim, index) => {
                   return(
                    ((props.SearchClaim === "" && (claim.status_code === selectedStatuscode || selectedStatuscode === "All")) 
                      || (props.SearchClaim !== "" && claim.claim_number === props.SearchClaim)
                   
                   ) && (
                   <ClaimsRow setSelectedClaim={props.setSelectedClaim} 
                   claim={claim}
                    key={index} claimnumber={claim.claim_number} claimdate={claim.claim_date}
                    claimamount={claim.claim_amount} claimtype={claim.claim_type} 
                    claimstatus={claim.status_code}
                     />
                    
                   ))
                })}
                
                
                 {
                 /*
                 claims
                 .filter (claim => claim.claim_number === clicked_claim)
                 .map((claim, index) => {
                   return (
                   <ClaimsRow  setSelectedClaim={props.setSelectedClaim} claim={claim} key={index} claimnumber={claim.claim_number} claimdate={claim.claim_date}
                    claimamount={claim.claim_amount} claimtype={claim.claim_type} 
                    claimstatus={claim.status_code}
                     />
                    
                   )
                })
            */
            }
            </tbody>
        </table>
        </div>
    );
};
export default ClaimsTable;