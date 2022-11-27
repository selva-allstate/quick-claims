//import { useState } from "react";
import { getAllClaims } from "../../data/ClaimsData";
import ClaimsRow from "./ClaimsRow";
import "./ClaimsTransaction.css";

const ClaimsTable = () => {
    
    const claims = getAllClaims();
    console.log(claims);
    const allClaims = claims.map (claim => claim.claim_number);
    console.log(allClaims);
    //const [selectedClaim, setSelectedClaim] = useState(allClaims[0]);
    return (
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
                {claims.map((claim, index) => {
                   return (
                   <ClaimsRow key={index} claimnumber={claim.claim_number} claimdate={claim.claim_date}
                    claimamount={claim.claim_amount} claimtype={claim.claim_type} 
                    claimstatus={claim.status_code}
                     />
                    
                   )
                })}
                
            </tbody>
        </table>
    );
};
export default ClaimsTable;