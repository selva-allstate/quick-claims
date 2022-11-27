//import ClaimDisplay from "./ClaimDisplay";

const ClaimsRow = (claim) => {

    //const [] = useState();
    return(
        <tr key ={claim.claimnumber}>
            <td>{claim.claimnumber}</td>
            <td>{claim.claimdate}</td>
            <td>{claim.claimamount}</td>
            <td>{claim.claimtype}</td>
            <td>{claim.claimstatus}</td>
            <td><button>Click</button></td>
        </tr>

    );
};
export default ClaimsRow;