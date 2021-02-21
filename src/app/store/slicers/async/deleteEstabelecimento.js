import createAsyncSlice from '../../createAsyncSlice';
import {
    DeleteEstabelecimento
} from '../../../services/requests/estabelecimentos';

const deleteEstabelecimento = createAsyncSlice({
    name: 'deleteEstabelecimento [DELETE]',
    service: DeleteEstabelecimento
});

export const fetchDeleteEstabelecimento = deleteEstabelecimento.asyncAction;

export default deleteEstabelecimento.reducer