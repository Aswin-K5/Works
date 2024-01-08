import React, { useReducer } from "react";
import "./App.css";
const initialState = 0;
const reducer = (state, action) => {
switch (action) {
	case "add":
	return state + 1;
	case "subtract":
	return state - 1;
	case "reset":
	return 0;
	default:
	throw new Error("Unexpected action");
}
};

const App = () => {
const [count, dispatch] = useReducer(reducer, initialState);
return (
	<div>
	<h2>{count}</h2>
	<button  class="red" onClick={() => dispatch("add")}>
		Add
	</button>
	<button class="ded" onClick={() => dispatch("subtract")}>
		Subtract
	</button>
	<button class="ced" onClick={() => dispatch("reset")}>
		Reset
	</button>
	</div>
);
};

export default App;
