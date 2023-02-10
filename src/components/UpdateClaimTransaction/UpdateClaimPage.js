import { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import { updateClaimData } from "../../data/ClaimsData";

const UpdateClaimPage = (props) =>
{

const params = useParams();
useEffect ( () => {
    if ( params.upclNo != null && params.upclNo !== props.SearchClaim){
        props.setSearchClaim(params.upclNo);
    }
}, [params]);

const [message, setMessage] = useState("");
const initialNewClaimState ={claimNumber : props.claim.claimNumber, policyNumber : props.claim.policyNumber, customerName : props.claim.customerName, claimAmount : props.claim.claimAmount,
claimDate : props.claim.claimDate, claimReason :props.claim.claimReason, statusCode:props.claim.statusCode, claimType:props.claim.claimType, animalType:props.claim.animalType,
animalBreed:props.claim.animalBreed, vehicleMake:props.claim.vehicleMake, vehicleModel:props.claim.vehicleModel, vehicleManyear:props.claim.vehicleManyear,
propertyAddress:props.claim.propertyAddress, anyotherDetails:props.claim.anyotherDetails}
/*
state = {policyNumber : "", customerName :"", claimAmount :"0",
claimDate : new Date().toISOString().slice(0,10), statusCode:"0", claimType:""}
data = {field : "claimAmount", value : "300" }
*/
const formReducer = (state, data) => {
    return{...state, [data.field] : data.value}
}
//const [statefulVariable, setterFunction] = useReducer(reducerFunction, initialValue)
const [newClaim, dispatch] = useReducer(formReducer, initialNewClaimState);

const handleChange = (event) => {
    //event.target.id = the field
    //event.target.value = the value
    dispatch({field : event.target.id, value : event.target.value})
}

const handleSubmit = (event) => {
    event.preventDefault();
    setMessage("Saving ...")
    updateClaimData(params.upclNo,newClaim)
        .then ( response => {
            if (response.status === 200) {
                setMessage("Claim updated with id" + response.data.claimNumber);
                console.log(response);
            }
            else
            {
            setMessage("Something went wrong - status code was " + response.status);
            }
        })
    .catch(error =>{
        setMessage("Something went wrong" + error);})
 // {
 //   event.preventDefault()
 // };

}



return(
    <form className="addClaimsForm" onSubmit={handleSubmit}>
    <div className="container">
    <h2>Update Claim Form</h2>
    <label htmlFor="claimNumber">Claim Number</label>
    <input type="text" id="claimNumber" value={newClaim.claimNumber} disabled={true}></input>
    <label htmlFor="policyNumber">Policy Number</label>
    <input type="text" id="policyNumber" value={newClaim.policyNumber} onChange ={handleChange} />
    <br/>
    <label htmlFor="customerName">Customer Name</label>
    <input type="text" id="customerName" value={newClaim.customerName} onChange = {handleChange} />
    <br/>
    <label htmlFor="claimAmount">Claim Amount</label>
    <input type="text"  id="claimAmount" value={newClaim.claimAmount} onChange={handleChange} />
    <br/>
    <label htmlFor="claimDate">Claim Date</label>
    <input type="date"  id="claimDate" value={newClaim.claimDate} onChange={handleChange} />
    <br/>
    <label htmlFor="claimReason">Claim Reason</label>
    <textarea rows="2" column="20" id="claimReason" value={newClaim.claimReason} onChange={handleChange} />
    <br/>
    <label htmlFor="statusCode">Status Code</label>
    <input type="text"  id="statusCode" value={newClaim.statusCode} onChange={handleChange} />
    <br/>
    <label htmlFor="claimType">Claim Type</label>
    <input type="text"  id="claimType" value={newClaim.claimType} onChange={handleChange} />
    <br/>
    {(newClaim.claimType === "PET" || newClaim.claimType === "pet" ||
     newClaim.claimType === "Pet") && 
     <>
     <label htmlFor="animalType">Animal Type </label> 
     <input type="text" id="animalType" value={newClaim.animalType} onChange={handleChange} />
     <br/>
     <label htmlFor="animalBreed">Animal Breed</label>
     <input type="text" id="animalBreed" value={newClaim.animalBreed} onChange={handleChange} />
     <br/> 
     </>}
     {(newClaim.claimType === "MOTOR" || newClaim.claimType === "motor" || 
      newClaim.claimType === "Motor") &&
     <>
     <label htmlFor="vehicleMake"> Vehicle Make</label>
     <input type="text" id="vehicleMake" value={newClaim.vehicleMake} onChange={handleChange}/>
     <br/>
     <label htmlFor="vehicleModel"> Vehicle Model</label>
     <input type="text" id="vehicleModel" value={newClaim.vehicleModel} onChange={handleChange}/>
     <br/>
     <label htmlFor="vehicleManyear"> Vehicle Manufacture Year</label>
     <input type="text" id="vehicleManyear" value={newClaim.vehicleManyear} onChange={handleChange}/>
     <br/>
     </>}
     {(newClaim.claimType === "PROPERTY" || newClaim.claimType === "property" ||
      newClaim.claimType === "Property") &&
     <>
     <label htmlFor="propertyAddress">Property Address</label>
     <input type="text" id="propertyAddress" value={newClaim.propertyAddress} onChange={handleChange} />
     <br/>
     </>}
     <label htmlFor="anyotherDetails"> Any Other Details</label>
     <textarea id="anyotherDetails" value={newClaim.anyotherDetails} onChange={handleChange} />
     <br/>
    <button type="submit">Save</button>
    <div>{message} </div>
    </div>
</form>


 )
}
export default UpdateClaimPage;
