const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESS = 'ADD-MESSAGE';
const UPDATE_TEXT_MESSAGE = 'UPDATE-TEXT-MESSAGE';

let store = {
     _state: {
          profilePage: {
               postData: [
                    {id: 0, message: 'Привет! Как дела?', likeCount: "12"},
                    {id: 1, message: 'Это мой первый пост', likeCount: "4"}
               ],
               newPostText: '' //value
          },
          dialogsPage: {
               message: [
                    {id: 1, message: 'Привеeeт!'},
                    {id: 2, message: 'Привет'},
                    {id: 3, message: 'Как дела?'}
               ],
               newMess: '',   // работает
               dialog: [
                    {id: 1, name: 'Vika'},
                    {id: 2, name: 'Alex'},
                    {id: 3, name: 'Zachar'},
                    {id: 4, name: 'Largo'}
               ]
          }
     },
     _callSubscruber() {
          console.log('State changed');
     },

     getState() {
          debugger;
          return this._state;
     },
     subscribe(observer) {
          this._callSubscruber = observer;
     },

     dispatch(action){
          if ( action.type === ADD_POST ) {
               let newPost = {
                    id: 5,
                    message: this._state.profilePage.newPostText,
                    likeCount: 0
               };

               this._state.profilePage.postData.push(newPost);
               this._state.profilePage.newPostText = '';
               this._callSubscruber(this._state);

          } else if ( action.type === UPDATE_NEW_POST_TEXT ) {
               this._state.profilePage.newPostText = action.newText;
               console.log(this._state.profilePage.newPostText);
               this._callSubscruber(this._state);

          } else if ( action.type === ADD_MESS ) {
               let newMessObj = {
                    id: 4,
                    message: this._state.dialogsPage.newMess
               };

               this._state.dialogsPage.message.push(newMessObj);
               console.log(this._state.dialogsPage.message);
               this._state.dialogsPage.newMess = '';
               this._callSubscruber(this._state);

          } else if ( action.type === UPDATE_TEXT_MESSAGE ) {
               this._state.dialogsPage.newMess = action.newText;
               this._callSubscruber(this._state);
          }
     }

};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const sendMessageActionCreator = () => ({ type: ADD_MESS });
export const updateTextMessage = ( text) =>
    ({ type: UPDATE_TEXT_MESSAGE, newText: text });





//------------------------------------------------------------------------------------------------------------

// export const addMess = () =>{
//      let newMessObj = {
//           id: 4,
//           message: state.dialogsPage.newMess
//      };
//
//      state.dialogsPage.message.push(newMessObj);
//      console.log(state.dialogsPage.message);
//      state.dialogsPage.newMess = '';
//      rerenderEntireTree(state);
// };
//
// export const updateTextMessage = (newText) => {      // 5. Пишем обработчик в newText = передаются данные из UI
//         state.dialogsPage.newMess = newText;       // 6. Присваиваем для NewMess переданное значение из newText
//         rerenderEntireTree(state);                 // 7. Перерисовываем и прокидываем на props обратно в UI
// };



export default store;

window.store = store;