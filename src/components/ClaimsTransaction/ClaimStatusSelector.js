import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStatuscodes } from "../../data/ClaimsData";



const ClaimStatusSelector = (props) =>
{
    useEffect ( () => {
        loadClaimStatus();
    }, [] );

    const [uniqueStatuscodes, setUniqueStatuscodes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const statuscodeInRedux = useSelector( state => state.statuses);
    const timeOfLastFetch = useSelector( state => state.lastFetch);
    const dispatch = useDispatch();

    const loadClaimStatus = () =>
    {
        if (statuscodeInRedux.length > 0 && new Date().getTime -timeOfLastFetch < 60000){
            console.log("using status codes from Redux");
            setUniqueStatuscodes(statuscodeInRedux);
            setIsLoading(false);
        }
        else {
            console.log("Getting Status Codes via REST");
            getStatuscodes()
            .then ( response => {
                if (response.status === 200) {
                    setUniqueStatuscodes(response.data);
                    setIsLoading(false);
                    dispatch({type : "updateStatuses", value : response.data })
                }
                else {
                    console.log("Something went wrong");
                }
            })
            .catch( error => {
                console.log("Something went wrong", error);
            })
        }
        if (props.value != null) {
            setSelectedStatuscode(props.value);
        }
    }

    const [selectedStatuscode, setSelectedStatuscode] = useState("");


    const changeStatuscode = (event) => {
        const statuscode = event.target.value;
        props.changeStatuscode(statuscode);
    }


return (
    <div className="claimStatusSelector">
    <label>Claim Status  </label>
    <select onChange={changeStatuscode} defaultValue={selectedStatuscode}>
     <option value="" disabled={true}> ---select---</option>
     {uniqueStatuscodes.map (statuscode => <option key={statuscode} value={statuscode}>{statuscode}</option>)}
    </select>
  </div>
)

}
export default ClaimStatusSelector;