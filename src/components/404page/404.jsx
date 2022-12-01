import "./404.scss";

const Page404 = () => {
  return (
    <div className='box'>
      <div className='box__ghost'>
        <div className='symbol'></div>
        <div className='symbol'></div>
        <div className='symbol'></div>
        <div className='symbol'></div>
        <div className='symbol'></div>
        <div className='symbol'></div>

        <div className='box__ghost-container'>
          <div className='box__ghost-eyes'>
            <div className='box__eye-left'></div>
            <div className='box__eye-right'></div>
          </div>
          <div className='box__ghost-bottom'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className='box__ghost-shadow'></div>
      </div>

      <div className='box__description'>
        <div className='box__description-container'>
          <div className='box__description-title'>Упс!</div>
          <div className='box__description-text'>
            Кажется, мы не можем найти запрашиваемую страницу.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page404;
