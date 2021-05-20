import { LoadingSpinner } from "./Loading";
import { flashTypeEnum } from "./ContactForm";

const FlashMessage = ({ flash, closeFlash }) => {
  const style = flash.type === flashTypeEnum.error ? "error" : "success";
  return (
    <div className={`flash flash--${style}`}>
      <div className="flash__message">{flash.message}</div>
      {flash.type === flashTypeEnum.loading && <LoadingSpinner scale={0.5} />}
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
