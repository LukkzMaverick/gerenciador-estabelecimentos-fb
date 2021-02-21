import createAsyncSlice from '../../createAsyncSlice';
import { RegistrarAdmin } from '../../../services/requests/auth';

const registrarAdmin = createAsyncSlice({
    name: 'registrarAdmin [POST]',
    service: RegistrarAdmin,
    reducers:{
        resetRegistrarAdminSlice(state){
            state.loading = false
            state.data = null
            state.error = null
        }
    }
});

export const fetchRegistrarAdmin = registrarAdmin.asyncAction;
export const {resetRegistrarAdminSlice} = registrarAdmin.actions
export default registrarAdmin.reducer