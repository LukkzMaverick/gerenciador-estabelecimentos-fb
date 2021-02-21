import createAsyncSlice from '../../createAsyncSlice';
import { Localizacoes } from '../../../services/requests/localizacao';

const localizacoes = createAsyncSlice({
    name: 'localizacoes [GET]',
    service: Localizacoes
});

export const fetchLocalizacoes = localizacoes.asyncAction;

export default localizacoes.reducer