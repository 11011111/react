import React from "react";
import s from "./Nav.module.css";
import {NavLink} from "react-router-dom";


const Nav = () => {
  return (
      <nav className={s.nav}>
           <ul>
                <li className={s.item} >
                     <NavLink to="/profile" activeClassName={s.activeLink} >Profile</NavLink>
                </li>
                <li className={s.item} >
                     <NavLink to="/dialogs" activeClassName={s.activeLink} >Messages</NavLink>
                </li>
                <li className={s.item} >
                     <NavLink to="" >Music</NavLink>
                </li>
                <li className={s.item} >
                     <NavLink to="" >Settings</NavLink>
                </li>
           </ul>
      </nav>
  );
};

export default Nav;