//1 ab sbse baat aati h store banega kese? by configure store hota h jo store banata h,store ko chahiye ki meko saare reducers k bare me batao.
//2 export bhi krdo sath me, store k andr ek he parameter aata h jo ki hota h reducers 
//3 ab ek or store banaege jo ki track krega authentication ko (create authslice.js and go there)
import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';

const store = configureStore({
    reducer: {
        auth : authSlice,
        //TODO: add more slices here for posts
    }
});


export default store;