import React, { useRef, useState, useEffect } from "react";
import List from "./List.jsx";
import PlayerFooter from "./playerFooter";

const Home = () => {
	const [songList, setSongList] = useState([]);
	const [isPlayPause, setIsPlayPause] = useState(false);
	const [actualSong, setActualSong] = useState(``);
	const audioElement = useRef(null);
	useEffect(() => {
		getAllSongs()
	}, [])
	const isPlayPauseHandler = () => {
		setIsPlayPause(!isPlayPause);
		if (isPlayPause)
			audioElement.play()
		else { audioElement.pause() }

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

	}
	function songFocusHandler() {
		actualSong.current.focus();
	}
	function onPlayHandler() {


	}
	function onForwardHandler() {

	}
	function setActualSongHandler(id) {
		const [{ 'url': url }] = [...songList.filter((e) => parseInt(e.id) === parseInt(id))]
		return url
	}
	function onClickHandler(e) {
		setActualSong(setActualSongHandler(e.currentTarget.id))
		console.log(actualSong)
		console.log("https://playground.4geeks.com" + actualSong)
	}
	return (
		<div className="container d-flex flex-column w-25 border p-0 align-items-center">
			<div className="container p-0">
				<div className="list-group mx-0">
					{
						songList.map((song, index) => <List key={index} onClickHandler={(e) => onClickHandler(e)} song={song.name} order={index + 1} id={song.id} />)
					}
				</div>
			</div>
			<PlayerFooter audioElement={audioElement} actualSong={actualSong} isPlayPause={isPlayPause} isPlayPauseHandler={isPlayPauseHandler} url={"https://playground.4geeks.com" + actualSong} />
		</div>

	);
};

export default Home;
