const ClaimDetail=(props) => {
    return(
    <table className="claimsTable">
    <tbody>
    <tr>
       <td>Claim Number</td>
       <td>{props.claim.claim_number}</td>
    </tr>
    <tr>
       <td>Claim Date</td>
       <td>{props.claim.claim_date}</td>
    </tr>
    <tr>
      <td>Policy Number</td>
      <td>{props.claim.policy_number}</td>
    </tr>
    <tr>
      <td>Claim Amount</td>
      <td> {props.claim.claim_amount}</td>
    </tr>

    <tr>
      <td> Status Code</td>
      <td>{props.claim.status_code}</td>
    </tr>
    <tr>
      <td>Claim Type</td>
      <td>{props.claim.claim_type}</td>
    </tr>
    </tbody>
   </table>);
}
export default ClaimDetail;
