import "./ModalWithForm.css";

function ModalWithForm({ children, buttonText, title, isOpen, closeActiveModal, handleSubmit }) {
  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button  onClick={closeActiveModal} type="button" className="modal__close"></button>
        <form className="modal__form" onSubmit={handleSubmit}>
          {children}
          <button  type="submit" className="modal__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;