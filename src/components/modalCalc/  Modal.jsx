import "./modal.css"


const Modal = ({ modalClose, children,inlineStyle }) => {
  return (
    <div className="modal"style={inlineStyle}>
      <button className="close-button" onClick={modalClose}>X</button>
      {children}
    </div>
  );
};

export default Modal;
