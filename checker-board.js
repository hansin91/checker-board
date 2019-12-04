const checkerBoard = (rows) => {
	if (rows < 1 || typeof rows !== 'number') {
		return 'Invalid data';
	}

	// for (let i = 1; i <= rows; i++) {
	// 	let str = '';
	// 	for (let j = 1; j <= rows; j++) {
	// 		// even row
	// 		if (i % 2 == 0) {
	// 			str += j % 2 === 0 ? '*' : ' ';
	// 			// odd row
	// 		} else {
	// 			str += j % 2 === 0 ? ' ' : '*';
	// 		}
	// 	}
	// 	console.log(str);
	// }
	// console.log();

	for (let i = 1; i <= rows; i++) {
		let start = i % 2 === 0 ? '*' : ' ';
		let str = '';
		for (let j = 1; j <= rows; j++) {
			start = start === '*' ? ' ' : '*';
			str += start;
		}
		console.log(str);
	}
};

// console.log(checkerBoard(-1));
// console.log(checkerBoard('5'));
// console.log(checkerBoard(false));
checkerBoard(3);
