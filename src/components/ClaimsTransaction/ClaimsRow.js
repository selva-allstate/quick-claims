import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ClaimsRow = (props) =>{
    const navigate = useNavigate();
    const [localUpdateClaim, setlocalUpdateClaim] = useState("");
     const click = () =>
     {
      //props.setSelectedClaim(props.claim);
        props.setSelectedClaim(props.claim);
        console.log("Setting Props.claim", props.claim)
     }
     const update = () =>
     {
        setlocalUpdateClaim(props.claimnumber);
        props.setSelectedClaim(props.claim);
        navigate(`/updateclaim/${props.claimnumber}`);
     }
     const viewcomment = () =>
     {
        props.setSelectedClaim(props.claim);
        navigate(`/updateclaim/${props.claimnumber}/task`)
     }
    return(
        <tr key ={props.claimnumber}>
            <td>{props.claimnumber}</td>
            <td>{props.claimdate}</td>
            <td>{props.claimamount}</td>
            <td>{props.claimtype}</td>
            <td>{props.claimstatus}</td>
            <td><button onClick = {click }>View</button></td>
            <td>{(props.claimstatus !== 2 && props.claimstatus !== 4 ) && <button onClick = {update}> Edit </button>}</td>
            <td><button onClick = {viewcomment}>View</button> </td>
        </tr>

    );
};
export default ClaimsRow;