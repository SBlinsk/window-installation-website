import "./modal.css"


const Modal = ({ modalClose, children }) => {
  return (
    <div className="modal">
      <button className="close-button" onClick={modalClose}>X</button>
      {children}
    </div>
  );
};

export default Modal;
