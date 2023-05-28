import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {restocked as cakeRestock} from '../cake/cakeSlice'

type InitialState = {
    numOfIceCream: number
}

const initialState: InitialState = {
    numOfIceCream: 20
}

const iceCreamSlice = createSlice({
    name: 'ice cream',
    initialState,
    reducers: {
        ordered: (state, action) => {
            state.numOfIceCream -= action.payload
        },
        restocked: (state, action:PayloadAction<number>) => {
            state.numOfIceCream += action.payload
        }
    }, 
    extraReducers: (builder) => {
        builder.addCase(cakeRestock, state => {
            state.numOfIceCream -- 
        })
    }
})

export default iceCreamSlice.reducer
export const {ordered, restocked} = iceCreamSlice.actions

