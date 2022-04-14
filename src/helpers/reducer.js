export default function reducer(state, action) {
	switch(action.type){
		case 'ADD':
			return [...state, action.payload];
		case 'REMOVE':
			return state.filter(item => item !== action.payload);
		case "REMOVE_ALL":
			return [];
	}
}