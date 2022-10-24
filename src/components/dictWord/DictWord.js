import {ButtonEdit, ButtonDel} from '../buttons/Buttons';

const DictWord = (props) => {

  return (
    <div className='dict__wrapper' edit={props.isEdit}>
      <ul className='dict__list'>
        <li className='dict__item dict__words'>Swift</li>
        <li className='dict__item dict__words'>[ swɪft ]</li>
        <li className='dict__item dict__words'>Стриж</li>
        <li className='dict__item dict__words'>Птицы</li>
        <li className='dict__item'>
          <ButtonEdit/>
        </li>
        <li className='dict__item'>
          <ButtonDel/>
        </li>
      </ul>
    </div>
  );
};

export default DictWord;
