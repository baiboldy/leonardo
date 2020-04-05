import Components from '../../components/index'
export const ACTION_TYPES = {
    BASE_CONTENT: 'GET_BASE',
    CHANGE_CONTENT: 'CHANGE_BASE',
    CHANGE_CONTENT_BY_CARD_ID: 'CHANGE_CONTENT_BY_CARD_ID',
}

export const changeContent = (component) => {
    return dispatch => {
        dispatch({type: ACTION_TYPES.CHANGE_CONTENT, payload: Components[component]})
    }
}

export const changeContentByCardId = (car) => {
    return dispatch => {
        dispatch({type: ACTION_TYPES.CHANGE_CONTENT_BY_CARD_ID, payload: {
            component: Components['SingleCard'],
            car: car
        }})
    }
}