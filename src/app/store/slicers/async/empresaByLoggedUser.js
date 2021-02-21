import createAsyncSlice from '../../createAsyncSlice';
import { EmpresaByLoggedUser } from '../../../services/requests/empresa';

const empresaByLoggedUser = createAsyncSlice({
    name: 'empresaByLoggedUser [GET]',
    service: EmpresaByLoggedUser
});

export const fetchEmpresaByLoggedUser = empresaByLoggedUser.asyncAction;

export default empresaByLoggedUser.reducer