import React from "react";
import List from "./List";

const MediaPlayer = ( props ) => {
    <div className="ratio ratio-1x1"> </div>
    return (
        <div className="container p-0">
            <div className="list-group">
                {
                    props.songList.map((song, index) => <List key={index} onClick={()=>{props.setActualSong("https://playground.4geeks.com/sound" +song.url) 
                        console.log(`clicked`)}} song={song.name} id={song.id} order={index + 1} />)
                }
            </div>
            <input type="text"/>
        </div>
    )
}

export default MediaPlayer;