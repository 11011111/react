import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import dialogsReducer from "./dialogsReducer";


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
          },
          sidebar: {}
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
          this._state.profilePage = profileReducer(this._state.profilePage, action);
          this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
          this._state.sidebar = sidebarReducer(this._state.sidebar, action);

          this._callSubscruber(this._state);
     }

};








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