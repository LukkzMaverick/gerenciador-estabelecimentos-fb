import createAsyncSlice from '../../createAsyncSlice';
import { Registrar } from '../../../services/requests/auth';

const registrar = createAsyncSlice({
    name: 'registrar [POST]',
    service: Registrar,
    reducers:{
        resetRegistrarSlice(state){
            state.loading = false
            state.data = null
            state.error = null
        }
    }
});

export const fetchRegistrar = registrar.asyncAction;
export const {resetRegistrarSlice} = registrar.actions

export default registrar.reducer