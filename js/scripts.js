// - Crea una funcion que reciba una palabra, si la palabra tiene más de 5 caracteres la imprimirá en mayúsculas, si no en minúsculas.

function lowCaseWord (word){
    return word.length>5?word.toUpperCase():word;
}
console.log(lowCaseWord('aksjdhkauwdg'));

// - Crea una función que reciba una palabra e imprime por consola una letra aleatoria de esa palabra.
function getRandomNumber(wordlength){
    return Math.floor(Math.random() * wordlength);
}
function randomLetter(word){
    const number = getRandomNumber(word.length)
    return word.charAt(number)
}
console.log(randomLetter('juanito'));

// - Crea una función que reciba dos palabras y devuelva cuál de las dos es más larga. Si ambas palabras tienen la misma longitud, deberá indicarlo.
function sizeWords(word1,word2){
    return word1.length>word2.length?word1:word2;
}
function equalWords(word1,word2){
    return word1.length===word2.length?'son iguales':sizeWords(word1,word2);
}
console.log(equalWords('juan','juansas'));

// - Crear una función generateWord que reciba 3 palabras y genere una palabra usando 2 letras aleatorias de cada palabra. Por ejemplo, 
// "Hola", "Adios" y "Mano" podrían generar "aldona".

function randomLetter(word){
    return word.charAt(Math.random()*word.length)+word.charAt(Math.random()*word.length)
}
function randomWord(word1,word2,word3){
    return (randomLetter(word1)+randomLetter(word2)+randomLetter(word3));
}
console.log(randomWord('juan','hola','yao'));

// - Crea una función que reciba un email e imprima por separado el nombre y el dominio. Por ejemplo, si recibe "dorian@gmail.com" deberá imprimir 
// "El usuario es dorian" y por otro lado "El dominio es gmail.com".

function separatoremail(email){
    return email.indexOf('@');
}
function domainUser(email){
    return ('El usuario es "'+email.substring(0,(separatoremail(email)-1))+'" El dominio es "'+ email.substring((separatoremail(email)+1))+'"');
}

console.log(domainUser('juanitochin@gmial.com'));

// - Crea una función que reciba una palabra de 5 letras y la devuelva intercalando mayúsculas y minúsculas, por ejemplo adios, sería aDiOs

function upperCaseletter(word){
    return (word.charAt(0)+(word.charAt(1)).toUpperCase() + word.charAt(2)+word.charAt(3).toUpperCase()+word.charAt(4))
}
function lowerToUpper(word){
    return word.length===5?upperCaseletter(word):'La palabra tiene mas de 5 letras amigo';
}
console.log(lowerToUpper('adios'));

// - Crea una función que reciba un nombre y un apellido, y devuelva un nombre de usuario compuesto por la primera letra del nombre, el apellido completo, 
// y un número aleatorio del 1 al 100. Por ejemplo, "Juan Perez" podría convertirse en "JPerez87".

function userName(name, lastname){
    return (name.charAt(0)+lastname+Math.floor(Math.random() * 100));
}

console.log(userName('Juan','Goncalves'));

// - Crea una función que reciba 2 verbos en infinitivo. La función debe imprimir a qué conjugación pertenecen. Por ejemplo, si la función recibe "andar" y "correr"
//  debe imprimir "El verbo andar es de la primera conjugación y el verbo correr de la segunda conjugación".


// - Crea una función que reciba una palabra de 4 letras y devuelva la palabra invertida. Por ejemplo, si recibe "casa", deberá devolver "asac".
function letters(word){
    return (word.charAt(3)+word.charAt(2)+word.charAt(1)+word.charAt(0))
}
function invertedWord(word){
    return word.length===4?letters(word):'La palabra tiene mas de 4 letras amigo';
}
console.log(invertedWord('auis'));

// - Crea una función que reciba 3 palabras y calcule cuántos caracteres tienen en total. Por ejemplo, si recibe "Hola", "Mundo" y "Javascript", deberá imprimir 17.

function amountLetters(word){
    return (word.length);
}
function countLetters(word1,word2,word3){
    return (amountLetters(word1)+amountLetters(word2)+amountLetters(word3))
}

console.log(countLetters('juan','juan','juan'));

// - Crea una función que reciba una frase y devuelva la frase con el formato de título, es decir, que cada palabra comience con mayúscula. 
// Por ejemplo, "hola mundo" se convertiría en "Hola Mundo".

function titlePhrase(phrase){
    return 
}  




