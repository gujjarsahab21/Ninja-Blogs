//1 ab slice banane k lie chahiye createslice
//2 isko sbse phle initial state chiye hota h fir naam and reduecrs
//3 ye kaam hora h authentication ko track krne k lie ki user authenticate h ya nhi, yeh store se har bar puchenge
//4 then initialstate banana h aur iske andar data dena h
//5 ab slice banaenge jisme phle name denge fir initialstate then reducers(ye ek object hota h)
//6 2 cheeze export krni h phla to is authSlice se reducer ko export krna aur dusra aage bataya h
//7 reducers me login logout hoga...ab dusre ko export krlo neeche jaake(27 line)
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
     }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;
//ab jana hai component banane