import "./WordCard.scss";

const WordCard = () => {
  return (
    <div className='word-card'>
      <h2 className='word-card__random'>Слово дня</h2>
      <button className='word-card__btn'>Word</button>
    </div>
  );
};

export default WordCard;
