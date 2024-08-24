import React from "react";


const PlayerFooter = (props) => {


    // src={props.actualSong}

    const isPlayPauseHandler = () => {
        props.setIsPlayPause(prevState => !prevState);
        if (props.isPlayPause)
            props.audioElement.current.pause()
        else { props.audioElement.current.play() }
        console.log(props.audioElement.current.src)
    }

    return (
        <div className="input-group container d-flex justify-content-evenly">
            <audio ref={props.audioElement} src={props.url} autoPlay type="audio.mp3" />
            <button type="button" ><i className="fa-solid fa-backward-step" onClick={props.onBackwardHandler}></i></button>
            <button type="button" onClick={() => isPlayPauseHandler()}> {props.isPlayPause ? <i className="fa-solid fa-pause"></i> : <i className="fa-solid fa-play"></i>}</button>
            <button type="button" ><i className="fa-solid fa-forward-step" onClick={props.onForwardHandler}></i></button>
        </div>)
}
export default PlayerFooter