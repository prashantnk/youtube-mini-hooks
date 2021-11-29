import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
    const defaultTerm = 'How to search on youtube';
    const [videos, setVideos] = useVideos(defaultTerm);
    const [selectedVideo, setSelectedVideo] = useState(null);
    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);
    return (
        <div className="ui container">
            <SearchBar onFormSubmit={setVideos} defaultTerm={defaultTerm} />
            <div className="ui grid">
                <div className="row">
                    <div className="eleven wide column">
                        <h3>Video Player</h3>
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <h3>Showing {videos.length} videos </h3>
                        <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
                    </div>

                </div>

            </div>
        </div>
    );
}
export default App;