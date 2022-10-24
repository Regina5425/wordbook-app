import { ButtonSave, ButtonCancel } from "../buttons/Buttons";

const DictEdit = () => {
  return (
    <div className='dict__wrapper dict__edit'>
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
          <ButtonSave />
        </li>
        <li className='dict__item'>
          <ButtonCancel />
        </li>
      </ul>
    </div>
  );
};

export default DictEdit;
