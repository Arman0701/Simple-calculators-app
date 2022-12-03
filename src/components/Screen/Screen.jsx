import style from './Screen.module.scss';

export default function Screen({innerText, bg}) {

	return (
		<div className={style.screen}>
			{innerText}
		</div>
	);
}