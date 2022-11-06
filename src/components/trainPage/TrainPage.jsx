import { ButtonChangeCard } from "../buttons/Buttons";
import WordCard from "../wordCard/WordCard";
import "./TrainPage.scss";
import { useState } from "react";
import wordsDB from "../../wordsDB";

const TrainPage = (props) => {
  const { initial = 1, ...restProps } = props;
  const [index, setIndex] = useState(initial);
  const total = wordsDB.length;

  const getNextCard = () => {
    if (index === wordsDB.length) {
      setIndex(initial);
    } else {
      setIndex(index + initial);
    }
  };

  const getPrevCard = () => {
    if (index === 1) {
      setIndex(wordsDB.length);
    } else {
      setIndex(index - initial);
    }
  };

  return (
    <div className='train'>
      <div className='train__page'>
        <ButtonChangeCard
          onClick={getPrevCard}
          className='btn-arrow btn-arrow--prev'
        />
        {wordsDB.map((word, i) => (
          <WordCard
            key={word.id}
            english={word.english}
            transcription={word.transcription}
            russian={word.russian}
            className={
              index === i + 1 ? "word word--active fade" : "word word--hidden"
            }
          />
        ))}
        <ButtonChangeCard
          onClick={getNextCard}
          className='btn-arrow btn-arrow--next'
        />
      </div>
      <div className='train__index'>
        {index}/{total}
      </div>
    </div>
  );
};

export default TrainPage;
