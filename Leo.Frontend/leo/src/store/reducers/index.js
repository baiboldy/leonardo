import {combineReducers} from 'redux'
import cars from './cars'
import Tab from './Tab'
import BaseContent from './baseConent'

export default combineReducers({
    cars,
    Tab,
    BaseContent,
})