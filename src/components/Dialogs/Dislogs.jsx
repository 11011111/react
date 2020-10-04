import React from "react";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import TextMessage from "./TextMessage/TextMessage";


const Dialogs = (props) => {



     let dialogElements = props.state.dialog.map(d => <DialogItem name={d.name} id={d.id}/>);
     let messagesElements = props.state.message.map(m => <Message message={m.message}/>);


     return (
         <div className={s.dialogs}>
              <div className={s.dialogsItems}>

                   {dialogElements}

              </div>
              <div className={s.messages}>

                   {messagesElements}
                   <div className="textMessage">
                        <TextMessage dispatch={props.dispatch}
                                     newMess={props.state.newMess}
                        />
                   </div>
              </div>

         </div>

     );
};

export default Dialogs;