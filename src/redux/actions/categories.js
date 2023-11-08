import axios from 'axios';
import {
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAIL,
} from './types';

export const get_categories = () => async dispatch => {
    console.log('INICIO GET_CATEGORIES')
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`ecommerce-primer-deploy-nuevo-repo.onrender.com/api/category/categories`, config);
    
        if (res.status === 200) {
            dispatch({
                type: GET_CATEGORIES_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_CATEGORIES_FAIL
            });
        }
    } catch(err) {
        dispatch({
            type: GET_CATEGORIES_FAIL
        });
    }
}