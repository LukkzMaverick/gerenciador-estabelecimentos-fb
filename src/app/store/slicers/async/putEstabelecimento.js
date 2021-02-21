import createAsyncSlice from '../../createAsyncSlice';
import {
    PutEstabelecimento
} from '../../../services/requests/estabelecimentos';

const putEstabelecimento = createAsyncSlice({
    name: 'putEstabelecimento [PUT]',
    service: PutEstabelecimento,
    reducers:{
        resetPutEstabelecimentoSlice(state){
            state.loading = false
            state.data = null
            state.error = null
        }
    }
});

export const fetchPutEstabelecimento = putEstabelecimento.asyncAction;
export const {resetPutEstabelecimentoSlice} = putEstabelecimento.actions
export default putEstabelecimento.reducer