import React, { useRef, useState, useEffect } from "react";
import MediaPlayer from "./MediaPlayer";
import PlayerFooter from "./playerFooter";

const Home = () => {
	const [songList, setSongList] = useState([]);
	const [isPlayPause, setIsPlayPause] = useState(false);
	const [actualSong,setActualSong] = useState(``);
	const audioElement = useRef();
	useEffect(() => {
		getAllSongs()
	}, [])
	const isPlayPauseHandler= ()=>{
		setIsPlayPause(!isPlayPause);
	}
	function getAllSongs() {
		const URL = 'https://playground.4geeks.com/sound/all';
		fetch(
			URL, { method: "GET" }
		)
			.then((response) => {
				if (response.status === 200) {
					return response.json()
				}
			})
			.then((data) => {
				setSongList(data.songs);
			})
			.catch((error) => console.log(error))
	}
	function onBackwardHandler() {
		console.log(backward.current)
	}
	function songFocusHandler() {
		actualSong.current.focus();
	}
	function onPlayHandler() {
		
		
	}
	function onForwardHandler() {
		console.log(forward.current)
	}
	function songHandler(id) {

	}
	return (
		<div className="container d-flex flex-column w-25 border p-0 align-items-center">
			<MediaPlayer songList={songList} setActualSong = {setActualSong} />
			<PlayerFooter audioElement={audioElement}actualSong={actualSong} isPlayPause={isPlayPause} isPlayPauseHandler={isPlayPauseHandler}/>
		</div>

	);
};

export default Home;
