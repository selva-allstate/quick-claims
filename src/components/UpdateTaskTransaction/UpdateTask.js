import { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import {  updateClaimTask } from "../../data/ClaimsData";

const UpdateTask = (props) => 
{
    const [taskno1, setTaskno1] = useState("");
    const params = useParams();
    useEffect ( () => {
     if ( params.upclNo2 != null && params.upclNo2 !== props.SearchClaim){
          props.setSearchClaim(params.upclNo2);
        }
        if (params.task1!=null && params.task1 !== "" )
        {
            setTaskno1(params.task1);
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

    const handleSubmit = (event) => 
        {
            event.preventDefault();
            setMessage("Saving ...");
            console.log ("params.upclNo2", params.upclNo2);
            console.log("params.task1", params.task1);
            console.log("updateTask", updateTask);
            updateClaimTask (taskno1, updateTask)
               .then ( response => {
                    if (response.status === 200) {
                        setMessage("Task updated ");
                        console.log(response);
                    }
                    else
                    {
                    setMessage("Something went wrong - status code was " + response.status);
                    }
                })
            .catch(error =>{
                setMessage("Something went wrong" + error);})            
        } 

 return(
    <form className="updateClaimsForm" onSubmit={handleSubmit}>
    <div className="container">
    <h2>Update Task Form</h2>
    <label htmlFor="claimNumber">Claim Number</label>
    <input type="text" id="claimNumber" value={params.upclNo2} disabled={true}></input>
    <label htmlFor="policyNumber">Policy Number</label>
    <input type="text" id="taskNumber" value={taskno1} disabled={true} />
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
