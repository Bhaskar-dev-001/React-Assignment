import {configureStore} from '@reduxjs/toolkit'

import todoreducer from './TodoSlice'

export const store = configureStore({
    reducer:{
        todos: todoreducer,
    }
})