import './VideoItem.css'
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div className="item video-item" onClick={() => onVideoSelect(video)}>
            <img
                className="ui image"
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
            />
            <div className="content">
                <p className="header">{video.snippet.title}</p>
            </div>
        </div>
    );
}

export default VideoItem;