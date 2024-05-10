import axios from "axios";
import { useState } from "react";

export const usePost = () => { //Si hay un Error por pasar la URL desde acá -> Se colocará la URL en axiosPost

    const [statePost, setStatePost] = useState({
        responsePost: null,
        loadingPost: false,
        errorPost: null
    });

    const axiosPost = async (url, payload) => {
        try {
            const { data } = await axios.post(url, payload);

            setStatePost({
                responsePost: data,
                loadingPost: false,
                errorPost: null
            });
        } catch (err) {
            console.error('', err.message);
            setStatePost({
                responsePost: null,
                loadingPost: false,
                errorPost: err
            });
        }
    }

    return {
        axiosPost,
        statePost,
        setStatePost
    }
};