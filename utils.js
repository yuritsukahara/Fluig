// Gera JSON tradução das labels em inglês e espanhol
// Exemplo: [{"Nome":{"eng":"Name","es":"Nombre"}}]
// Uso: await translateJson()
// Retorna Json

async function translateJson() {
	let formFluig = document.getElementsByTagName('label');
	let traslatedArray = [];

	for (label of formFluig) {
		let text = label.innerText;
		let translatedTextEng = await translatePtEng(text);
		let translatedTextEs = await translatePtEs(text);
		traslatedArray.push({
			[text]: { eng: translatedTextEng, es: translatedTextEs },
		});
	}

	return JSON.stringify(traslatedArray);
}

async function translatePtEng(words) {
	let url =
		'https://translate.googleapis.com/translate_a/single?client=gtx&sl=pt&tl=en&dt=t&q=' +
		encodeURI(words);
	let response = await fetch(url);
	let translated = await response.json();

	return translated[0][0][0];
}

async function translatePtEs(words) {
	let url =
		'https://translate.googleapis.com/translate_a/single?client=gtx&sl=pt&tl=es&dt=t&q=' +
		encodeURI(words);
	let response = await fetch(url);
	let translated = await response.json();

	return translated[0][0][0];
}

