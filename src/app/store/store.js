import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logar from './slicers/async/logar';
import selectEstabelecimentoASerEditado from './slicers/selectEstabelecimentoASerEditado';
import putEstabelecimento from './slicers/async/putEstabelecimento';
import selectFiltroLocalizacao from './slicers/selectFiltroLocalizacao';
import user from './slicers/user';
import registrar from './slicers/async/registrar';
import registrarAdmin from './slicers/async/registrarAdmin';
import cadastrarEmpresa from './slicers/async/cadastrarEmpresa';
import empresaByLoggedUser from './slicers/async/empresaByLoggedUser';
import postEstabelecimento from './slicers/async/postEstabelecimento';
import selectEmpresa from './slicers/selectEmpresa';
import estabelecimentosByLocalizacaoAndEmpresa
    from './slicers/async/estabelecimentosByLocalizacaoAndEmpresa';

const authReducer = combineReducers({login: logar, user: user, registrar, registrarAdmin})
const estabelecimentosReducer = combineReducers({selectEstabelecimentoASerEditado, 
  putEstabelecimento, selectFiltroLocalizacao, postEstabelecimento, estabelecimentosByLocalizacaoAndEmpresa})
  const empresa = combineReducers({cadastrarEmpresa, empresaByLoggedUser, selectEmpresa})
export default configureStore({
  reducer: {
    auth: authReducer,
    estabelecimentos: estabelecimentosReducer,
    empresa: empresa
  },
});
