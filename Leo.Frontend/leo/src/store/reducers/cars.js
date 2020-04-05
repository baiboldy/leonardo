import { ACTION_TYPES } from "../actions/cars";

const initState = []

export default function cars(state = initState, action) {
    if (action.type === ACTION_TYPES.FETCH_CARS){
        return action.payload
    }
    return state
}