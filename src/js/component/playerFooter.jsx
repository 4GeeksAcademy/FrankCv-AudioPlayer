import React from "react";


const PlayerFooter = (props) => {
    return (
        <div className="input-group container d-flex justify-content-evenly text-light mb-3 mt-2">
            <button type="button" className="bg-secondary" onClick={props.onBackwardHandler}><i className="fa-solid fa-backward-step  text-light" ></i></button>
            <button type="button" className="bg-secondary" onClick={props.isPlayPauseHandler}><i className={`${props.isPlayPause ? "fa-solid fa-pause text-light" : "fa-solid fa-play text-light"} `}></i></button>
            <button type="button" className="bg-secondary" onClick={props.onForwardHandler}><i className="fa-solid fa-forward-step text-light" ></i></button>
        </div>)
}
export default PlayerFooter