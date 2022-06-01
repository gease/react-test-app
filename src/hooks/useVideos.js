import {useState, useEffect} from 'react';
import youtube from "../apis/youtube";

const useVideos = (defaultTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {getVideos(defaultTerm)}, [defaultTerm]);

    const getVideos = async (term) => {
        const response = await youtube.get("/search", {
            params:
                {
                q: term,
            },
        });

        setVideos(response.data.items);
    };

    return [videos, getVideos];
}

export default useVideos;