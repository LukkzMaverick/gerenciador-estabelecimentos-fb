import createAsyncSlice from '../../createAsyncSlice';
import {
    EstabelecimentosByLocalizacaoAndEmpresa
} from '../../../services/requests/estabelecimentos';

const estabelecimentosByLocalizacaoAndEmpresa = createAsyncSlice({
    name: 'estabelecimentosByLocalizacaoAndEmpresa [GET]',
    service: EstabelecimentosByLocalizacaoAndEmpresa
});

export const fetchEstabelecimentosByLocalizacaoAndEmpresa = 
estabelecimentosByLocalizacaoAndEmpresa.asyncAction;

export default estabelecimentosByLocalizacaoAndEmpresa.reducer







