import DictWord from "./DictWord";
import DictEdit from "./DictEdit";
import DictAdd from "./DictAdd";
import "./Dictionary.scss";
import { useState } from "react";
import wordsDB from "./../../wordsDB";

const Dictionary = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  //поменять значение state
  const [isChanged, setIsChanged] = useState(false);

  const editBlock = () => {
    setIsEdit(!isEdit);
  };

  const closeBlock = () => {
    setIsClosed(!isClosed);
    setIsEdit(!isEdit);
  };

  //обработчик на инпуты
  const changeValue = () => {
    setIsChanged(!isChanged);
    console.log(isChanged);
  };

  return (
    <section className='dict'>
      <h2 className='dict__title'>Словарь</h2>
      <div className='dict__wrapper'>
        <ul className='dict__list'>
          <li className='dict__item dict__sub'>Слово</li>
          <li className='dict__item dict__sub'>Транскрипция</li>
          <li className='dict__item dict__sub'>Перевод</li>
          <li className='dict__item dict__sub'>Категория</li>
        </ul>
      </div>
      <DictAdd />
      {isEdit
        ? wordsDB.map((word) => (
            <DictEdit
              key={word.id}
              changeValue={changeValue}
              cancel={closeBlock}
              english={word.english}
              transcription={word.transcription}
              russian={word.russian}
              tags={word.tags}
            />
          ))
        : wordsDB.map((word) => (
            <DictWord
              key={word.id}
              edit={editBlock}
              english={word.english}
              transcription={word.transcription}
              russian={word.russian}
              tags={word.tags}
            />
          ))}

      {/* рендер только одного комопнента */}
      {/* {isEdit ? (
        <DictEdit
					changeValue={changeValue}
          cancel={closeBlock}
          english='read'
          transcription='[ riːd ]'
          russian='читать'
          tags='глагол'
        />
      ) : (
        <DictWord
          edit={editBlock}
          english='read'
          transcription='[ riːd ]'
          russian='читать'
          tags='глагол'
        />
      )} */}
    </section>
  );
};

export default Dictionary;
