import React from "react";

const PlayerFooter = (props) => {
    // src={props.actualSong}
    return (
        <div className="input-group container d-flex justify-content-evenly">
            <audio  ref={props.audioElement} src={props.url} autoPlay type="audio.mp3" />
            <button type="button" onClick={() => props.onClickBackward()}><i className="fa-solid fa-backward-step"></i></button>
            {console.log()}
            <button type="button" onClick={() => props.isPlayPauseHandler()}> {props.isPlayPause ? <i className="fa-solid fa-pause"></i> : <i className="fa-solid fa-play"></i>}</button>
            <button type="button" onClick={() => props.onClickForward()}><i className="fa-solid fa-forward-step"></i></button>
        </div>)
}
export default PlayerFooter