import {
FETCH_STREAM, 
FETCH_STREAMS,
CREATE_STREAM,
EDIT_STREAM,
DELETE_STREAM
} from '../actions/types';

export default (state={}, action)=>{
    switch(action.type){
        case FETCH_STREAMS:
            // With Lodash
            // return {...state, ..._.mapKeys(action.payload, 'id')};
            // With Reduce in JS
            // const newObject = action.payload.reduce((map, item) => ({ ...map, [item.id]: item }), {});
            const newObject = {};
            action.payload.forEach( (item) => newObject[item.id] = item );
            return { ...state, ...newObject};
        case FETCH_STREAM:
            return{...state, [action.payload.id]: action.payload};
        case CREATE_STREAM:
            return{...state, [action.payload.id]: action.payload};
        case EDIT_STREAM:
            return{...state, [action.payload.id]: action.payload};
        // case DELETE_STREAM:
        //     return _.omit(state, action.payload);
        case DELETE_STREAM:
            const { [action.payload]: omit, ...newState } = state;
            return newState;
        default:
            return state;
    }
}