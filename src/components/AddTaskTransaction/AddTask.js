import { useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addNewTask, getAllTasksForClaimNo } from "../../data/ClaimsData";
import TaskRow from "./TaskRow";

const AddTask = (props) =>{
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const [updateclaimNo, setUpdateClaimNo] = useState("");
    const [taskNo, setTaskNo] = useState("");
    const params = useParams();
    const navigate = useNavigate();

    const updatetask = () =>
    {
       
       navigate(`/updateclaim/${props.claimnumber}/task/${props.tasknumber}`)
    }

    useEffect ( () => 
    {
        if ( params.upclNo1 != null && params.upclNo1 !== "")
        {
            setUpdateClaimNo(params.upclNo1);
            props.setSearchClaim(params.upclNo1);
            setErrorMessage(null);
            setIsLoading(true);
            getAllTasksForClaimNo(params.upclNo1)
            .then ( response => {
                if (response.status === 200) {
                 setIsLoading(false);
                 setTasks(response.data);
                 console.log("Tasks", response.data);
                }
            })
            .catch(error => {
                if (error.message ="Request failed with status code 404"){
                    setErrorMessage("Tasks not found for the claim Number");
                }
                else {
                    setErrorMessage("Something went wrong", error);
                    console.log("Something went wrong", error);
                }
            })
        }
    }, [params]
    );

    const [message, setMessage] = useState("");

    const initialNewTaskState ={ taskDescription : "", taskStatus :""}
    /*
    state = {taskDescription : "", taskStatus :""}
    */
    const formReducer = (state, data) => {
        return{...state, [data.field] : data.value}
    }
    //const [statefulVariable, setterFunction] = useReducer(reducerFunction, initialValue)
    const [newTask, dispatch] = useReducer(formReducer, initialNewTaskState);

    const handleChange = (event) => {
        //event.target.id = the field
        //event.target.value = the value
        dispatch({field : event.target.id, value : event.target.value})
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        setMessage("Saving ...")
        addNewTask(params.upclNo1, newTask)
            .then ( response => {
                if (response.status === 200) {
                    setMessage("New Transaction added with id" + response.data.taskNumber);
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
        <>
        <form className="addTaskForm" onSubmit={handleSubmit}>
        <div className="container">
        <h2>New Task Form</h2>
        <label htmlFor="claimNumber">Claim Number</label>
        <input type="text" id="claimNumber" value={props.claim.claimNumber} disabled ={true} />
        <br/>
        <label htmlFor="taskDescription">Task Description</label>
        <input type="text" id="taskDescription" value={newTask.taskDescription} onChange = {handleChange} />
        <br/>
        <label htmlFor="taskStatus">Task Status</label>
        <input type="text"  id="taskStatus" value={newTask.taskStatus} onChange={handleChange} />
        <br/>
        <button type="submit">Save</button>
        <div>{message} </div>
        </div>
        </form>
        {isLoading && errorMessage && <p style={{textAlign:"center"}}>{errorMessage}</p>}
         {!isLoading &&
         <table className="claimsTable">
         <thead>
         
             <tr>
                 <th>Task Number</th>
                 <th>Task Description</th>
                 <th>Task Status</th>
                 <th></th>
             </tr>
         </thead>
         <tbody>
            {
            tasks 
                .map((task, index) => {
                    return(
                    
                    <TaskRow key ={index} task={task} tasknumber = {task.taskNumber}
                    taskdescription = {task.taskDescription} taskstatus = {task.taskStatus}
                    claimnumber = {updateclaimNo} />
                    
                    )
                    
                })
            }
         </tbody>
         </table>
        }
        </>
     )
}

export default AddTask;
