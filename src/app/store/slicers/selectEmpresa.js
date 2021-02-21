import {createSlice} from '@reduxjs/toolkit'

const selectEmpresa = createSlice({
    name: 'selectEmpresa',
    initialState: {
        empresaId: null,
        nomeEmpresa: null
    },
    reducers:{
        selecionarEmpresa(state, action){
            state.empresaId = action.payload.empresaId
            state.nomeEmpresa = action.payload.nomeEmpresa
        }
    }
})

export const{selecionarEmpresa} = selectEmpresa.actions
export default selectEmpresa.reducer