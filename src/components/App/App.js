import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { Route, Routes, useLocation } from 'react-router-dom';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import PageNotFound from '../PageNotFound/PageNotFound';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';

function App() {

  const { pathname } = useLocation();

  return (
    <div className="App">
      {pathname === '/' || pathname === '/movies' || pathname === '/saved-movies' || pathname === '/profile' ? <Header /> : <></>}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      {pathname === '/' || pathname === '/movies' || pathname === '/saved-movies' ? <Footer /> : <></>}
    </div>
  );
}

export default App;
