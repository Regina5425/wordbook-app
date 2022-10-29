import { Button} from "../buttons/Buttons";

const DictWord = (props) => {
	
  return (
    <div className='dict__wrapper' >
			<ul className='dict__list'>
          <li className='dict__item dict__words'>{props.english}</li>
          <li className='dict__item dict__words'>{props.transcription}</li>
          <li className='dict__item dict__words'>{props.russian}</li>
          <li className='dict__item dict__words'>{props.tags}</li>
          <li className='dict__item'>
            <Button id={props.id} onClick={props.edit} className='dict__btn dict__btn--yes'>Редактировать</Button>
          </li>
          <li className='dict__item'>
            <Button className='dict__btn dict__btn--no'>Удалить</Button>
          </li>
        </ul>
    </div>
  );
};

export default DictWord;
