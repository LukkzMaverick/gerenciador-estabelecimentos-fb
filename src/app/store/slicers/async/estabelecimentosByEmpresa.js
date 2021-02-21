import createAsyncSlice from '../../createAsyncSlice';
import {EstabelecimentosByEmpresa} from '../../../services/requests/estabelecimentos'

const estabelecimentosByEmpresa = createAsyncSlice({
    name: 'estabelecimentosByEmpresa [GET]',
    service: EstabelecimentosByEmpresa
});

export const fetchEstabelecimentosByEmpresa = 
estabelecimentosByEmpresa.asyncAction;

export default estabelecimentosByEmpresa.reducer

