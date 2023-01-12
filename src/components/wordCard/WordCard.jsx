import { useState, useRef, useEffect } from "react";
import Translate from "../translate/Translate";
import {Button} from '../buttons/Buttons';
import "./WordCard.scss";

const WordCard = (props) => {
	const {english, transcription, russian, className, incCountWord, randomWord} = props;

  const [isShowed, setIsShowed] = useState(false);
	const myRef = useRef();

  const changeShow = () => {
    setIsShowed(!isShowed);
  };

	useEffect(() => {
		myRef.current.focus();
	}, [])

  return (
    <div className={className}>
      <h2 className='word__word'>{english || randomWord.english}</h2>
      <p className='word__pron'>{transcription || randomWord.transcription}</p>
      <div onClick={changeShow}>
        {isShowed ? <Translate ref={myRef} russian={russian || randomWord.russian} /> : <Button ref={myRef} onClick={incCountWord} className='trans__btn'>Перевод</Button>}
      </div>
    </div>
  );
};

export default WordCard;
