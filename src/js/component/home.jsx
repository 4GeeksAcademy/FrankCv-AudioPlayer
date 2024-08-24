import React, { useRef, useState, useEffect } from "react";
import List from "./List.jsx";
import PlayerFooter from "./playerFooter";

const Home = () => {
	const [songList, setSongList] = useState([]);
	const [isPlayPause, setIsPlayPause] = useState(false);
	const [actualSong, setActualSong] = useState(["/sound/files/mario/songs/castle.mp3", 1]);
	const [index, setIndex] = useState(0);
	const audioElement = useRef(null);
	useEffect(() => {
		getAllSongs()

		setIndex()
	}, [audioElement])

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
	function setActualSongHandler(id) {
		const [{ 'url': url, 'id': songid }] = [...songList.filter((e) => parseInt(e.id) === parseInt(id))]
		const arr = [url, songid]
		console.log(arr)
		return arr
	}
	function onClickHandler(e) {
		setIsPlayPause(true)
		setIndex(songList.findIndex(e => parseInt(e.id) === parseInt(actualSong[1]) && e.url === actualSong[0]))
		setActualSong(setActualSongHandler(e.currentTarget.id))
		console.log(index)

	}
	const onBackwardHandler = () => {
		console.log(index)
		// audioElement.current.pause()
		setIndex(prev => prev - 1)

		console.log(audioElement.current.src)
		// if (index === 0) {
		// 	setIndex(songList.length - 1)
		// 	setActualSong(songList[index].url, songList[index].id)
		// } else {
		// 	setActualSong(songList[index].url, songList[index].id)
		// }

		// audioElement.current.play()
	}
	const onForwardHandler = () => {
		audioElement.current.pause()
		console.log(songList)
		console.log(actualSong)
		console.log(index)
		if (index === (songList.length - 1)) {
			index = 0
			setActualSong([songList[index], songList[index].id])
			audioElement.current.src
		} else {
			setActualSong(songList[index + 1], songList[index].id)
		}
		audioElement.current.play()
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
			<PlayerFooter url={`https://playground.4geeks.com${actualSong[0]}`} audioElement={audioElement} onBackwardHandler={() => onBackwardHandler()} onForwardHandler={() => onForwardHandler()} songList={songList} isPlayPause={isPlayPause} setIsPlayPause={setIsPlayPause} actualSong={actualSong[0]} />
		</div>

	);
};

export default Home;
