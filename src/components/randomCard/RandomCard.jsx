import "./RandomCard.scss";
import WordCard from "../wordCard/WordCard";

const RandomCard = (props) => {
  return (
    <div className='random'>
      <h2 className='random__title'>Слово дня</h2>
      <WordCard className='word' />
    </div>
  );
};

export default RandomCard;
