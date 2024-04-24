import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="navBar">
            <h1 className="welcome">Puppybowl 2024</h1>
            <div className='navLink'>
                <Link  to='/'>Home</Link>
                <Link to='/newplayer'>Add New Player</Link>
            </div>
        </div>
    )
}