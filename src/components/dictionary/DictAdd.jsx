import { Button } from "../buttons/Buttons";

const DictAdd = (props) => {
  return (
    <div className='dict__wrapper'>
      <ul className='dict__list'>
				<input type="text" className="dict__input" />
				<input type="text" className="dict__input" />
				<input type="text" className="dict__input" />
				<input type="text" className="dict__input" />
				<Button className='dict__btn dict__btn--yes'>Добавить</Button>
				<Button className='dict__btn dict__btn--no'>Отмена</Button>
      </ul>
    </div>
  );
};

export default DictAdd;