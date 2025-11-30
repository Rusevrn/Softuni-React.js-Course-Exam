import { Link } from "react-router"


function Header() {
    return (
        <header className="header-area header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            <Link to={'/'} className="logo">
                                <img src="assets/images/logo.png" alt="" style={{width: '158px'}} />
                            </Link>
                            <ul className="nav">
                                <li>
                                    <Link to={'/'} className="active">Home</Link>
                                </li>
                                <li>
                                    <Link to={'/catalog'}>Catalog</Link>
                                </li>
                                <li>
                                    <Link to={'/details'}>Details</Link>
                                </li>
                                <li>
                                    <Link to={'/contact-us'}>Contact Us</Link>
                                </li>
                                <li>
                                    <Link to={'/'}>Sign In</Link>
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