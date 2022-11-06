import { useState } from "react";
import Translate from "../translate/Translate";
import {Button} from '../buttons/Buttons';
// import { ButtonTrans } from "../buttons/Buttons";
import "./WordCard.scss";

const WordCard = ({english, transcription, russian, className}) => {

  const [isShowed, setIsShowed] = useState(false);

  const changeShow = () => {
    setIsShowed(!isShowed);
  };

  return (
    <div className={className}>
      <h2 className='word__word'>{english}</h2>
      <p className='word__pron'>{transcription}</p>
      <div onClick={changeShow}>
        {isShowed ? <Translate russian={russian} /> : <Button className='trans__btn'>Перевод</Button>}
      </div>
    </div>
  );
};

WordCard.defaultProps = {
	english: 'universe',
	transcription: '[ˈjuːnɪvɜːs]',
	russian: 'вселенная',
	className: 'word'
}

export default WordCard;
