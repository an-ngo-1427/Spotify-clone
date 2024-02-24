import { useDispatch, useSelector } from "react-redux";
import { getSongsThunk } from "../../redux/song";
import { useEffect } from "react";
import "./Playlist.css";
import { addSongToPlaylist, getUserPlaylistsThunk } from "../../redux/playlist";

function Songs({ playlist }) {
  const dispatch = useDispatch();
  const allSongs = useSelector((state) => Object.values(state.songs));
  const allAlbums = useSelector((state) => Object.values(state.newAlbum));

  useEffect(() => {
    dispatch(getSongsThunk());
  }, [dispatch]);

  const addToPlaylist = async (song) => {
    await dispatch(addSongToPlaylist(song, playlist.id));
    await dispatch(getUserPlaylistsThunk());
  };

  return (
    <div className="add-song-container">
      <h2>Let&apos;s find something for your playlist</h2>
      {allSongs.map((song) => {
        const album = allAlbums.find((al) => al.id === song.album_id);
        return (
          <div key={song.id} className="song-item">
            <div className="song-details">
              <img
                src={song.image_url}
                alt={song.title}
                className="playlist-song-image"
              />
              <div className="song-info">
                <li className="playlist-song-title">{song.title}</li>
                <span>{album?.title}</span>
              </div>
            </div>
            <button
              className="add-playlist-button"
              onClick={() => addToPlaylist(song)}
            >
              Add to playlist
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Songs;
