const validateNumber = (data) => {
	const numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
	let count = 0;
	data = data.split("");
	data.forEach((elem) => {
		if (numeros.includes(elem)) count++;
	});
	if (data.length === count) return true;
	return false;
};

export const validateRange = (valor) => {
	const validNumber = validateNumber(valor);
	if (!validNumber) return false;
	if (!(parseInt(valor) > 0 && parseInt(valor) <= 100)) return false;
	return true;
};

// Expresion Regular Para Validar Urls De Imagenes Online
// /(http(s?):)?([/|.|\w|\s|-])*\.(?:jpe?g|gif|png)\??([%&a-z0-9=_-]+)?/i
export const validateUrlImageOnline = (urlImage) => {
	const regexUrlImage =
		/(http(s?):)?([/|.|\w|\s|-])*\.(?:jpe?g|gif|png)\??([%&a-z0-9=_-]+)?/i;
	if (!regexUrlImage.test(urlImage)) return false;
	return true;
};

let abc = [];
const validateStrings = (cadena) => {
	let count = 0;
	abc = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"ñ",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
		"á",
		"é",
		"í",
		"ó",
		"ú",
		"ä",
		"ë",
		"ï",
		"ö",
		"ü",
		"à",
		"è",
		"ì",
		"ò",
		"ù",
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"Ñ",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z",
		"Á",
		"É",
		"Í",
		"Ó",
		"Ú",
		"Ä",
		"Ë",
		"Ï",
		"Ö",
		"Ü",
		"À",
		"È",
		"Ì",
		"Ò",
		"Ù",
	];

	const numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

	const simbolos = [
		" ",
		",",
		".",
		":",
		";",
		"-",
		"_",
		"?",
		"¿",
		"!",
		"¡",
		"(",
		")",
		"/",
		"*",
		"+",
		"\\",
		"'",
		'"',
		"#",
		"$",
		"%",
		"&",
		"[",
		"]",
		"{",
		"}",
		"~",
		"<",
		">",
		"|",
		"^",
		"°",
	];
	cadena = cadena.split("");
	cadena.forEach((elem) => {
		if (abc.includes(elem) || numeros.includes(elem) || simbolos.includes(elem))
			count++;
	});
	if (cadena.length === count) {
		return true;
	}
	return false;
};

export const validateS = (nombre, cadena) => {
	const result = validateStrings(cadena);
	if (nombre === "estado.name") {
		cadena = cadena.split("");
		let letras = "";
		if (!result) return false;
		cadena.forEach((elem) => {
			if (abc.includes(elem)) {
				letras += elem;
			}
		});
		if (letras.length >= 5) return true;
		return false;
	}
	if (nombre === "estado.summary") {
		cadena = cadena.split("");
		let letras = "";
		if (!result) return false;
		cadena.forEach((elem) => {
			if (abc.includes(elem)) {
				letras += elem;
			}
		});
		if (letras.length >= 20) return true;
		return false;
	}
	if (nombre === "estado.step") {
		cadena = cadena.split("");
		let letras = "";
		if (!result) return false;
		cadena.forEach((elem) => {
			if (abc.includes(elem)) {
				letras += elem;
			}
		});
		if (letras.length >= 20) return true;
		return false;
	}
};
