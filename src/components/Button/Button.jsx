import style from './Button.module.css';

export default function Button({innerText, onclick, customStyle}) {

	return (
		<div className={style.button} onClick={onclick}> 
			{innerText}
		</div>
	);
}