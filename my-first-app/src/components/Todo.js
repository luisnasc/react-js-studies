import {useState} from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {

  const [modalIsOpen, setModelIsOpen] = useState(false);

  function deleteHandler(){
    setModelIsOpen(true);
  }

  function cancelHandler(){
    setModelIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <span>Some description </span>
        <button className="btn" onClick={deleteHandler} >Delete</button>
      </div>
      {/* {modalIsOpen ? <Modal /> : null} */}
      {modalIsOpen && <Modal onCancel={cancelHandler} onConfirm={cancelHandler} /> }
      {modalIsOpen && <Backdrop onCancel={cancelHandler} /> }
      
    </div>
  );
}

export default Todo;
