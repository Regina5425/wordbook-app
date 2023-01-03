import { useState, useEffect } from "react";
import { Button } from "../buttons/Buttons";

const WordEdit = (props) => {
  const [value, setValue] = useState({
    english: props.words.english,
    transcription: props.words.transcription,
    russian: props.words.russian,
    tags: props.words.tags,
  });
  const [invalid, setInvalid] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(
    (e) => {
      if (
        value.english === "" ||
        value.transcription === "" ||
        value.russian === "" ||
        value.tags === ""
      ) {
        setInvalid(true);
        setDisabled(true);
      } else {
        setInvalid(false);
        setDisabled(false);
      }
    },
    [value.english, value.transcription, value.russian, value.tags]
  );

  const onChangeValue = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleChanges = (e) => {
    e.preventDefault();
    if (invalid) {
      console.log("error");
    } else {
      props.saveChanges(props.wordId, value);
      props.closeBlock();
    }
  };

  return (
    <form className='dict__list' onSubmit={handleChanges}>
      <input
        onChange={onChangeValue}
        type='text'
        name='english'
        className={
          invalid
            ? "dict__input dict__input--error"
            : "dict__input dict__input--edit"
        }
        value={value.english}
      />
      <input
        onChange={onChangeValue}
        type='text'
        name='transcription'
        className={
          invalid
            ? "dict__input dict__input--error"
            : "dict__input dict__input--edit"
        }
        value={value.transcription}
      />
      <input
        onChange={onChangeValue}
        type='text'
        name='russian'
        className={
          invalid
            ? "dict__input dict__input--error"
            : "dict__input dict__input--edit"
        }
        value={value.russian}
      />
      <input
        onChange={onChangeValue}
        type='text'
        name='tags'
        className={
          invalid
            ? "dict__input dict__input--error"
            : "dict__input dict__input--edit"
        }
        value={value.tags}
      />
      <Button
        className={disabled ? "dict__btn disabled" : "dict__btn dict__btn--yes"}
        disabled={disabled}
      >
        Сохранить
      </Button>
      <Button
        type='button'
        onClick={props.closeBlock}
        className='dict__btn dict__btn--no'
      >
        Отмена
      </Button>
    </form>
  );
};

export default WordEdit;
