import './Buttons.scss';

const ButtonEdit = () => {
	return (
		<button className='dict__btn dict__btn--yes'>Редактировать</button>
	)
}

const ButtonAdd = () => {
	return (
		<button className='dict__btn dict__btn--yes'>Добавить</button>
	)
}

const ButtonSave = () => {
	return (
		<button className='dict__btn dict__btn--yes'>Сохранить</button>
	)
}

const ButtonCancel = () => {
	return (
		<button className='dict__btn dict__btn--no'>Отмена</button>
	)
}

const ButtonDel = () => {
	return (
		<button className='dict__btn dict__btn--no'>Удалить</button>
	)
}

export {ButtonEdit, ButtonAdd, ButtonSave, ButtonCancel, ButtonDel};

