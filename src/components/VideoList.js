import React from 'react';
import VideoItem from './VideoItem';
import App from './App';

const VideoList = (props) => {

    const renderedList = props.videos.map((video) => {
        return (
            <VideoItem
                onVideoSelect={props.onVideoSelect}
                video={video}
                key={video.id.videoID}
            />
        );
    });

    return (
        <div
            className="ui relaxed divided list"
        >
            {renderedList}
        </div>
    );
};

export default VideoList;