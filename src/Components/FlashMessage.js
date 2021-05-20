const FlashMessage = ({ flash, closeFlash }) => {
  return (
    <div className={`flash flash--${flash.type}`}>
      <div className="flash__message">{flash.message}</div>
      <button
        className="flash__btn close-btn"
        onClick={() => closeFlash(flash.id)}
      >
        X
      </button>
    </div>
  );
};

export default FlashMessage;
