import valOf from './valOf.js';
import statArray from './statArray.js';

const finalCut = () => {
	//Query for dropping results
	let rollDrop = valOf('roll-drop');
	console.log(`dieDrop: ${rollDrop}`);
	//How many results to drop
	let rollDropCount = valOf('roll-drop-count');
	console.log(`dieDropCount: ${rollDropCount}`);

	let array = statArray();

	//If dropping lowest value(s)...
	let i;
	if (rollDrop == 1) {
		for (i = 0; i < rollDropCount; i++) {
			array.shift();
		}
	//If dropping highest value(s)...
	} else if (rollDrop == 2) {
		for (i = 0; i < rollDropCount; i++) {
			array.pop();
		}
	}
	console.log(`Your full stat array: ${array}`);
	return array;
}

export default finalCut;