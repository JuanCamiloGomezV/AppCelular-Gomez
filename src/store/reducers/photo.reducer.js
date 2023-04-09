import { ADD_PLACE } from '../actions/photo.action'
import Place from '../../models/Place'

const initialState = {
    places: []
}

const PlaceReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_PLACE:
            const newPlace = new Place(Date.now(), action.payload.title, action.payload.image)
            return {
                ...state,
                places: newPlace
            }
        default:
            return state
    }
}

export default PlaceReducer