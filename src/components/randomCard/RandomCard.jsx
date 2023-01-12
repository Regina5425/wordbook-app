import "./RandomCard.scss";
import WordCard from "../wordCard/WordCard";

const RandomCard = ({randomWord}) => {
  return (
    <div className='random'>
      <h2 className='random__title'>Слово дня</h2>
      <WordCard className='word' randomWord={randomWord} />
    </div>
  );
};

export default RandomCard;
