import { observer, inject } from "mobx-react";
import { useState } from "react";
import { ButtonChangeCard } from "../../components/buttons/Buttons";
import WordCard from "../../components/wordCard/WordCard";

import "./TrainPage.scss";

const TrainPage = (props) => {
  const { dataWords } = props;
  const { initial = 1 } = props;
  const [index, setIndex] = useState(initial);
  const [countWord, setCountWord] = useState(0);

  const getNextCard = () => {
    if (index === dataWords.length) {
      setIndex(initial);
    } else {
      setIndex(index + initial);
    }
  };

  const getPrevCard = () => {
    if (index === 1) {
      setIndex(dataWords.length);
    } else {
      setIndex(index - initial);
    }
  };

  const incCountWord = () => {
    setCountWord((countWord) => countWord + 1);
  };

  const wordsElements = dataWords.map((word, i) => (
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
        {index}/{dataWords.length}
      </div>
    </div>
  );
};

export default inject(({ wordStore }) => {
  const { dataWords } = wordStore;

  return { dataWords };
})(observer(TrainPage));
