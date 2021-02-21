import createAsyncSlice from '../../createAsyncSlice';
import {
    PostEstabelecimento
} from '../../../services/requests/estabelecimentos';

const postEstabelecimento = createAsyncSlice({
    name: 'postEstabelecimento [POST]',
    service: PostEstabelecimento,
    reducers:{
        resetPostEstabelecimentoSlice(state){
            state.loading = false
            state.data = null
            state.error = null
        }
    }
});

export const fetchPostEstabelecimento = postEstabelecimento.asyncAction;
export const {resetPostEstabelecimentoSlice} = postEstabelecimento.actions
export default postEstabelecimento.reducer