import { useState} from "react";

const WordEdit = (props) => {
  //поменять значение state
  const [isChanged, setIsChanged] = useState(false);

  // обработчик на инпуты
  const changeValue = () => {
    setIsChanged(!isChanged);
    console.log(isChanged);
  };

  return (
    <li className='dict__item'>
      <input onChange={changeValue} type='text' className='dict__input dict__input--edit' value={props.name} />
    </li>
  );
};

export default WordEdit;
