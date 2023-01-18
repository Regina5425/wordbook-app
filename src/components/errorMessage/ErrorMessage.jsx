import "./ErrorMessage.scss";

const ErrorMessage = () => {
  return (
    <div className='error'>
      <p className='error__text'>
        Произошла ошибка. Попробуйте обновить страницу или зайти попозже.
      </p>
      <p className='error__text'>
        Something went wrong. Please, try to restart page or come later.
      </p>
    </div>
  );
};

export default ErrorMessage;
