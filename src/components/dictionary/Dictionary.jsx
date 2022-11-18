import DictWords from "./DictWords";
import DictAdd from "./DictAdd";
import "./Dictionary.scss";

const Dictionary = (props) => {
  const wordsDictionary = props.data.map((word) => (
    <DictWords
      key={word.id}
      english={word.english}
      transcription={word.transcription}
      russian={word.russian}
      tags={word.tags}
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
      <DictAdd />
      {wordsDictionary}
    </section>
  );
};

export default Dictionary;
