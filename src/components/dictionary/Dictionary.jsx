// import { useContext } from "react";
import DictWords from "./DictWords";
import DictAdd from "./DictAdd";
import "./Dictionary.scss";
// import { DataContext } from "../../context/context";
import { observer } from "mobx-react";

// const Dictionary = (props) => {
//   const context = useContext(DataContext);

//   const wordsDictionary = context.map((word) => (
//     <DictWords
//       key={word.id}
//       id={word.id}
//       english={word.english}
//       transcription={word.transcription}
//       russian={word.russian}
//       tags={word.tags}
//       onDelete={props.onDelete}
// 			saveChanges={props.saveChanges}
//     />
//   ));

//   return (
//     <section className='dict'>
//       <h2 className='dict__title'>Словарь</h2>
//       <div className='dict__wrapper'>
//         <ul className='dict__list'>
//           <li className='dict__item dict__sub'>Слово</li>
//           <li className='dict__item dict__sub'>Транскрипция</li>
//           <li className='dict__item dict__sub'>Перевод</li>
//           <li className='dict__item dict__sub'>Категория</li>
//         </ul>
//       </div>
//       <DictAdd addNewWord={props.addNewWord}/>
//       {wordsDictionary}
//     </section>
//   );
// };

const Dictionary = observer(({rootStore}) => {

  const { dataWords, addNewWord, deleteWord, saveChanges, getAllDataWords } =
    rootStore;

  const wordsDictionary = dataWords.map((word) => (
    <DictWords
      key={word.id}
      id={word.id}
      english={word.english}
      transcription={word.transcription}
      russian={word.russian}
      tags={word.tags}
      onDelete={deleteWord}
      saveChanges={saveChanges}
    />
  ));

  return (
    <section className='dict'>
      <button onClick={getAllDataWords}>fetch</button>
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
});

export default Dictionary;
