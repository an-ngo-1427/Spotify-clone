import { useDispatch, useSelector } from "react-redux";
import OpenModalButton from "../OpenModalButton";
import EditPlaylist from "../EditPlaylist/EditPlaylist";
import { deletePlaylistThunk } from "../../redux/playlist";
import Songs from './Songs'

function Playlist({ playlist, onDelete }) {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch()
    const songs = playlist.songs

    const deletePlaylist = async e => {
        e.preventDefault()
        dispatch(deletePlaylistThunk(playlist.id))
        onDelete();
    }

    console.log('SONGS', songs)

    return (
        <div>
            {playlist && (
                <>
                    <h2>{playlist.title}</h2>
                    <h4>{playlist.description}</h4>
                    <h3>{sessionUser.username}</h3>
                    <OpenModalButton
                        buttonText='...'
                        modalComponent={<EditPlaylist playlist={playlist} />}
                    />
                    <ul>
                        {songs.map(song => (
                            <div key={song.id} className="playlist-songs">
                                <div className="playlist-song-left">
                                    <img src={song.image_url} alt={song.title} className="playlist-song-image" />
                                    <div className="playlist-song-info">
                                        <li>{song.title}</li>
                                        <li>{song.artist.first_name} {song.artist.last_name}</li>
                                    </div>
                                </div>
                                <i className="fa-regular fa-circle-play"></i>
                            </div>
                        ))}
                    </ul>
                    <OpenModalButton
                        buttonText='Add Song'
                        modalComponent={<Songs playlist={playlist} />}
                    />
                    <button onClick={deletePlaylist}>Delete Playlist</button>
                </>
            )}
        </div>
    );
}

export default Playlist;
