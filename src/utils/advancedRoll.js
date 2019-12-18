export default function advancedRoll (numOfDie, sidesOfDie, rerollDie, dieDrop, dieDropCount, bonus, bonusCount, numOfRolls, rollDrop, rollDropCount) {

	const rollOne = () => {
		return Math.floor(Math.random() * Math.floor(sidesOfDie)+1);
	};

	const rollDice = () => {
		let stat = [];
		let roll = 0;
		let i;
		for(i = 0; i < numOfDie;) {
			roll = rollOne();
			if (rerollDie == 0) {
				stat.push(roll);
				i++;
			} else if (rerollDie == 1) {
				if (roll != 1) {
					stat.push(roll);
					i++;
				} else if (roll == 1) {
					while (roll == 1) {
						roll = rollOne();
					}
					stat.push(roll);
					i++;
				}
			} else if (rerollDie == 2) {
				if (roll != 1 && roll != 2) {
					stat.push(roll);
					i++;
				} else if (roll == 1 || roll == 2) {
					while (roll == 1 || roll == 2) {
						roll = rollOne();
					}
					stat.push(roll);
					i++;
				}
			}
		};
		return stat;
	};

	const singleArray = () => {
		let array = rollDice();
		array.sort((a, b) => {return a - b});

		let i;
		if (dieDrop == 1 ) {
			for (i = 0; i < dieDropCount; i++) {
				array.shift();
			}
		} else if (dieDrop == 2) {
			for (i = 0; i < dieDropCount; i++) {
				array.pop();
			}
		}
		return array;
	};

	const singleStat = () => {
		let statArray = singleArray();
		let arraySum = statArray.reduce((a, b) => a + b);
		let result;
		if (bonus == 1) {
			result = arraySum - Number(bonusCount);
		} else if (bonus == 2) {
			result = arraySum + Number(bonusCount);
		}
		return result;
	};

	const statArray = () => {
		let resultsArray = [];

		let i;
		for (i = 0; i < numOfRolls; i++) {
			const oneStat = singleStat();
			resultsArray.push(oneStat);
			resultsArray.sort((a, b) => {return a - b});
		}
		return resultsArray;
	};

	const finalCut = () => {
		let array = statArray();
		let i;
		if (rollDrop == 1) {
			for (i = 0; i < rollDropCount; i++) {
				array.shift();
			}
		} else if (rollDrop == 2) {
			for (i = 0; i < rollDropCount; i++) {
				array.pop();
			}
		}
		return array;
	}
	const raw = finalCut();
	const results = raw.join(', ');
	return results;
}

