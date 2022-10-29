import './Buttons.scss';

const Button = (props) => {
	return (
		<button {...props}></button>
	)
}

const ButtonTrans = (props) => {
	const {name} = props;
	return (
		<button {...props} className='trans__btn'>{name}</button>
	)
}

export {Button, ButtonTrans};

