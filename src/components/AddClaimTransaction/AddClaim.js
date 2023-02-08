import { useState } from 'react';
import { useReducer } from 'react';
import { addNewClaim } from '../../data/ClaimsData';
import './AddClaim.css';

const AddClaim = () =>{

    const [message, setMessage] = useState("");

    const initialNewClaimState ={policyNumber : "", customerName :"", claimAmount :"0",
    claimDate : new Date().toISOString().slice(0,10),claimReason :"", statusCode:"0", claimType:"", animalType:"",
    animalBreed:"", vehicleMake:"", vehicleModel:"", vehicleManyear:"",propertyAddress:"", anyotherDetails:""}
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
        addNewClaim(newClaim)
            .then ( response => {
                if (response.status === 200) {
                    setMessage("New Transaction added with id" + response.data.claimNumber);
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
        <h2>New Claim Form</h2>
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
export default AddClaim;