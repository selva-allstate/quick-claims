import {Link} from 'react-router-dom';

const Menu = (props) => {
     
    return (
    <div>
        <h1> <Link to="/">Quick Claims Application</Link> </h1>
        <ul className="nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/addclaim" >New Claim </Link> </li>
            <li><Link to="/searchclaim">Search Claim</Link></li>
            <li><Link to="/searchpolicy">Search Policy</Link></li>
            <li><Link to= "/help">Help</Link></li>
        </ul>
    </div>);
}
export default Menu;