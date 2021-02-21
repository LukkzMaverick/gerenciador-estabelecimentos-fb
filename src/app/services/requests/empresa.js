import http from '../../config/config';

const CadastrarEmpresa = (data) => http.post('/empresa', data)
const EmpresaByLoggedUser = (data) => http.get('/empresa/byLoggedUser')
const GetAllEmpresas = (data) => http.get('/empresa')
const GetEmpresasWithEstabelecimento = (data) => http.get('/empresa/withEstabelecimentos')
export {GetEmpresasWithEstabelecimento, CadastrarEmpresa, EmpresaByLoggedUser, GetAllEmpresas}

