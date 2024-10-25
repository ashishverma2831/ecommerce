import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/userSlice'
import { productsApi } from './api/productsApi'
import { authApi } from './api/authApi'
import { userApi } from './api/userApi'
// import { setupListeners } from '@reduxjs/toolkit/query'


export const store = configureStore({
    reducer: {
        user: userReducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            productsApi.middleware,
            authApi.middleware,
            userApi.middleware,
            
        ]),
        devTools:true
})

// setupListeners(store.dispatch)