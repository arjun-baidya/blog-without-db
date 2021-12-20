import {
    BLOG_POST_REQUEST,
    BLOG_POST_SUCCESS,
    BLOG_POST_FAIL,
} from '../constants/blogConstants.js';

// reducer for blog post

export const blogReducer = (state = {}, action) => {
    switch (action.type) {
        case BLOG_POST_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case BLOG_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                blogPost: action.payload,
            };
        case BLOG_POST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
}
