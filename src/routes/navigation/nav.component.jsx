import './nav.style.scss'
import { Link,Outlet } from 'react-router-dom'

import {ReactComponent as SupLogo} from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <>
        <div className="navigation">
            <Link className="logo-container" to='/'>
                <SupLogo/>
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to='/'>HOME</Link>
                <Link className="nav-link" to='login'>LOGIN</Link>
            </div>         
        </div>
        <Outlet/>
    </>
  )
}

export default Navbar