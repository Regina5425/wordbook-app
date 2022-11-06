import './Buttons.scss';
import arrow from '../../img/arrow.svg';

const Button = ({children, ...props}) => {
	return (
		<button {...props}>{children}</button>
	)
}

const ButtonChangeCard = (props) => {
	return (
		<button {...props}>
			<img src={arrow} alt='arrow'/>
		</button>
	)
}

export {Button, ButtonChangeCard};

