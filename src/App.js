import style from "./App.module.scss";

import { useReducer, useState } from "react";
import { v1 as getID } from 'uuid';

import reducer from "./helpers/reducer";
import Calculator from "./components/Calculator";

function App() {
	
	const [active, setActive] = useState(null);
	const [state, dispatch] = useReducer(reducer, [getID()]);

	function addCalc() {
		dispatch({
			type: 'ADD',
			payload: getID(),
		})
	}
	function removeCalc() {
		dispatch({
			type: 'REMOVE',
			payload: active,
		})
	}
	function removeAll() {
		dispatch({type: 'REMOVE_ALL'});
	}

    return <>
		<div className={style.header}>
			<span>Calculator App</span>
			<div className={style.mainButtons}>
				<button onClick={addCalc} className={style.mainButton}>Add</button>
				<button onClick={removeCalc} className={style.mainButton}>Remove</button>
				<button onClick={removeAll} className={style.mainButton}>Remove All</button>
			</div>
		</div>
		<div className={style.calcs}>
			{state.map((item) => <Calculator key={item} id={item} active={setActive} /> )}
		</div>
	</>
}

export default App;
