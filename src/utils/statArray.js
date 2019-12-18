import valOf from './valOf.js';
import singleStat from './singleStat.js';

const statArray = () => {
	//Set value of number of rolls
	let numOfRolls = Number(valOf('num-of-rolls'));
	console.log(numOfRolls);
	//Initialize results array
	let resultsArray = [];
	//'i' used in nested "for loop"
	var j;
	//for the number of rolls, call statArray and sort
	for (j = 0; j < numOfRolls; j++) {
		console.log(j);
		let oneStat = singleStat();
		resultsArray.push(oneStat);
		resultsArray.sort((a, b) => {return a - b});
		console.log(resultsArray);
	}

	return resultsArray;
}

export default statArray;