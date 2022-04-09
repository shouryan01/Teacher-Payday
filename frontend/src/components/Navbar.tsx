import { useLocation } from 'react-router-dom';
import './Navbar.css'

function Navbar(){
    const location = useLocation();

    return (
        <nav className='navbar'>
            <h2>Navbar</h2>
            
        </nav>
    );
}

export default Navbar;