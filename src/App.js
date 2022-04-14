import style from "./App.module.css";
import { useEffect, useReducer, useState } from "react";
import { v1 as getID } from 'uuid';
import reducer from "./helpers/reducer";
import Calculator from "./components/Calculator/Calculator";

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

    return <div className="App">
		<div className={style.header}>
			Simple Calculators
			<div className={style.mainButtons}>
				<div onClick={addCalc} className={style.mainButton}>Add</div>
				<div onClick={removeCalc} className={style.mainButton}>Remove</div>
				<div onClick={removeAll} className={style.mainButton}>Remove All</div>
			</div>
		</div>
		<div className={style.calcs}>
			{state.map((item) => <Calculator key={item} id={item} active={setActive} /> )}
		</div>
	</div>
}

export default App;
