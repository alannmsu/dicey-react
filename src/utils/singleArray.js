import valOf from './valOf.js';
import rollDice from './rollDice.js';
/*Returns an array of values, sorted numerically,
with the highest or lowest X ("die-drop-count") values removed*/
let singleArray = () => {
	//Initialize variables
	//Get stat array
	let array = rollDice();
	console.log(`Full array: ${array}`);

	//Remove extra roll counter
	let extraRolls = array.pop();
	console.log(`Extra rolls: ${extraRolls}`);

	//Sort the array
	array.sort((a, b) => {return a - b});
	console.log(`Sorted array: ${array}`);

	//Query for drop none(0), low(1), or high(2)
	let dieDrop = valOf('die-drop');
	console.log(`dieDrop: ${dieDrop}`);

	//Number of dice to drop, 1 or 2
	let dieDropCount = valOf('die-drop-count');
	console.log(`dieDropCount: ${dieDropCount}`);

	//If dropping lowest value(s)...
	let i;
	if (dieDrop == 1) {
		for (i = 0; i < dieDropCount; i++) {
			array.shift();
		}
	//If dropping highest value(s)...
	} else if (dieDrop == 2) {
		for (i = 0; i < dieDropCount; i++) {
			array.pop();
		}
	}
	console.log(`Your array of rolls: ${array}`);
	return array;
}

export default singleArray;