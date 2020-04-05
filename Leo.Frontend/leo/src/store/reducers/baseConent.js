import {ACTION_TYPES} from '../actions/baseContent'
import Content from '../../components/Content'

const initState = {
    layout: Content
}

export default function baseContent(state = initState, action) {
    if (action.type === ACTION_TYPES.BASE_CONTENT) {
        return {layout: Content}
    } else if (action.type === ACTION_TYPES.CHANGE_CONTENT) {
        return {layout: action.payload}
    } else if (action.type === ACTION_TYPES.CHANGE_CONTENT_BY_CARD_ID) {
        return {layout: action.payload.component, data: {car: action.payload.car} }
    }
    return state
}