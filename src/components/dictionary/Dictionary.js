import DictWord from "../dictWord/DictWord";
import DictEdit from "../dictEdit/DictEdit";
import DictAdd from "../dictAdd/DictAdd";
import './Dictionary.scss';

const Dictionary = () => {
	
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
			<DictAdd/>
			<DictWord/>
			<DictEdit/>
			{/* {isEdit ? <DictEdit/> : <DictWord/>} */}
    </section>
  );
};

export default Dictionary;
