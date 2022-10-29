import {ButtonAdd, ButtonCancel} from '../buttons/Buttons';

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
          <ButtonAdd/>
        </li>
        <li className='dict__item'>
          <ButtonCancel/>
        </li>
      </ul>
    </div>
  );
};

export default DictAdd;