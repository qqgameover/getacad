const characters = [
	{
		name: 'Luke Skywalker',
		height: 172,
		mass: 77,
		eye_color: 'blue',
		gender: 'male',
	},
	{
		name: 'Darth Vader',
		height: 202,
		mass: 136,
		eye_color: 'yellow',
		gender: 'male',
	},
	{
		name: 'Leia Organa',
		height: 150,
		mass: 49,
		eye_color: 'brown',
		gender: 'female',
	},
	{
		name: 'Anakin Skywalker',
		height: 188,
		mass: 84,
		eye_color: 'blue',
		gender: 'male',
	},
];

const over200 = characters.filter(characters => characters.height > 200)
console.log(over200)
const maleChars = characters.filter(characters => characters.gender == "male")
console.log(maleChars)

const namesChars = characters.map(characters => characters.name)
console.log(namesChars);

const namesAndHeights = characters.map((characters) => {
	return ({ name: characters.name, height: characters.height })
});
console.log(namesAndHeights)

const someMale = characters.some((characters) => {
	return characters.gender == "male"
});
console.log(someMale);

const someBlueEyes = characters.some((characters) => {
	return characters.eye_color === 'blue'
});
console.log(someBlueEyes);

const someMassOver210 = characters.some((characters) => {
	return characters.mass > 210
});
console.log(someMassOver210);

const someMassLess50 = characters.some((characters) => {
	return characters.mass < 50
});
console.log(someMassLess50);
//filter

const sortByWeight = characters.sort((a, b) => {
	return b.mass - a.mass;
});
console.log(sortByWeight);

const sortByHeight = characters.sort((a, b) => {
	return b.height - a.height;
});
console.log(sortByHeight);

const sortByName = characters.sort((a, b) => {
	if (a.name > b.name) return 1;
	return -1;
});
console.log(sortByName);

const sortByGender = characters.sort((a, b) => {
	if (a.gender == "female") return -1;
	return 1;
})
console.log(sortByGender);
//reduce

const totalMass = characters.reduce((a, b) => {
	return a + b.mass;
}, 0)
console.log(totalMass);

const totalHeight = characters.reduce((a, b) => {
	return a + b.height
}, 0)
console.log(totalHeight);

const totalEyeColors = characters.reduce((a, b) => {
	const color = b.eye_color;
	if (a[color]) {
		a[color]++;
	} else {
		a[color] = 1;
	}
	return a;
}, {})

console.log(totalEyeColors);

const totalCharsInNames = characters.reduce((a, b) => {
	return a + b.name.length;
}, 0)
console.log(totalCharsInNames);
//every
const everyBlueEyes = characters.every((characters) => {
	return characters.eye_color == "blue";
});
console.log(everyBlueEyes);

const everyMassOver40 = characters.every((characters) => {
	return characters.mass > 40;
});
console.log(everyMassOver40);

const everyHeightUnder200 = characters.every((characters) => {
	return characters.height < 200;
});
console.log(everyHeightUnder200);

const everyCharMale = characters.every((characters) => {
	characters.gender == "male";
});
console.log(everyCharMale);