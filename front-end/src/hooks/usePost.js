import axios from "axios";
import { useState } from "react";

export const usePost = (url= '') => {

    const [statePost, setStatePost] = useState({
        responsePost: null,
        loading: false,
        error: null
    });

    const axiosPost = async (payload) => {
        try {
            const response = await axios.post(url, payload);

            setStatePost({
                responsePost: response.data,
                loading: false,
                error: null
            });
        } catch (err) {
            console.error('', err.message);
            setStatePost({
                responsePost: null,
                loading: false,
                error: err
            });
        }
    }

    return {
        axiosPost,
        statePost,
        setStatePost
    }
};