import React from "react";
import s from './Profile.module.css';


const ProfileInfo = () => {
     return (
         <div className={s.profileInfo}>
              <div>
                   <img src="https://www.aeroflot.ru/media/aflfiles/travelguide/ru/aer/sochi-khutor.jpg" alt=""/>
              </div>
              <div className={s.desrc}>
                   ava + description
              </div>
         </div>
     );
};


export default ProfileInfo;