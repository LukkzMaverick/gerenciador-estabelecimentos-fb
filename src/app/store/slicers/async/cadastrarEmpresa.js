import createAsyncSlice from '../../createAsyncSlice';
import { CadastrarEmpresa } from '../../../services/requests/empresa';

const cadastrarEmpresa = createAsyncSlice({
    name: 'cadastrarEmpresa [POST]',
    service: CadastrarEmpresa,
    reducers:{
        resetCadastrarEmpresaSlice(state){
            state.loading = false
            state.data = null
            state.error = null
        }
    }
});

export const fetchCadastrarEmpresa = cadastrarEmpresa.asyncAction;
export const {resetCadastrarEmpresaSlice} = cadastrarEmpresa.actions
export default cadastrarEmpresa.reducer