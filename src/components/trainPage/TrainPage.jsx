import { useContext } from "react";
import { ButtonChangeCard } from "../buttons/Buttons";
import WordCard from "../wordCard/WordCard";
import { useState } from "react";
import { DataContext } from "../../context/context";

import "./TrainPage.scss";

const TrainPage = (props) => {
  const { initial = 1 } = props;
  const [index, setIndex] = useState(initial);
  const [countWord, setCountWord] = useState(0);

  const context = useContext(DataContext);

  const getNextCard = () => {
    if (index === context.length) {
      setIndex(initial);
    } else {
      setIndex(index + initial);
    }
  };

  const getPrevCard = () => {
    if (index === 1) {
      setIndex(context.length);
    } else {
      setIndex(index - initial);
    }
  };

  const incCountWord = () => {
    setCountWord((countWord) => countWord + 1);
  };

  const wordsElements = context.map((word, i) => (
    <WordCard
      key={word.id}
      english={word.english}
      transcription={word.transcription}
      russian={word.russian}
      className={
        index === i + 1 ? "word word--active fade" : "word word--hidden"
      }
      incCountWord={incCountWord}
    />
  ));

  return (
    <div className='train'>
      <div className='train__count'>Изучено слов: {countWord}</div>
      <div className='train__page'>
        <ButtonChangeCard
          onClick={getPrevCard}
          className='btn-arrow btn-arrow--prev'
        />
        {wordsElements}
        <ButtonChangeCard
          onClick={getNextCard}
          className='btn-arrow btn-arrow--next'
        />
      </div>
      <div className='train__index'>
        {index}/{context.length}
      </div>
    </div>
  );
};

export default TrainPage;
