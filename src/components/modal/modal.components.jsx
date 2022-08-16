import Modal from '@mui/material/Modal';
import "./modal.styles.scss";

const ModalCustom = ({open,handleClose,handleSubmit,name,contact,email}) =>{

    return(
        <Modal
        onClose={handleClose}
        open={open}
        className="modal-container"
      >
      <div className="form-container">
      <input type='text' className="input-box" placeholder={name}/>
      <input type='text' className="input-box" placeholder={contact}/>
      <input type='text' className="input-box" placeholder={email}/>
      <div className="button-container">
      <button className="button button-cancel" onClick={handleClose}>CANCEL</button>
      <button className="button button-submit" onClick={handleSubmit}>SUBMIT</button>
      </div>
      </div>
      </Modal>
    )

}

export default ModalCustom;