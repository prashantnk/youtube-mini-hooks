import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
    const videos = props.videos.map((video) => {
        return <VideoItem video={video} key={video.id.videoId} onVideoSelect={props.onVideoSelect} />;
    })
    return (
        <div className="ui list">
            {videos}
        </div>
    );
}

export default VideoList;