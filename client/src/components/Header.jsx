import { Link, useLocation } from "react-router";
import { useUserContext } from "../contexts/UserContext";


function Header() {
    const { user, logoutHandler } = useUserContext();
    const location = useLocation();

    return (
        <header className="header-area header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            <Link to="/" className="logo">
                                <img src="/assets/images/logo.png" alt="" style={{ width: '158px' }} />
                            </Link>
                            <ul className="nav">
                                <li>
                                    <Link to="/" className={location.pathname === '/' ? "active" : undefined}>Home</Link>
                                </li>
                                <li>
                                    <Link to="/catalog" 
                                    className={location.pathname === '/catalog' || location.pathname.startsWith('/details')
                                    ? "active" : undefined}>Catalog</Link>
                                </li>
                                <li>
                                    <Link to="/contact-us" className={location.pathname === '/contact-us' ? "active" : undefined}>Contact Us</Link>
                                </li>
                                <li>
                                    {user &&
                                        <Link className={location.pathname === '/profile' ? "active" : undefined}to="/profile">Profile</Link>
                                    }
                                </li>
                                <li>
                                    {user ?
                                        <Link onClick={logoutHandler}>Sign Out</Link>
                                        :
                                        <Link to="/login">Sign In</Link>
                                    }
                                </li>
                            </ul>
                            <a className="menu-trigger">
                                <span>Menu</span>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;