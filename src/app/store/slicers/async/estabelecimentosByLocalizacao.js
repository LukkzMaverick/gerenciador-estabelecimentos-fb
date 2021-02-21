import createAsyncSlice from '../../createAsyncSlice';
import {EstabelecimentosByLocalizacao} from '../../../services/requests/estabelecimentos'

const estabelecimentosByLocalizacao = createAsyncSlice({
    name: 'estabelecimentosByLocalizacaoAndLoggedUser [GET]',
    service: EstabelecimentosByLocalizacao
});

export const fetchEstabelecimentosByLocalizacao = 
estabelecimentosByLocalizacao.asyncAction;

export default estabelecimentosByLocalizacao.reducer

