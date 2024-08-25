import React, { useRef, useState, useEffect } from "react";
import List from "./List.jsx";
import PlayerFooter from "./playerFooter";

const Home = () => {

	const [songList, setSongList] = useState([]);
	const [isPlayPause, setIsPlayPause] = useState(false);
	const [actualSong, setActualSong] = useState('');
	const audioElement = useRef(null);
	const ran = Math.floor(Math.random() * (songList.length - 1))
	useEffect(() => {
		getAllSongs()
		console.log(songList)
	}, [audioElement])

	const getAllSongs = async () => {
		try {
			const response = await fetch('https://playground.4geeks.com/sound/all')
			if (response.status === 200) {
				const data = await response.json()
				setSongList(await data.songs)
			}
		} catch {
			console.error(error)
		}

	}
	function onClickHandler(song) {
		setIsPlayPause(true)
		setActualSong(song)
		console.log(song)
	}

	const getSongIndex = () => {
		// const obj = songList.filter(e => e.id === actualSong.id)
		return songList.indexOf(actualSong)
	}
	const onBackwardHandler = () => {
		setActualSong(songList[getSongIndex() - 1])
	}
	const onForwardHandler = () => {
		setActualSong(songList[getSongIndex() + 1])
	}
	const isPlayPauseHandler = () => {
		setIsPlayPause(prevState => !prevState);
		if (isPlayPause)
			audioElement.current.pause()
		else { audioElement.current.play() }
		console.log(audioElement.current.src)
	}
	return (
		<div className="container d-flex flex-column w-25 border p-0 align-items-center bg-dark">
			<div className="container p-3">
				<div className="list-group mx-0">
					{
						songList.map((song, index) => <List
							key={index}
							onClickHandler={() => onClickHandler(songList[index])}
							song={song.name} order={index + 1} />)
					}
				</div>
			</div>
			<audio ref={audioElement} src={actualSong && "https://playground.4geeks.com" + actualSong.url} autoPlay type="audio.mp3" />
			<PlayerFooter
				isPlayPauseHandler={() => isPlayPauseHandler()}
				onBackwardHandler={() => onBackwardHandler()}
				onForwardHandler={() => onForwardHandler()}
				songList={songList}
				isPlayPause={isPlayPause}
				setIsPlayPause={setIsPlayPause} />
		</div>

	);
};

export default Home;
