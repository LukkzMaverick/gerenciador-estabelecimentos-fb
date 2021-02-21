import {
  Redirect,
  Route
} from "react-router-dom";
import history from '../../config/history';
import { isAuthenticated, getUser } from '../../config/auth';
import CadastrarEstabelecimentos from './CadastrarEstabelecimentos';
import Login from '../auth/Login';
import TabelaEstabelecimentos from './TabelaEstalecimentos';
import BuscaPorLocalizacao from '../portal/BuscaPorLocalizacao';
import user from "../../store/slicers/user";
import { useSelector } from "react-redux";
import Cadastrar from "../auth/Cadastrar";
import CadastrarAdmins from './CadastrarAdmins';
import CadastrarEmpresa from './CadastrarEmpresa';
const Admin = (props) => {

  const userState = useSelector((state) => state.auth.user)

  const AdminRoute = ({ ...rest }) => {
    const user = getUser()
      if(user.role !== 'admin'  && user.role !== 'superAdmin'){
        return <Redirect push to="/portal/home" />
      }
    
    return <Route {...rest}></Route>
  }

  return (
    <>
    
      <AdminRoute exact basename={props.match.path}
        path={props.match.path + '/'} component={() => <TabelaEstabelecimentos admin={true}/>}/>

      <AdminRoute exact basename={props.match.path} path={props.match.path
        + '/listaEstabelecimentos'} component={TabelaEstabelecimentos} />
        <AdminRoute exact basename={props.match.path} path={'/listaEstabelecimentos/navbar'} 
        component={() => <TabelaEstabelecimentos navbar={true}></TabelaEstabelecimentos>} />

      <AdminRoute exact basename={props.match.path} path={'/cadastrarEmpresas'} component={CadastrarEmpresa} />

      <AdminRoute exact basename={props.match.path}
        path={'/cadastrarAdmins'} component={CadastrarAdmins}/>

      <AdminRoute exact basename={props.match.path} path={'/cadastrarEstabelecimentos'}
        component={() => <CadastrarEstabelecimentos novoCadastro={true} />} />
        <AdminRoute exact basename={props.match.path} path={'/cadastrarEstabelecimentos/navbar'}
        component={() => <CadastrarEstabelecimentos navbar={true} novoCadastro={true} />} />
      <AdminRoute exact basename={props.match.path} path={'/editarEstabelecimentos'}
        component={() => <CadastrarEstabelecimentos novoCadastro={false} />} />

      <AdminRoute exact basename={props.match.path} path={'/buscaPorLocalizacao'}
        component={() => <BuscaPorLocalizacao admin={true}></BuscaPorLocalizacao>} /> 

      <AdminRoute exact basename={props.match.path} path={'/filtroLocalizacao'}
        component={() => <TabelaEstabelecimentos admin={true} filtroLocalizacao={true} />} />
    </>
  )
}

export default Admin
