import {Link} from 'react-router-dom';

const Menu = (props) => {
     
    return (
    <div>
        <h1> Quick Claims Application</h1>
        <ul className="nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/addclaim" >New Claim </Link> </li>
            <li><Link to="/findclaim">Search Claim</Link></li>
        </ul>
    </div>);
}
export default Menu;