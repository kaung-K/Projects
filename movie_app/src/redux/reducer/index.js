import {combineReducers} from "redux"
import { movieReducer } from "./movie"

const reducer = combineReducers({
    movies : movieReducer
})

export default reducer;