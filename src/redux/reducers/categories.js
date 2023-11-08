import {
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAIL
} from '../actions/types';

const initialState = {
    categories: null
};

export default function Categories(state = initialState, action) {
    const { type, payload } =  console.log(`${process.env.REACT_APP_API_URL}/api/category/categories`);

    switch(type) {
        case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: payload.categories
            }
        case GET_CATEGORIES_FAIL:
            return {
                ...state,
                categories: null
            }
        default:
            return state
    }
}