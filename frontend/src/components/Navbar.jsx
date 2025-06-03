import {Link} from 'react-router-dom'
import { FaCalendarAlt, FaBars, FaBell, FaUserCircle, FaPlus, FaSearch } from 'react-icons/fa';
import { FiGrid } from 'react-icons/fi';

const Navbar = () => {
    return (
    <nav>
        <ul>
            <li><Link to="/student/home">Home</Link></li>
            <li><Link to="/student/calendar">Calendar</Link></li>
        </ul>
    </nav>
    );
}

export default Navbar
