import {createSlice} from '@reduxjs/toolkit'

const selectFiltroLocalizacao = createSlice({
    name: 'selectFiltroLocalizacao',
    initialState: null,
    reducers:{
        selecionarLocalizacao(state, action){
            return action.payload
        }
    }
})

export const{selecionarLocalizacao} = selectFiltroLocalizacao.actions
export default selectFiltroLocalizacao.reducer