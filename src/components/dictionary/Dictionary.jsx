import { observer, inject } from "mobx-react";
import DictWords from "./DictWords";
import DictAdd from "./DictAdd";
import "./Dictionary.scss";

const Dictionary = ({ dataWords, addNewWord, deleteWord, updateWord }) => {
  const wordsDictionary = dataWords.map((word) => (
    <DictWords
      key={word.id}
      id={word.id}
      english={word.english}
      transcription={word.transcription}
      russian={word.russian}
      tags={word.tags}
      onDelete={deleteWord}
      updateWord={updateWord}
    />
  ));

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
      <DictAdd addNewWord={addNewWord} />
      {wordsDictionary}
    </section>
  );
};

export default inject(({ wordStore }) => {
  const { dataWords, addNewWord, deleteWord, updateWord } = wordStore;

  return {
    dataWords,
    addNewWord,
    deleteWord,
    updateWord,
  };
})(observer(Dictionary));
