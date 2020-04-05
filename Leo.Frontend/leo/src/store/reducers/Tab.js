import { ACTION_TYPES } from "../actions/Tab.js";

const initState = [
    {
        id: 1,
        name: '#cars',
        component: 'Content'
    },
    {
        id: 2,
        name: '#SingleCard',
        component: 'SingleCard'
    },
    {
        id: 1,
        name: '#show'
    },
    {
        id: 1,
        name: '#films'
    },
    {
        id: 1,
        name: '#music'
    }
]

export default function Tab(state = initState, action) {
    if (action.type === ACTION_TYPES.ADD_TAB){
        return [
            ...state,
            action.payload
        ]
    }
    return state
}