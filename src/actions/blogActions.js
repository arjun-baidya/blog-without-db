import {
    BLOG_POST_REQUEST,
    BLOG_POST_SUCCESS,
    BLOG_POST_FAIL,
} from '../constants/blogConstants.js';

// post blog action creator 
export const postBlog = () => async (dispatch) => {
    dispatch({
        type: BLOG_POST_REQUEST,
    });
    let {data} = JSON.parse(localStorage.getItem('blogData'));
    dispatch({
        type: BLOG_POST_SUCCESS,
        payload: data,
    });

    dispatch({
        type: BLOG_POST_FAIL,
        error: 'error',
    });
     localStorage.setItem('bloginfo', JSON.stringify(data))
};