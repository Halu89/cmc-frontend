import { LoadingSpinner } from "./Loading";
import { flashTypeEnum } from "./ContactForm";

const FlashMessage = ({ flash, closeFlash }) => {
  let style;
  switch (flash.type) {
    case flashTypeEnum.error:
      style = flashTypeEnum.error;
      break;
    case flashTypeEnum.warning:
      style = flashTypeEnum.warning;
      break;
    case flashTypeEnum.disclaimer:
      style = "warning";
      break;
    default:
      style = flashTypeEnum.success;
  }

  return (
    <div className={`flash flash--${style}`}>
      <div className="flash__message">{flash.message}</div>
      {flash.type === flashTypeEnum.loading && <LoadingSpinner scale={0.5} />}
      {flash.type !== flashTypeEnum.disclaimer && (
        <button
          className="flash__btn close-btn"
          onClick={() => closeFlash(flash.id)}
        >
          X
        </button>
      )}
    </div>
  );
};

export default FlashMessage;
