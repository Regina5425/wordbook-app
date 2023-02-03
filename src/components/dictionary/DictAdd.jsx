import { useState } from "react";
import { nanoid } from 'nanoid';
import { Button } from "../buttons/Buttons";

const DictAdd = (props) => {
  const [english, setEnglish] = useState("");
  const [transcription, setTranscription] = useState("");
  const [russian, setRussian] = useState("");
  const [tags, setTags] = useState("");
  const [valid, setValid] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newWord = {
			id: nanoid(),
      english,
      transcription,
      russian,
      tags,
    };

    const regexpEng = /^[A-Za-z]+$/gm;
    const regexpRus = /^[А-Яа-я]+$/gm;

    const validation =
      !newWord.english ||
      regexpRus.test(newWord.english) ||
      !newWord.russian ||
      regexpEng.test(newWord.russian) ||
      !newWord.transcription ||
      regexpRus.test(newWord.transcription) ||
      !newWord.tags ||
      regexpEng.test(newWord.tags);

    if (validation) {
      setValid(true);
    } else {
      setValid(false);
      props.addNewWord(newWord);
    }

    setEnglish("");
    setTranscription("");
    setRussian("");
    setTags("");
  };

  const cancelAdd = () => {
    setEnglish("");
    setTranscription("");
    setRussian("");
    setTags("");
  };

  return (
    <div className='dict__wrapper'>
      <form className='dict__list' onSubmit={onSubmitHandler}>
        <input
          placeholder='слово'
          value={english}
          type='text'
          className={valid ? "dict__input dict__input--error" : "dict__input"}
          onChange={(e) => setEnglish(e.target.value)}
        />
        <input
          placeholder='транскрипция'
          value={transcription}
          type='text'
          className={valid ? "dict__input dict__input--error" : "dict__input"}
          onChange={(e) => setTranscription(e.target.value)}
        />
        <input
          placeholder='перевод'
          value={russian}
          type='text'
          className={valid ? "dict__input dict__input--error" : "dict__input"}
          onChange={(e) => setRussian(e.target.value)}
        />
        <input
          placeholder='категория'
          value={tags}
          type='text'
          className={valid ? "dict__input dict__input--error" : "dict__input"}
          onChange={(e) => setTags(e.target.value)}
        />
        <Button className='dict__btn dict__btn--add'>Добавить</Button>
        <Button onClick={cancelAdd} className='dict__btn dict__btn--cancel'>
          Отмена
        </Button>
      </form>
    </div>
  );
};

export default DictAdd;
