import createAsyncSlice from '../../createAsyncSlice';
import { GetEmpresasWithEstabelecimento } from '../../../services/requests/empresa';

const getEmpresasWithEstabelecimento = createAsyncSlice({
    name: 'GetEmpresasWithEstabelecimento [GET]',
    service: GetEmpresasWithEstabelecimento
});

export const fetchGetEmpresasWithEstabelecimento = getEmpresasWithEstabelecimento.asyncAction;

export default getEmpresasWithEstabelecimento.reducer