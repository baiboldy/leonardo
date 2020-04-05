import api from './api'

export const ACTION_TYPES = {
    FETCH_CARS: 'FETCH_CARS',
}

export const asyncGetCars = () => {
    return async dispatch => {
        const cars = await (await api.cars().fetchAll()).json()
        dispatch({type: ACTION_TYPES.FETCH_CARS, payload: cars})
    }
}