import {createSlice} from '@reduxjs/toolkit'

const selectEstabelecimentoASerEditado = createSlice({
    name: 'selectEstabelecimentoASerEditado',
    initialState: null,
    reducers:{
        selecionarEstabelecimentoASerEditado(state, action){
            return action.payload
        }
    }
})

export const{selecionarEstabelecimentoASerEditado} = selectEstabelecimentoASerEditado.actions
export default selectEstabelecimentoASerEditado.reducer