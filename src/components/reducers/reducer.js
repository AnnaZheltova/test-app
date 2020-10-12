import {combineReducers} from 'redux'
import SelectedDate from './SelectedDate'

const allReducers = combineReducers({
    date: [],
    dates: SelectedDate
})

export default allReducers