import React, { useContext, Fragment, useState, useEffect } from 'react'
import { Navbar as NavbarBootstrap, NavDropdown, Nav } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { removeToken, getUser } from '../../config/auth';
import history from '../../config/history';
import LoginContext from '../../context/LoginContext';
import { loginStore, logoutStore } from '../../store/slicers/user';
import NavbarAdmin from './NavbarAdmin';
import NavbarUser from './NavbarUser';
const Navbar = (props) => {

    const user = useSelector((state) => state.auth.user)
    const dispatch = useDispatch()
    useEffect(() => {
        const usuario = getUser()
        if (usuario) {
            dispatch(loginStore(usuario))
        }
        return () => { };
    }, [])

    return (
        <>

            <header>
                <NavbarBootstrap bg="primary" variant='dark' expand="lg">
                    <div className='container'>
                        <NavbarBootstrap.Brand>Gerenciador de Estabelecimentos</NavbarBootstrap.Brand>
                        <NavbarBootstrap.Toggle aria-controls="basic-navbar-nav" />
                        <NavbarBootstrap.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                {user.role === 'admin' || user.role === 'superAdmin'
                                    ? <NavbarAdmin logout={logout} /> : user.userId ?
                                        <NavbarUser logout={logout} /> : <Fragment>
                                            <Nav.Link onClick={goToLoginPage}>Login</Nav.Link>
                                            <Nav.Link onClick={goToRegisterPage}>Cadastre-se</Nav.Link>
                                        </Fragment>}
                            </Nav>
                        </NavbarBootstrap.Collapse>
                    </div>
                </NavbarBootstrap>
            </header>

        </>
    )
    function logout() {
        removeToken()
        dispatch(logoutStore())
        history.push('/')
    }
}

function goToLoginPage() {
    history.push('/login')
}

function goToRegisterPage() {
    history.push('/cadastrar')
}

export default Navbar
