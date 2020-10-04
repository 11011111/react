import React from "react";
import s from './Post.module.css';

const Post = (props) => {
     return (
         <div className={s.item}>
              <img
                  src="https://sun9-51.userapi.com/impf/c630718/v630718831/152c/V91IzHucH9g.jpg?size=50x0&quality=88&crop=14,0,927,927&sign=da349ab64b558c6be165746b444db460&ava=1"
                  alt=""/>
              {props.message}
              <div>
                   <span> { props.count } Like</span>
              </div>
         </div>
     );
};

export default Post;