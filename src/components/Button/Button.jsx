import style from './Button.module.css';

export default function Button({innerText, onclick}) {

	return (
		<div className={style.button} onClick={onclick}> 
			{innerText}
		</div>
	);
}