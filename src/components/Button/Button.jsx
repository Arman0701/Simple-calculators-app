import style from './Button.module.scss';

export default function Button({innerText, onclick}) {
	return (
		<button className={style.button} onClick={onclick}> 
			{innerText}
		</button>
	);
}