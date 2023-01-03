import { useState } from "react";
import { Button } from "../buttons/Buttons";

const DictAdd = (props) => {
  const [english, setEnglish] = useState("");
  const [transcription, setTranscription] = useState("");
  const [russian, setRussian] = useState("");
  const [tags, setTags] = useState("");
  const [valid, setValid] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const newWord = {
      english,
      transcription,
      russian,
      tags,
    };

    if (
      newWord.english === "" ||
      newWord.russian === "" ||
      newWord.transcription === "" ||
      newWord.tags === ""
    ) {
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
          value={english}
          type='text'
          className={valid ? "dict__input dict__input--error" : "dict__input"}
          onChange={(e) => setEnglish(e.target.value)}
        />
        <input
          value={transcription}
          type='text'
          className={valid ? "dict__input dict__input--error" : "dict__input"}
          onChange={(e) => setTranscription(e.target.value)}
        />
        <input
          value={russian}
          type='text'
          className={valid ? "dict__input dict__input--error" : "dict__input"}
          onChange={(e) => setRussian(e.target.value)}
        />
        <input
          value={tags}
          type='text'
          className={valid ? "dict__input dict__input--error" : "dict__input"}
          onChange={(e) => setTags(e.target.value)}
        />
        <Button className='dict__btn dict__btn--yes'>Добавить</Button>
        <Button onClick={cancelAdd} className='dict__btn dict__btn--no'>
          Отмена
        </Button>
      </form>
    </div>
  );
};

export default DictAdd;
