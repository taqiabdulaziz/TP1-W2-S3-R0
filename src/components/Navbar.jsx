import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg" style={{ backgroundColor: '#743cf9' }}>
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/" style={{ color: 'rgba(255,255,255,0.85)' }}>Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/education" style={{ color: 'rgba(255,255,255,0.85)' }}><Link to={'education'} />Pendidikan</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/schedule" style={{ color: 'rgba(255,255,255,0.85)' }}>Jadwal Kuliah</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/career" style={{ color: 'rgba(255,255,255,0.85)' }}>Karir</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/activity" style={{ color: 'rgba(255,255,255,0.85)' }}>Aktifitas</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;