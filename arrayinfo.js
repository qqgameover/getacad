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

const charBelow200 = characters.filter((characters) => {
	return characters.height < 200;
});
console.log(charBelow200);

const charByHeight = characters.sort((a, b) => {
	return b.height - a.height;
})
console.log(charByHeight);

const charactersminified = characters.map((characters) => {
	return { name: characters.name, height: characters.height };
}, {});
const sortMinified = charactersminified.sort((a, b) => {
	return b.height - a.height;
})
console.log(sortMinified);

console.log(characters[0]);