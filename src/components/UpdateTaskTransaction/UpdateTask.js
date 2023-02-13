import { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import { updateClaimTask } from "../../data/ClaimsData";

const UpdateTask = (props) =>
{

const params = useParams();
useEffect ( () => {
    if ( params.upclNo1 != null && params.upclNo1 !== props.SearchClaim){
        props.setSearchClaim(params.upclNo1);
    }
}, [params]);

const [message, setMessage] = useState("");
//const initialUpdateTaskState ={taskdescription : props.taskdescription, taskstatus : props.claim.taskStatus};
const initialUpdateTaskState = {taskdescription: "", taskstatus:""}
/*
state = {claimNumber : "", taskNumber :"", taskDescription :"",taskStatus:""}

*/
const formReducer = (state, data) => {
    return{...state, [data.field] : data.value}
}
//const [statefulVariable, setterFunction] = useReducer(reducerFunction, initialValue)
const [updateTask, dispatch] = useReducer(formReducer, initialUpdateTaskState);

const handleChange = (event) => {
    //event.target.id = the field
    //event.target.value = the value
    dispatch({field : event.target.id, value : event.target.value})
}

const handleSubmit = (event) => {
    event.preventDefault();
    setMessage("Saving ...")
    console.log ("params.upclNo1", params.upclNo1);
    console.log("params.task1", params.task1);
    console.log("updateTask", updateTask);
    updateClaimTask (params.task1, updateTask)
    
        .then ( response => {
            if (response.status === 200) {
                setMessage("Task updated with id" + params.task1);
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
    <form className="updateClaimsForm" onSubmit={handleSubmit}>
    <div className="container">
    <h2>Update Task Form</h2>
    <label htmlFor="claimNumber">Claim Number</label>
    <input type="text" id="claimNumber" value={params.upclNo1} disabled={true}></input>
    <label htmlFor="policyNumber">Policy Number</label>
    <input type="text" id="taskNumber" value={params.task1} disabled={true} />
    <br/>
    <label htmlFor="taskDescription">Task Description</label>
    <input type="text" id="taskdescription" value={updateTask.taskdescription} onChange = {handleChange} />
    <br/>
    <label htmlFor="taskStatus">Task Status</label>
    <input type="text"  id="taskstatus" value={updateTask.taskstatus} onChange={handleChange} />
    <br/>
    
    <button type="submit">Save</button>
    <div>{message} </div>
    </div>
</form>


 )
}
export default UpdateTask;
