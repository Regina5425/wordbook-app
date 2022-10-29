import { Button } from "../buttons/Buttons";

const DictAdd = () => {
  return (
    <div className='dict__wrapper'>
      <ul className='dict__list'>
        <li className='dict__item'>
          <input type='text' className='dict__input' />
        </li>
        <li className='dict__item'>
          <input type='text' className='dict__input' />
        </li>
        <li className='dict__item'>
          <input type='text' className='dict__input' />
        </li>
        <li className='dict__item'>
          <input type='text' className='dict__input' />
        </li>
        <li className='dict__item'>
          <Button className='dict__btn dict__btn--yes'>Добавить</Button>
        </li>
        <li className='dict__item'>
          <Button className='dict__btn dict__btn--no'>Отмена</Button>
        </li>
      </ul>
    </div>
  );
};

export default DictAdd;