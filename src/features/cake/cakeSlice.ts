import {createSlice, PayloadAction} from '@reduxjs/toolkit'

//type 
type InitialState = {
    numOfCake: number
}

const initialState: InitialState = {
    numOfCake: 10
}


const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers:{
        ordered: (state) => {
            state.numOfCake--
        },
        restocked: (state,action: PayloadAction<number>) => {
            state.numOfCake += action.payload
        }
    },
    // extraReducers: (builder) => {
    //     builder.addCase(iceCreamOrder, state => {
    //         state.numOfCake --
    //     })
    // }
})

export default cakeSlice.reducer
export const {ordered, restocked} = cakeSlice.actions




