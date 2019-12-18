import valOf from './valOf.js';
import rollOne from './rollOne.js';

const rollDice = () => {
	//Initialize variables
	//The number of dice to roll for each result
	let numOfDie = valOf('num-of-die');
	let rerollDie = valOf('reroll-die');
	let stat = []; //Results array
	let extraRoll = 0; //Counter for extra rolls during rerolling
	let roll = 0; //Result variable

	//Iterate single rolls "numOfDie" times
	let i;
	for(i = 0; i < numOfDie;) {
		//Roll a single dice of "sidesOfDie" size
		roll = rollOne();
		console.log(`This is roll number ${i+1}: ${roll}!`)
		//If not rerolling, push result to array
		if (rerollDie == 0) {
			stat.push(roll);
			i++;

		//If rerollling 1s...
	} else if (rerollDie == 1) {
			//If result is not a 1, push
			if (roll != 1) {
				stat.push(roll);
				i++;
			//If result is 1, reroll until no longer 1, push
		} else if (roll == 1) {
			while (roll == 1 ) {
				extraRoll++;
				roll = rollOne();
				console.log(`This is extra roll number ${extraRoll}: ${roll}!`);
			}
			stat.push(roll);
			i++;				
		}
	} else if (rerollDie == 2) {
			//If result is not a 1 or 2, push
			if (roll != 1 && roll != 2) {
				stat.push(roll);
				i++;
			//If result is 1 or 2, reroll until no longer 1 or 2, push
		} else if (roll == 1 || roll == 2) {
			while (roll == 1 || roll == 2) {
				extraRoll++;
				roll = rollOne();
				console.log(`This is extra roll number ${extraRoll}: ${roll}!`);
			}
			stat.push(roll);
			i++;				
		}
	}
};
stat.push(extraRoll);
return stat;
}

export default rollDice;