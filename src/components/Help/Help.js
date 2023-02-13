const Help = () =>{
return (
<>
    <h3> Status Codes for Claims</h3>
    <br/>
    <p style={{textAlign:"left"}}>
    <li> 0 - A new claim which has not received initial assessment</li>
     <br/>
    <li> 1 - A claim has been assesessed and being worked on</li>
    <br/>
    <li> 2 - A claim has been rejected</li>
    <br/>
    <li> 3 - A claim has been accepted and is awaiting payment</li>
    <br/>
    <li> 4 - A claim has been accepted and paid</li>
    <br/>
    <li> 5 - A claim has too high value to fit within the process and is passed to main system for processing</li>
    </p>
 </>);
}
export default Help;