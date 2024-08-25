import React from "react";


const PlayerFooter = (props) => {
    return (
        <div className="input-group container d-flex justify-content-evenly text-light">            
            <button type="button" ><i className="fa-solid fa-backward-step bg-light" onClick={props.onBackwardHandler}></i></button>
            <button type="button" onClick={props.isPlayPauseHandler}><i className={`${props.isPlayPause? "fa-solid fa-pause bg-light":"fa-solid fa-play"} `}></i></button>
            <button type="button" ><i className="fa-solid fa-forward-step bg-light" onClick={props.onForwardHandler}></i></button>
        </div>)
}
export default PlayerFooter