// Almacenando el elemento cuyo id es cardContainer en una variable constante llamada cardContainer, 
//  realizar las siguientes acciones:

const cardContainer = document.getElementById('cardContainer');


// 1) Eliminar el primer elemento hijo desde el padre.

cardContainer.removeChild(cardContainer.firstChild);


// 2) Eliminar, desde el propio elemento, el elemento cuya clase es "cards redClass".

cardContainer.removeChild(cardContainer.getElementsByClassName('cards redClass')[0]);


// 3) Crear un elemento h1 con vuestro nombre.

const h1 = document.createElement('h1');
h1.textContent = 'Fernando Iglesias Leyva';


// 4) Crear un elemento enlace con texto "Vedruna" y cuyo href sea la pagina del vedruna.
const elementoEnlace = document.createElement('a');
elementoEnlace.textContent = 'Vedruna';
elementoEnlace.href = 'https://vedrunasevilla.org/';



// 5) Crear un elemento boton cuyo id sea "botonJoker" y su texto sea "boton".

const botonJoker = document.createElement('button');
botonJoker.id = 'botonJoker';   

// 6) Crear un elemento div cuya clase sea "cards greenClass".

const divGreenClass = document.createElement('div');
divGreenClass.className = 'cards greenClass';

// 7) Añadir al elemento div creado anteriormente los h1, enlace y boton creados anteriormente.

divGreenClass.appendChild(h1);
divGreenClass.appendChild(elementoEnlace);
divGreenClass.appendChild(botonJoker);

// 8) Añadir a cardContainer el div del apartado anterior.
cardContainer.appendChild(divGreenClass);