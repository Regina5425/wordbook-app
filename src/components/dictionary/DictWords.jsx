import { useState } from "react";
import { Button } from "../buttons/Buttons";
import Words from "./Words";
import WordEdit from "./WordEdit";

const DictWord = (props) => {
  const { english, transcription, tags, russian } = props;

  const [isEdited, setIsEdited] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  const edit = () => {
    setIsEdited(!isEdited);
  };

  const closeBlock = () => {
    setIsClosed(!isClosed);
    setIsEdited(!isEdited);
  };

  return (
    <div className='dict__wrapper'>
        {isEdited ? (
          <ul className='dict__list'>
            <WordEdit />
            <WordEdit />
            <WordEdit />
            <WordEdit />
            <Button className='dict__btn dict__btn--yes'>Сохранить</Button>
            <Button onClick={closeBlock} className='dict__btn dict__btn--no'>
              Отмена
            </Button>
          </ul>
        ) : (
          <ul className='dict__list'>
            <Words name={english} />
            <Words name={transcription} />
            <Words name={russian} />
            <Words name={tags} />
            <Button onClick={edit} className='dict__btn dict__btn--yes'>
              Редактировать
            </Button>
            <Button className='dict__btn dict__btn--no'>Удалить</Button>
          </ul>
        )}
    </div>
  );
};

export default DictWord;
