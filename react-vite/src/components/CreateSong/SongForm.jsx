import { useState,useEffect} from "react";
import { useDispatch } from "react-redux";
import { createSongThunk } from "../../redux/createSong";

function SongForm(){
    const [audio,setAudio] = useState()
    const [title,setTitle] = useState()
    const [album,setAlbum] = useState()
    const [image_url,setImageUrl] = useState()
    const [errorObj,setErrorObj] = useState({})
    const [formErr,setFormError] = useState(false)
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append("audio", audio);
        formData.append("title", title)
        formData.append('album',album)
        formData.append('image_url',image_url)
        formData.append('submit',true)
        // formData.append('fileName',audio.name)
        // aws uploads can be a bit slow—displaying
        // some sort of loading message is a good idea


        dispatch(createSongThunk(formData))
        .then((response)=>{console.log(response)})

    }

    useEffect(()=>{
        const errors = {}
        if(!audio) errors.audio = 'Audio file is required'
        if(!title) errors.title = 'Song title is required'

        if(Object.keys(errors).length) setFormError(true)
        setErrorObj(errors)
    },[audio,title])
    return(
        <>
            <form
                onSubmit={handleSubmit}
                encType="multipart/form-data"
            >
                {/* <input placeholder="Song title"/> */}
                <input
                    type="text"
                    name = "title"
                    placeholder="Title of the song"
                    onChange={(e)=>setTitle(e.target.value)}
                />
                {errorObj}
                <select
                    name = "album"
                    value = ""
                    onChange={(e)=>setAlbum(e.target.value)}
                >
                    <option>Select an album</option>
                </select>
                <input
                    name='image_url'
                    onChange={(e)=>setImageUrl(e.target.value)}
                />

                <input type='file' placeholder="song file"
                    name='audio'
                    accept=".mp3"
                    onChange={(e)=>setAudio(e.target.files[0])}

                />

                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default SongForm
