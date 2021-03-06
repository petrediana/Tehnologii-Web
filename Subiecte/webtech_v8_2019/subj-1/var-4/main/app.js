/*
 - funcția translate primește ca parametrii un string și un obiect
 - funcția aruncă excepții dacă tipurile nu sunt respectate (mesajul "InvalidType")
 - obiectul dicționar are în cheie valoarea inițială și în valoare traducerea ei
 - valorile din dicționar sunt string-uri
 - funcția înlocuiește fiecare cheie din dicționar găsită în textul inițial cu valoarea tradusă
*/

/*
 - the translate function receives as parameters a string and an object
 - the function throws exceptions if the types are not the required ones (message is "InvalidType")
 - the dictionary object has in its keys the inital values and in its values the translation of the key
 - the values in the dictionary are strings
 - the function replaces each dictinary key found in the initial text with the value in the dictionary corresponding to the key
*/


function translate(text, dictionary){
	if (typeof text !== 'string' || dictionary === null) {
		throw new Error('InvalidType');
	}

	let words = text.split(' ');
	Object.keys(dictionary).forEach(dictionaryKey => {
		let indexWord = words.indexOf(dictionaryKey);
		words[indexWord] = dictionary[dictionaryKey];
	});

	let output = '';
	for (let i = 0; i < words.length; ++i) {
		output += words[i] + ' ';
	}

	return output.trim();
}

console.log(translate("this isn't a text", {this : 'acesta', is : 'este', a : 'un', text : 'text'}));

module.exports.translate = translate