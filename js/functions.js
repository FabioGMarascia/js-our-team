// MILESTONE 2 1/2
// function cardTxt(object, i) {
// 	card_txt = document.createElement(`p`);
// 	card_txt.classList.add(`.card-text`);
// 	card_txt.append(object.name + ", " + object.role);
// 	box.append(card_txt);
// }

// B1 - B2

// INNER FUNCTION
function createCardInner(object, container) {
	container.innerHTML += `
	<div class="col-4">
		<div class="card">
			<img class="card-img-top" src="${object.picture}">
			<div class="card-body">
				<p class="card-text text-center fw-bold fs-5"> 
				NAME: ${object.name}
				</p>
				<p class="card-text text-center fw-bold fs-5"> 
				ROLE: ${object.role}
				</p>
			</div>
		</div>
	</div>`;
}

// // APPEND FUNCTION
// function createCardAppend(object, container) {
// 	col_4 = document.createElement(`div`);
// 	col_4.classList.add(`col-4`);

// 	card = document.createElement(`div`);
// 	card.classList.add(`card`);

// 	card_body = document.createElement(`div`);
// 	card_body.classList.add(`card-body`);

// 	image = document.createElement("img");
// 	image.classList.add(`card-img-top`);
// 	image.src = object.picture;

// 	card_txt = document.createElement(`p`);
// 	card_txt.classList.add(`card-text`, `text-center`, `fw-bold`, `fs-5`);

// 	card_txt.append(object.name + " - " + object.role);
// 	card_body.append(card_txt);
// 	card.append(image);
// 	card.append(card_body);
// 	col_4.append(card);
// 	container.append(col_4);
// }
