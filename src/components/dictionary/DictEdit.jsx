import { Button} from "../buttons/Buttons";

const DictEdit = (props) => {

  return (
    <div className='dict__wrapper dict__edit'>
      <ul className='dict__list'>
        <li className='dict__item'>
          <input onChange={props.changeValue} type='text' className='dict__input' defaultValue={props.english} />
        </li>
        <li className='dict__item'>
          <input onChange={props.changeValue} type='text' className='dict__input' defaultValue={props.transcription}/>
        </li>
        <li className='dict__item'>
          <input onChange={props.changeValue} type='text' className='dict__input' defaultValue={props.russian}/>
        </li>
        <li className='dict__item'>
          <input onChange={props.changeValue} type='text' className='dict__input' defaultValue={props.tags} />
        </li>
        <li className='dict__item'>
          <Button className='dict__btn dict__btn--yes'>Сохранить</Button>
        </li>
        <li className='dict__item'>
          <Button onClick={props.cancel} className='dict__btn dict__btn--no'>Отмена</Button>
        </li>
      </ul>
    </div>
  );
};

export default DictEdit;
