import { useState } from "react";
import { Button } from "../buttons/Buttons";
import Words from "./Words";
import WordEdit from "./WordEdit";

const DictWord = (props) => {
  const { english, transcription, tags, russian } = props;

  const [isEdited, setIsEdited] = useState(false);

  const setEditMode = () => {
    setIsEdited(true);
  };

  const onCloseBlock = () => {
    setIsEdited(!isEdited);
  };

  return (
    <div className='dict__wrapper'>
      {isEdited ? (
				<WordEdit words={props} closeBlock={onCloseBlock}/>
      ) : (
        <ul className='dict__list'>
          <Words name={english} />
          <Words name={transcription} />
          <Words name={russian} />
          <Words name={tags} />
          <Button onClick={setEditMode} className='dict__btn dict__btn--yes'>
            Редактировать
          </Button>
          <Button className='dict__btn dict__btn--no'>Удалить</Button>
        </ul>
      )}
    </div>
  );
};

export default DictWord;