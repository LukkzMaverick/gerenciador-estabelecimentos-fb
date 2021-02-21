import createAsyncSlice from '../../createAsyncSlice';
import {Logar} from '../../../services/requests/auth'

const logar = createAsyncSlice({
    name: 'Logar [POST]',
    service: Logar,
    reducers:{
        resetLogarSlice(state){
            state.loading = false
            state.data = null
            state.error = null
        }
    }
});

export const fetchLogar = logar.asyncAction;
export const {resetLogarSlice} = logar.actions

export default logar.reducer
