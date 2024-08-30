import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { LogoutAction } from '../redux/actions/login.action';
import LogoArgentBank from '../assets/argentBankLogo.png';
export default function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector((state) => state.login.token);
    const handleSignOut = () => {
        window.localStorage.removeItem('token');
        dispatch(LogoutAction());
        navigate('/');
    };
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
                    {token ? (
                        <div className="main-nav-container">
                            <span>
                                {/* {firstName}  */}
                                NOM USER
                            </span>
                            <div
                                className="main-nav-item"
                                onClick={handleSignOut}
                            >
                                <i className="fa-solid fa-arrow-right-from-bracket"></i>
                                &nbsp;Sign Out
                            </div>
                        </div>
                    ) : (
                        <NavLink className="main-nav-item" to="/Login">
                            <i className="fa fa-user-circle"></i>
                            &nbsp;Sign In
                        </NavLink>
                    )}
                </div>
            </nav>
        </div>
    );
}
