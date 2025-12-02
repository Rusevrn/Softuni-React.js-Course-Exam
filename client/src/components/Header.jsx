import { useState } from "react"
import { Link } from "react-router"


function Header() {
    const [active, setActive] = useState('/');

    return (
        <header className="header-area header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            <Link to={'/'} className="logo">
                                <img src="assets/images/logo.png" alt="" style={{ width: '158px' }} />
                            </Link>
                            <ul className="nav">
                                <li>
                                    <Link to={'/'} className={active === '/' ? "active" : undefined}
                                        onClick={() => setActive('/')}>Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/catalog'} className={active === '/catalog' ? "active" : undefined}
                                        onClick={() => setActive('/catalog')}>Catalog
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/contact-us'} className={active === '/contact-us' ? "active" : undefined}
                                        onClick={() => setActive('/contact-us')}>Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/login'} onClick={() => setActive('unset')}>Sign In</Link>
                                </li>
                            </ul>
                            <a className='menu-trigger'>
                                <span>Menu</span>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header