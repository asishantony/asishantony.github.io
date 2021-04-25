import React from "react";
import ReactPlayer from "react-player/youtube";

function YoutubePlayer() {
  return (
    <div className="youtube-player">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=o5NRobXvsCY"
        playing="true"
      />
    </div>
  );
}

export default YoutubePlayer;
