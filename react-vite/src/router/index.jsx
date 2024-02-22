import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import Layout from './Layout';
import SongForm from '../components/CreateSong'
import HomePage from '../components/HomePage/HomePage';
import Playlist from '../components/Playlist';
import SongDetail from '../components/SongDetail/SongDetail';
import AlbumDetails from '../components/AlbumDetails';
import AlbumForm from '../components/AlbumForm';
import AllAlbums from '../components/AllAlbums/AllAlbums';
export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginFormPage />,
      },
      {
        path: "signup",
        element: <SignupFormPage />,
      },
      {
        path:"aws-testing",
        element:<SongForm/>
      },
      {
        path:'/playlists/:playlistId',
        element: <Playlist/>
      },
      {
        path:'/songs/:songId',
        element:<SongDetail/>
      },
      {
        path:'/albums/:albumId',
        element:<AlbumDetails/>
      },
      {
        path:'/albums/new',
        element:<AlbumForm/>
      },
      {
        path:'albums',
        element: <AllAlbums />
      }
    ],
  },
]);
