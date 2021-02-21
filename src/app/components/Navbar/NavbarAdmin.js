import React, { Fragment, useContext } from 'react'
import { Nav, NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import history from '../../config/history';

const NavbarAdmin = (props) => {

    const user = useSelector((state) => state.auth.user)

    return (
        <Fragment>
            <Nav.Link onClick={goToHome}>{user.role === 'superAdmin' ? 'Cadastrar Admins' : 'Home'}</Nav.Link>
            <NavDropdown title={user.name} id="basic-nav-dropdown">
            <NavDropdown.Item onClick={goToCadastrarEmpresas}>
                    Cadastrar Empresa</NavDropdown.Item>
            <NavDropdown.Divider />
            {user.role === 'superAdmin' ? <NavDropdown.Item onClick={()=>history.push('/listaEstabelecimentos/navbar')}>
                    Lista de Estabelecimentos</NavDropdown.Item> : ''}
                <NavDropdown.Item onClick={goToCadastrarEstabelecimentos}>
                    Cadastrar Estabelecimento</NavDropdown.Item>
                {/* <NavDropdown.Item onClick={goToBuscaPorLocalizacao}>Busca por Localização</NavDropdown.Item>  */}
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={props.logout}>Sair</NavDropdown.Item>
            </NavDropdown>
        </Fragment>)

    function goToHome() {
        if(user.role === 'superAdmin'){
            history.push('/cadastrarAdmins')
        }else{
            history.push('/')
        }
    }
}

function goToCadastrarEstabelecimentos() {
    history.push('/cadastrarEstabelecimentos/navbar')
}

function goToCadastrarEmpresas() {
    history.push('/cadastrarEmpresas')
}

function goToBuscaPorLocalizacao() {
    history.push('/buscaPorLocalizacao')
}

export default NavbarAdmin
