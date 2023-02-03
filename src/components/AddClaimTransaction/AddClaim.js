import { useState } from 'react';
import { useReducer } from 'react';
import { addNewClaim } from '../../data/ClaimsData';
import './AddClaim.css';

const AddClaim = () =>{

    const [message, setMessage] = useState("");

    const initialNewClaimState ={policyNumber : "", claimNumber :"", claimAmount :"0",
    claimDate : new Date().toISOString().slice(0,10), statusCode:"0", claimType:""}
    /*
    state = {policyNumber : "", claimNumber :"", claimAmount :"0",
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
                    setMessage("New Transaction added with id" + response.data.id);
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
        <h2>New Claim Form</h2>
        <label htmlFor="policyNumber">Policy Number</label>
        <input type="text" id="policyNumber" value={newClaim.policyNumber} onChange ={handleChange} />
        <br/>
        <label htmlFor="claimNumber">Claim Number</label>
        <input type="text" id="claimNumber" value={newClaim.claimNumber} onChange = {handleChange} />
        <br/>
        <label htmlFor="claimAmount">Claim Amount</label>
        <input type="text"  id="claimAmount" value={newClaim.claimAmount} onChange={handleChange} />
        <br/>
        <label htmlFor="claimDate">Claim Date</label>
        <input type="date"  id="claimDate" value={newClaim.claimDate} onChange={handleChange} />
        <br/>
        <label htmlFor="statusCode">Status Code</label>
        <input type="text"  id="statusCode" value={newClaim.statusCode} onChange={handleChange} />
        <br/>
        <label htmlFor="claimType">Claim Type</label>
        <input type="text"  id="claimType" value={newClaim.claimType} onChange={handleChange} />
        <br/>
        <button type="submit">Save</button>
        <div>{message} </div>
  </form>
  

     )
}
export default AddClaim;