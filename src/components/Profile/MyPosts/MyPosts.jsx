import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";






const MyPosts = (props) => {
     let post = props.postData.map(p => <Post message={p.message} likeCount={p.likeCount}/>);


     let newPostElement = React.createRef();

     let addPost = () => {
          debugger;
          props.dispatch(addPostActionCreator());
     };


     let onPostChange = () => {
          let text = newPostElement.current.value;
          let action = updateNewPostTextActionCreator(text);
          props.dispatch(action);
     };


     return (
         <div className={s.myPosts}>

              <h3>My post</h3>

              <div>
                   <textarea
                       name="message"
                       ref={ newPostElement }
                       onChange={ onPostChange }
                       value={ props.newPostText }
                       cols="30" rows="10" />
                   <div>
                        <button onClick={ addPost }>Добавить пост</button>
                   </div>
              </div>
              <div className={ s.posts }>
                   { post }
              </div>
         </div>
     );
};

export default MyPosts;