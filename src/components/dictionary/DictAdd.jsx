import { Button } from "../buttons/Buttons";
import WordEdit from "./WordEdit";

const DictAdd = () => {
  return (
    <div className='dict__wrapper'>
      <ul className='dict__list'>
        <WordEdit/>
        <WordEdit/>
        <WordEdit/>
        <WordEdit/>
				<Button className='dict__btn dict__btn--yes'>Добавить</Button>
				<Button className='dict__btn dict__btn--no'>Отмена</Button>
      </ul>
    </div>
  );
};

export default DictAdd;