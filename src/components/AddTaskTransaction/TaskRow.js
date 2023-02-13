import { useNavigate } from "react-router-dom";

const TaskRow = (props) =>
{
    const navigate = useNavigate();
    const updatetask = () =>
    {
       
       navigate(`/updateclaim/${props.claimnumber}/task/${props.tasknumber}`)
    }
return(
    <tr key ={props.tasknumber}>
            <td>{props.tasknumber}</td>
            <td>{props.taskdescription}</td>
            <td>{props.taskstatus}</td>
            
           
            <td><button onClick = {updatetask}>Edit</button> </td>
        </tr>

);
}
export default TaskRow;