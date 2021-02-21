const { createSlice } = require('@reduxjs/toolkit');

const user = createSlice({
    name: 'user',
    initialState: {
        userId: null,
        role: null,
        name: null
    },
    reducers:{
        logoutStore(state){
            state.userId = null
            state.role = null
            state.name = null
        },
        loginStore(state, action){
            state.role = action.payload.role
            state.userId = action.payload.id
            state.name = action.payload.nome
        }
    }
})

export const { loginStore, logoutStore } = user.actions;
export default user.reducer;
