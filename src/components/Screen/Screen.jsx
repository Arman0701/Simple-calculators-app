import style from './Screen.module.css';

export default function Screen({innerText, bg}) {

	return (
		<div className={style.screen}>
			{innerText}
		</div>
	);
}