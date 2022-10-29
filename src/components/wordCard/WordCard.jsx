import { useState } from "react";
import Translate from "../translate/Translate";
import { ButtonTrans } from "../buttons/Buttons";
import "./WordCard.scss";

const WordCard = () => {
  const [isShowed, setIsShowed] = useState(false);

  const changeShow = () => {
    setIsShowed(true);
  };

  return (
    <div className='word'>
      <h2 className='word__random'>Слово дня</h2>
      <div className='word__card'>
        <h2 className='word__word'>Word</h2>
        <p className='word__pron'>[wərd]</p>
        <div onClick={changeShow}>
          {isShowed ? <Translate /> : <ButtonTrans name='Перевод' />}
        </div>
      </div>
    </div>
  );
};

export default WordCard;
