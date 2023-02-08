const ClaimDetail=(props) => {
    console.log("claim details", props);
    return(
    <table className="claimsTable">
    <tbody>
    <tr>
       <td>Claim Number</td>
       <td>{props.claim.claimNumber}</td>
    </tr>
    <tr>
       <td>Claim Date</td>
       <td>{props.claim.claimDate}</td>
    </tr>
    <tr>
      <td>Policy Number</td>
      <td>{props.claim.policyNumber}</td>
    </tr>
    
    <tr>
      <td>Claim Amount</td>
      <td> {props.claim.claimAmount}</td>
    </tr>
    <tr>
      <td>Animal Breed</td>
      <td>{props.claim.animalBreed}</td>
    </tr>
    <tr>
      <td> Status Code</td>
      <td>{props.claim.statusCode}</td>
    </tr>
    <tr>
      <td>Claim Type</td>
      <td>{props.claim.claimType}</td>
    </tr>
    </tbody>
   </table>);
}
export default ClaimDetail;
