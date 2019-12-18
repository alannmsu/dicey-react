import valOf from './valOf.js';
import singleArray from './singleArray.js';

const singleStat = () => {
	//Get stat array
	let statArray = singleArray();
	//Sum array
	let arraySum = statArray.reduce((a,b) => a+b);
	console.log(`arraySum is: ${arraySum}`);
	//Query for addition or subtraction of "bonusCount"
	let bonus = Number(valOf('bonus'));
	console.log(`bonus: ${bonus}`);
	//Static bonus to add to result
	let bonusCount = Number(valOf('bonus-count'));
	console.log(`bonusCount: ${bonusCount}`);

	//If 1, subtract; if 2, add
	if (bonus == 1) {
		var result = arraySum - bonusCount;
	} else if (bonus == 2) {
		var result = arraySum + bonusCount; 
	}

	console.log(`Single stat: ${result}`);
	return result;

}

export default singleStat;