import React from "react";
import {sendMessageActionCreator, updateTextMessage} from "../../../redux/state";

const TextMessage = (props) => {


     let textMess = React.createRef();

     let sendMessage = () => {
          props.dispatch(sendMessageActionCreator());

     };

     let onTextChange = () => {                  // 2.Прописываем событие
          let text = textMess.current.value;     // 3. Получаем введенную букву
          let action = updateTextMessage(text);
          props.dispatch(action);         // 4. Отправляем на обработку в state
     };

  return (
      <div>
           <textarea name="textMessage"
                     ref={ textMess }
                     onChange={ onTextChange }   // 1. Создаем событие
                     value={ props.newMess}
                     cols="30" rows="10" />
           <br/>
           <button onClick={ sendMessage }>Отправить</button>
      </div>

  );
};

export default TextMessage;