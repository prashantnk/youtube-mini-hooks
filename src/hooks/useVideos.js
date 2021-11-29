import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultTerm) => {
    const [videos, setVideos] = useState([]);
    const searchVideos = async (data) => {
        if (data.length === 0) return;
        const endPoint = "search";
        const options = {
            params: {
                q: data
            }
        };
        const result = await youtube.get(endPoint, options);
        setVideos(result.data.items);
    }
    useEffect(() => {
        searchVideos(defaultTerm);
    }, [defaultTerm]);

    return [videos, searchVideos];

}

export default useVideos;