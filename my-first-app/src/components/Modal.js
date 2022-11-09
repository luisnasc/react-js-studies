function Modal(props){

    function cancelHandler(){
        props.onCancel();
    }
    function confirmHandler(){
        props.onConfirm();
    }
    return (
        <div className='modal'>
            <p>Are you sure?</p>
            <buttom className='btn btn--alt' onClick={cancelHandler}>Cancel</buttom>
            <buttom className='btn' onClick={confirmHandler}>Ok</buttom>
        </div>
    );
}

export default Modal;