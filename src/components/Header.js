import React from 'react';
import '../styles/Header.css';
// Header.js


function Header() {
  return (
    <div className="header">
      {/* Spotify logo */}
      <img
        className="header__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/768px-Spotify_logo_without_text.svg.png"
        alt="Spotify Logo"
      />

      {/* Search bar */}
      <div className="header__search">
        <input
          className="header__searchInput"
          type="text"
          placeholder="Search for Artists, Songs, or Podcasts"
        />
      </div>

      {/* User info and icons */}
      <div className="header__right">
        {/* User profile image */}
        <img
          className="header__userAvatar"
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="User Avatar"
        />
        {/* User name */}
        <h4 className="header__userName">User Name</h4>
      </div>
    </div>
  );
}


export default Header;