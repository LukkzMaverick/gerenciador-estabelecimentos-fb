import createAsyncSlice from '../../createAsyncSlice';
import { LocalizacoesByEmpresa } from '../../../services/requests/estabelecimentos';

const localizacoesByEmpresa = createAsyncSlice({
    name: 'localizacoesByEmpresa [GET]',
    service: LocalizacoesByEmpresa
});

export const fetchLocalizacoesByEmpresa = localizacoesByEmpresa.asyncAction;

export default localizacoesByEmpresa.reducer