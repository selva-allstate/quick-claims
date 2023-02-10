import { useEffect, useState } from "react";
import {  useSearchParams } from "react-router-dom";
import { getAllClaims, getAllClaimsForClaimNo, getAllClaimsForPolicyNo, getAllClaimsForStatuscode } from "../../data/ClaimsData";
import ClaimsRow from "./ClaimsRow";
import ClaimStatusSelector from "./ClaimStatusSelector";
import "./ClaimsTransaction.css";

//debugger
const ClaimsTable = (props) => {
    const [claims, setClaims] = useState([]);

    const [SearchParams, setSearchParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (props.searchPolicyClaim !=null && props.searchPolicyClaim !== ""){
            console.log("Searching for 0", props.searchPolicyClaim);
            setIsLoading(true);
            getAllClaimsForPolicyNo(props.searchPolicyClaim)
            .then (response => {
                setIsLoading(false);
                setClaims(response.data);
            })
            .catch(error => {
                console.log("Something went wrong", error);
            })
        }
    },[props.searchPolicyClaim]);

    useEffect(() => {
        if( props.SearchClaim != null && props.SearchClaim !== "") {
            console.log("Searching for", props.SearchClaim);
            setIsLoading(true);

            getAllClaimsForClaimNo(props.SearchClaim)
            .then (response => {
                setIsLoading(false);
                setClaims([response.data]);
                console.log("Searching for 2", response );
                console.log(claims);
            })
            .catch( error => {
                console.log("Something went wrong", error);
            })           
        }
    }, [props.SearchClaim]);

    const loadData = (statuscode) => {
        if (statuscode == null )
        {
        getAllClaims()
        .then (response => {
            if (response.status === 200 ) {
                setIsLoading(false);
                setClaims(response.data);
                console.log("claims", response.data)
;            }
            else {
                console.log("Something went wrong", response.status);
            }
        })
        .catch ( error => {
            console.log("Something went wrong", error);
        })}
        else{
        getAllClaimsForStatuscode(statuscode)
        .then (response => {
            if (response.status === 200 ) {
                console.log(response);
                setIsLoading(false);
                setClaims(response.data);
            }
            else {
                console.log("Something went wrong", response.status);
            }
        })
        .catch ( error => {
            console.log("Something went wrong", error);
        })
    }
    }

    const [selectedStatuscode, setSelectedStatuscode] = useState("");
    useEffect(  () => {
        const statuscode = SearchParams.get("statuscode");
        if (statuscode !== selectedStatuscode && props.SearchClaim === "" 
          )  {
            setSelectedStatuscode(statuscode);
            console.log("Loading", statuscode);
            loadData(statuscode);
        }
    },[SearchParams]);

    const changeStatuscode = (statuscode) => {
        setSearchParams({"statuscode" : statuscode});
    }


    return ( <div>
         {!isLoading && props.SearchClaim === "" && <ClaimStatusSelector changeStatuscode={changeStatuscode}  />}
         {isLoading && <p style={{textAlign:"center"}} >Please wait... loading</p>}
         {!isLoading &&
        <table className="claimsTable">
            <thead>
            
                <tr>
                    <th>Claim Number</th>
                    <th>Claim Date</th>
                    <th>Claim Amount</th>
                    <th>Claim Type</th>
                    <th>Claim Status</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {
                claims 
                .map((claim, index) => {
                   return(    
                   <ClaimsRow setSelectedClaim={props.setSelectedClaim} 
                   claim={claim}
                    key={index} claimnumber={claim.claimNumber} claimdate={claim.claimDate}
                    claimamount={claim.claimAmount} claimtype={claim.claimType} 
                    claimstatus={claim.statusCode}
                    />
                    )
                })
            }    
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
       } 
        </div>
    );
};
export default ClaimsTable;