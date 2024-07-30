import { NavLink } from 'react-router-dom';
import '../styles/header.css';
import LogoArgentBank from '../assets/argentBankLogo.png';

export default function Header() {
    return (
        <div>
            <nav className="main-nav">
                <NavLink className="main-nav-logo" href="./index.html">
                    <img
                        className="main-nav-logo-image"
                        src={LogoArgentBank}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>
                <div>
                    <NavLink className="main-nav-item" href="./sign-in.html">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </NavLink>
                </div>
            </nav>
        </div>
    );
}
