import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';


export const Navbar = () => {

    const { user, dispatch } = useContext(AuthContext);
    
    const navigate = useNavigate();

    const handleLogout = () => {

        const action = {
            type: types.logout
        }

        dispatch(action);

        navigate('/login', {
            replace: true
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand ms-3" 
                to="/"
            >
                Heroes App
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        style={{textDecoration: 'none'}}
                        className={ 'nav-item nav-link text-secondary'} 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        style={{textDecoration: 'none'}}
                        className={ 'nav-item nav-link text-secondary'} 
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        style={{textDecoration: 'none'}}
                        className={ 'nav-item nav-link text-secondary'} 
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className='nav-item nav-link text-secondary me-5'>
                        ¡Hello!
                    </span>

                </ul>
            </div>
        </nav>
    )
}