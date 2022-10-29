import DictWord from "../dictWord/DictWord";
import DictEdit from "../dictEdit/DictEdit";
import DictAdd from "../dictAdd/DictAdd";
import "./Dictionary.scss";

const Dictionary = (props) => {
  const isEdit = props;

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
      <DictWord />
      {isEdit ? <DictEdit edit={isEdit} /> : <DictWord />}
      {/* {isEdit ? <DictWord edit={isEdit}/> : <DictEdit />} */}
    </section>
  );
};

export default Dictionary;
