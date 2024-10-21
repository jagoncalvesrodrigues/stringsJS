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

function conjugation (verb){
    const finalLetter= verb.substring(verb.length-2);
    if(finalLetter==='ar'){
        return 'primera';
    }else if(finalLetter==='er'){
        return 'segunda';
    }else{
        return 'tercera';
    }
}
function verbs (verb1,verb2){
    return (`El verbo ${verb1} es de la ${conjugation(verb1)} conjugacion y el verbo ${verb2} es de la conjugacion ${conjugation(verb2)} conjugacion`)
}

console.log(verbs('andar','correr'))

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
    return phrase.toUpperCase().charAt(0)+phrase.slice(1,phrase.indexOf(' '))+' '+(phrase.toUpperCase().charAt(phrase.indexOf(' ')+1)+phrase.slice(phrase.indexOf(' ')+2));
}  

console.log(titlePhrase('hola mundo'));

// - Crea una función que reciba un nombre y un apellido y devuelva las iniciales en mayúsculas. Por ejemplo, si recibe "Carlos Pérez", deberá devolver "C.P.".

function initials(name){
    return (name.charAt(0)+'.'+name.charAt(name.indexOf(" ")+1)+'.');
}

// - Crea una función que reciba 3 palabras y calcule el promedio de la longitud de esas palabras. Por ejemplo, si recibe "hola", "adiós" y "mundo", el promedio sería 4.67.

function amountLetters2(word){
    return (word.length);
}
function countLetters2(word1,word2,word3){
    return ((amountLetters2(word1)+amountLetters2(word2)+amountLetters2(word3))/3);
}

// - Crea una función que reciba un número de teléfono de 10 dígitos (como "1234567890") y lo formatee de la siguiente manera: "(123) 456-7890".

function phoneFormat(phone){
    return phone.length>10 ? 'numero erroneo': ('('+phone.substring(0,3)+') '+phone.substring(3,6)+'-'+phone.substring(6));
}
// - Crea una función que reciba una palabra de 4 letras y la devuelva en orden inverso, duplicando cada letra. Por ejemplo, si recibe "hola", devolvería "aalloohh".

function letters2(word){
    return ((word.charAt(3)+word.charAt(3))+(word.charAt(2)+word.charAt(2))+(word.charAt(1)+word.charAt(1))+(word.charAt(0)+word.charAt(0)))
}
function invertedWord2(word){
    return word.length===4?letters2(word):'La palabra tiene mas de 4 letras amigo';
}

// - Crea una función que reciba un número de dos dígitos y devuelva true si ambos dígitos son pares. Por ejemplo, si recibe 24, devolvería true, pero si recibe 23, devolvería false.
function checkup(number) {
    const tens = Math.floor(number / 10); 
    const units = number % 10; 
    return (tens % 2 === 0 && units % 2 === 0);
}

function pairNumber(number){
    return number.toString().length==2?checkup(number):'el numero es mayor a 2 digitos'
}
console.log(pairNumber(24));

// - Crea una función que reciba dos palabras de 4 letras y verifique si contienen las mismas letras en diferente orden, por ejemplo "amor" y "mora"

function comprobationLetters(word1,word2){
    return (word2.includes(word1.charAt(0)) && 
            word2.includes(word1.charAt(1)) &&
            word2.includes(word1.charAt(2)) && 
            word2.includes(word1.charAt(3))
        )
}

function sameLetters(word1,word2){
    return word1.length===4 && word2.length===4?comprobationLetters(word1,word2):'las palabras no tienen 4 letras';
}
// - Crea una función que reciba un string y un número n, y devuelva los primeros n caracteres del string (puedes usar el método slice).

function sliceWord(word,number){
    return word.slice(0,number);
}
// - Crea una función que reciba una frase y una palabra, y te diga si la palabra está o no en la frase

function specificWord(word,phrase){
    return phrase.toLowerCase().includes(word.toLowerCase());
}
console.log(specificWord('juan','Buenas mi nombre es Juan'));


