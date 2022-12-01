import { ButtonChangeCard } from "../buttons/Buttons";
import WordCard from "../wordCard/WordCard";
import { useState } from "react";

import "./TrainPage.scss";

const TrainPage = (props) => {
  const { initial = 1 } = props;
  const [index, setIndex] = useState(initial);

  const getNextCard = () => {
    if (index === props.data.length) {
      setIndex(initial);
    } else {
      setIndex(index + initial);
    }
  };

  const getPrevCard = () => {
    if (index === 1) {
      setIndex(props.data.length);
    } else {
      setIndex(index - initial);
    }
  };

  const wordsElements = props.data.map((word, i) => (
    <WordCard
      key={word.id}
      english={word.english}
      transcription={word.transcription}
      russian={word.russian}
      className={
        index === i + 1 ? "word word--active fade" : "word word--hidden"
      }
    />
  ));

  return (
    <div className='train'>
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
        {index}/{props.data.length}
      </div>
    </div>
  );
};

export default TrainPage;
