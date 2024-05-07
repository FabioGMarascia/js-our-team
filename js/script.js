// MILESTONE 0
let team_members = [
	{
		name: "Wayne Barnett",
		role: "Founder & CEO",
		picture: "./img/wayne-barnett-founder-ceo.jpg",
	},
	{
		name: "Angela Caroll",
		role: "Chief Editor",
		picture: "./img/angela-caroll-chief-editor.jpg",
	},
	{
		name: "Walter Gordon",
		role: "Office Manager",
		picture: "./img/walter-gordon-office-manager.jpg",
	},
	{
		name: "Angela Lopez",
		role: "Social Media Manager",
		picture: "./img/angela-lopez-social-media-manager.jpg",
	},
	{
		name: "Scott Estrada",
		role: "Developer",
		picture: "./img/scott-estrada-developer.jpg",
	},
	{
		name: "Barbara Ramos",
		role: "Graphic Designer",
		picture: "./img/barbara-ramos-graphic-designer.jpg",
	},
];

// MILESTONE 1
// for (let i = 0; i < 6; i++) {
// 	console.log(team_members[i].name + ", " + team_members[i].role);
// }

// MILESTONE 2 1/2 - B1 - B2
let box = document.querySelector(`.row`);

for (let i = 0; i < 6; i++) {
	createCardAppend(team_members[i]);
}

// FOR APPEND FUNCTION
// let card;
// let image;
// let card_txt;
// let card_body;
// let col_4;
