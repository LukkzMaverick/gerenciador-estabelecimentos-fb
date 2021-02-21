import React, { Fragment, useContext } from 'react'
import { Nav, NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { logoutStore } from '../../store/slicers/user';
import { removeToken } from '../../config/auth';
import history from '../../config/history';

const NavbarUser = (props) => {

    const user = useSelector((state) => state.auth.user)

    return (
        <Fragment>
            <Nav.Link onClick={goToHome}>Home</Nav.Link>
            <NavDropdown title={user.name} id="basic-nav-dropdown">
                <NavDropdown.Item onClick={goToBuscaPorLocalizacao}>Busca por Localização</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={props.logout}>Sair</NavDropdown.Item>
            </NavDropdown>
        </Fragment>)

    function goToHome() {
        history.push('/portal/home')
    }

}

function goToBuscaPorLocalizacao() {
    history.push('/portal/buscaPorLocalizacao')
}

export default NavbarUser
