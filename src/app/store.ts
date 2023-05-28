import { configureStore } from '@reduxjs/toolkit'
import cakeReducer from '../features/cake/cakeSlice.ts'
import iceCreamReducer from '../features/icecream/iceCreamSlice.ts'
import userReducer from '../features/user/userSlice.ts'

// const reduxLogger = require('redux-logger')

// const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        user: userReducer
    },
    // middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(logger) 
        
    
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
