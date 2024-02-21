import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import Layout from './Layout';
import SongForm from '../components/CreateSong'
import HomePage from '../components/HomePage/HomePage';
import PlaylistForm from '../components/PlaylistForm/PlaylistForm';
import SongDetail from '../components/SongDetail/SongDetail';

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
        path:'playlist-form',
        element: <PlaylistForm/>
      },
      {
        path:'songs/:songId',
        element:<SongDetail/>
      }
    ],
  },
]);
