import { NavLink } from 'react-router-dom';
import LogoArgentBank from '../assets/argentBankLogo.png';

export default function Header() {
    return (
        <div>
            <nav className="main-nav">
                <NavLink className="main-nav-logo" to="/">
                    <img
                        className="main-nav-logo-image"
                        src={LogoArgentBank}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>
                <div>
                    <NavLink className="main-nav-item" to="/Login">
                        <i className="fa fa-user-circle"></i>
                        &nbsp;Sign In
                    </NavLink>
                </div>
            </nav>
        </div>
    );
}
