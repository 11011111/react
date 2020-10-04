import React from "react";
import s from './Header.module.css';

const Header = () => {
     return (
         <header className={s.header}>
              <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/VK.com-logo.svg/1200px-VK.com-logo.svg.png"
                  alt=""/>
         </header>
     );
};


export default Header;