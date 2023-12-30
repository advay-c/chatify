import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className='navbar-text'>
                <Link className='navbar-element' href="#">Home</Link>
                <Link className='navbar-element' href="#">About</Link>
                <Link className='navbar-element' href="#">Add friend</Link>
                <Link className='navbar-element' href="/chat">Chat</Link> 
                <Link className='navbar-element' href="#">Sign In</Link>
                <Link className='navbar-element' href="#">Sign Up</Link>
            </ul>
        </nav>
    );
};

export default Navbar;