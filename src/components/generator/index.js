const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const lwrCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const uprCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const splCharacters = ['@', '$', '#', '&', '*', '{', '}', '[', ']', ',', '=', '-', '(', ')', '.', '+', ';', '/'];

// generate a random password based on a given length
export const generator = num => {
	// if num is 9, pick 9 random characters
	// if num is 6, pick 6 random characters

	// temp array to hold all random characters chosen
	let generatedArr = [];

	// create one giant array of all characters for easy access when generating a password
	const tmpArr = [...numbers, ...lwrCase, ...uprCase, ...splCharacters];

	for (let i = 0; i < num; i++) {
		// grab a random index based on the giant array above
		const rndmLength = Math.floor(Math.random() * tmpArr.length);

		// select the random index from the giant array above
		const rndmCharacter = tmpArr[rndmLength];

		// push all random characters into the temp array above
		generatedArr.push(rndmCharacter);
	}

	// after the for loop, join all of the characters in the array
	return generatedArr.join('');
};

// (function main() {
// 	console.log(generator(74));
// })();
