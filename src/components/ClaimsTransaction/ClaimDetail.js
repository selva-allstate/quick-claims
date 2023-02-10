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
      <td>Customer Name</td>
      <td>{props.claim.customerName}</td>
    </tr>
    <tr>
      <td>Policy Number</td>
      <td>{props.claim.policyNumber}</td>
    </tr>
    <tr>
      <td>Claim Amount</td>
      <td>{props.claim.claimAmount}</td>
    </tr>
    <tr>
      <td>Claim Reason</td>
      <td>{props.claim.claimReason}</td>
    </tr>
    {(props.claim.claimType === "PET" || props.claim.claimType === "pet" ||
         props.claim.claimType === "Pet") && 
    <>
    <tr>
      <td>Animal Type</td>
      <td>{props.claim.animalType}</td>
    </tr>
    <tr>
      <td>Animal Breed</td>
      <td>{props.claim.animalBreed}</td>
    </tr>
    </>
    }
    {(props.claim.claimType === "MOTOR" || props.claim.claimType === "motor" ||
         props.claim.claimType === "Motor") && 
    <>
    <tr>
      <td>Vehicle Make</td>
      <td>{props.claim.vehicleMake}</td>
    </tr>
    <tr>
      <td>Vehicle Model</td>
      <td>{props.claim.vehicleModel}</td>
    </tr>
    <tr>
      <td>Vehicle Manufacture Year</td>
      <td>{props.claim.vehicleManyear}</td>
    </tr>
    </>
    }
    {(props.claim.claimType === "PROPERTY" || props.claim.claimType === "Property" ||
         props.claim.claimType === "property") && 
    <>
    <tr>
      <td>Property Address</td>
      <td>{props.claim.propertyAddress}</td>
    </tr>
    </>
    }
    <tr>
      <td> Any Other Details</td>
      <td>{props.claim.anyotherDetails}</td>
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
