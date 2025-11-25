import { ActionType } from "../action-types"

export const fetchMovies = (movies) => {
    return {
        type : ActionType.FETCH_MOVIES ,
        payload : movies
    }
}

export const selectedMovies = (movie) => {
    return {
        type : ActionType.SELECT_MOVIE ,
        payload : movie
    }
}

export const removeSelectedMovies = (movie) => {
    return {
        type : ActionType.REMOVE_SELECTED_MOVIE ,
        payload : movie
    }
}