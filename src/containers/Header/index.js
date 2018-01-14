import React from 'react';
import { Link } from 'react-router-dom';
import FaIcon from './../../components/Icons/fa-icon';
import './index.scss';


const toggleMenu = () => {
  const MenuButton = document.getElementById('menu-button');
  const SideBar = document.querySelector('.sidebar');
  MenuButton.classList.toggle('active');
  SideBar.classList.toggle('open');
};


export default () => (
  <div id="header" className="header" >
    <a className="menu-button" id="menu-button" onClick={() => toggleMenu()}>
      <i className="bar" />
      <i className="bar" />
      <i className="bar" />
    </a >
    <Link className="logo" to="/"><b>Free Courses</b></Link>
    <Link className="contribute-link" to="/contribute">Add a Course</Link>
    <span className="ellipsi" onClick={() => { document.querySelector('.sub-menu').classList.toggle('active'); }}>
      <FaIcon icon="fa-ellipsis-v" />
    </span>

    <div className="sub-menu" onClick={() => { document.querySelector('.sub-menu').classList.toggle('active'); }}>
      <Link to="/contribute" className="link">Contribute</Link>
    </div>
  </div>
);

