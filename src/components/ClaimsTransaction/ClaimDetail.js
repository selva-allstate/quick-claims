const ClaimDetail=(props) => {
    return(
    <table className="claimTable">
    <tr>
       <td>Claim Number</td>
       <td>{props.claim.claimnumber}</td>
    </tr>
    <tr>
       <td>Claim Date</td>
       <td>{props.claim.claimdate}</td>
    </tr>
   </table>);
}
export default ClaimDetail;
