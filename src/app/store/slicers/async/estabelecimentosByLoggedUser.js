import createAsyncSlice from '../../createAsyncSlice';
import {EstabelecimentosByLoggedUser} from '../../../services/requests/estabelecimentos'

const estabelecimentosByLoggedUser = createAsyncSlice({
    name: 'estabelecimentosByLoggedUser [GET]',
    service: EstabelecimentosByLoggedUser
});

export const fetchEstabelecimentosByLoggedUser = estabelecimentosByLoggedUser.asyncAction;

export default estabelecimentosByLoggedUser.reducer