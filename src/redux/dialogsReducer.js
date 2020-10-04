const ADD_MESS = 'ADD-MESSAGE';
const UPDATE_TEXT_MESSAGE = 'UPDATE-TEXT-MESSAGE';


const dialogsReducer = (state, action) => {


     switch (action.type) {
          case ADD_MESS:
               let newMessObj = {
                    id: 4,
                    message: state.newMess
               };

               state.message.push(newMessObj);
               state.newMess = '';
               return state;

          case UPDATE_TEXT_MESSAGE :
               state.newMess = action.newText;
               return state;

          default:
               return state;
     }
}

export const sendMessageActionCreator = () => ({ type: ADD_MESS });
export const updateTextMessage = ( text) =>
    ({ type: UPDATE_TEXT_MESSAGE, newText: text });


export default dialogsReducer;