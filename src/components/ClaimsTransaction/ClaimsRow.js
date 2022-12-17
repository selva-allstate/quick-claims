
const ClaimsRow = (props) =>{
     const click = () =>
     {
      //props.setSelectedClaim(props.claim);
        props.setSelectedClaim(props.claim);
     }

    return(
        <tr key ={props.claimnumber}>
            <td>{props.claimnumber}</td>
            <td>{props.claimdate}</td>
            <td>{props.claimamount}</td>
            <td>{props.claimtype}</td>
            <td>{props.claimstatus}</td>
            <td><button onClick = {click }>Click</button></td>
        </tr>

    );
};
export default ClaimsRow;