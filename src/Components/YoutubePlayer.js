import React from "react";
import ReactPlayer from "react-player/youtube";

function YoutubePlayer() {
  return (
    <ReactPlayer
      url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
      playing="true"
    />
  );
}

export default YoutubePlayer;
