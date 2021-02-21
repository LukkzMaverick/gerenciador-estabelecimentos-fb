import createAsyncSlice from '../../createAsyncSlice';
import {GetOneEstabelecimentoByLoggedUser} from '../../../services/requests/estabelecimentos'

const getOneEstabelecimentoByLoggedUser = createAsyncSlice({
    name: 'getOneEstabelecimentoByLoggedUser [GET]',
    service: GetOneEstabelecimentoByLoggedUser
});

export const fetchGetOneEstabelecimentoByLoggedUser = getOneEstabelecimentoByLoggedUser.asyncAction;

export default getOneEstabelecimentoByLoggedUser.reducer