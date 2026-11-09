const container = document.querySelector('#app');
const header = document.querySelector('#main-header');
const title = document.querySelector('#title');
const nav = document.querySelector('#main-nav');
const panel = document.querySelector('#panel');
const cards = document.querySelector('#cards');
const templateCard = document.querySelector('.card.template');
const gallery = document.querySelector('#gallery');
const galleryInfo = document.querySelector('#gallery-info');
const todoList = document.querySelector('#todo-list');
const demoForm = document.querySelector('#demo-form');
const submitBtn = document.querySelector('#submit-btn');


/* Reactivo 1
   - Objetivo: Obtener el elemento con id "title" usando getElementById()
   - Acción: Añadir un texto extra al título (p.ej. " — DOM practice")
   - Pista: usa document.getElementById('title') y modifica textContent o innerText
*/
 // TODO Reactivo 1: obtener el título y añadir " — DOM practice"

const titulo = document.getElementById('title');
titulo.textContent = titulo.textContent + ' — DOM practice';


/* Reactivo 2
   - Objetivo: Crear un nuevo h2 y añadirlo dentro de #panel usando createElement + appendChild()
   - Acción: el h2 debe decir "Reactivos de DOM"
   - Pista: panel.appendChild(...)
*/
// TODO Reactivo 2: crear h2 y anexarlo a panel

const h2 = document.createElement('h2');
h2.textContent = 'Reactivos de DOM';
panel.appendChild(h2);


/* Reactivo 3
   - Objetivo: Usar querySelector() para seleccionar el input con id "input-title"
   - Acción: setAttribute('title', 'Titulazo') y cambiar su placeholder con setAttribute o value
   - Pista: document.querySelector('#input-title') / setAttribute
*/
// TODO Reactivo 3: seleccionar input-title y set title + placeholder

const inputTitle = document.querySelector('#input-title');
inputTitle.setAttribute('title', 'Titulazo');
inputTitle.setAttribute('placeholder', 'Escribe un título');


/* Reactivo 4
   - Objetivo: Crear una lista UL con id "students" y añadirla usando append()
   - Acción: usar append() (no appendChild) para añadir el nuevo ul dentro de #panel
   - Pista: createElement('ul') y panel.append(...)
*/
// TODO Reactivo 4: crear ul#students y añadir con append()

const listaStudents = document.createElement('ul');
listaStudents.id = 'students';
panel.append(listaStudents);


/* Reactivo 5
   - Objetivo: Añadir 3 li a la lista "students" usando appendChild y textContent
   - Acción: cada li con nombres de tus compañeros; usa createElement y appendChild
   - Pista: obtiene ul por getElementById('students') o querySelector
*/
// TODO Reactivo 5: crear y añadir 3 li con nombres

const nombres = ['Juan', 'Sarai', 'Luis'];
const students = document.getElementById('students');
for (let i = 0; i < nombres.length; i++) {
   const li = document.createElement('li');
   li.textContent = nombres[i];
   students.appendChild(li);
}


/* Reactivo 6
   - Objetivo: Usar getElementsByClassName() para obtener todos los elementos que tengan clase "boring-btn"
   - Acción: recorrer la colección (convertir a array), remover boring-btn y agregar btn
   - Pista: document.getElementsByClassName('btn') devuelve HTMLCollection (viva)
*/
// TODO Reactivo 6: obtener botones por clase y console.log su textContent

const botones = Array.from(document.getElementsByClassName('boring-btn'));
botones.forEach(boton => {
   console.log(boton.textContent);
   boton.classList.remove('boring-btn');
   boton.classList.add('btn');
});


/* Reactivo 7
   - Objetivo: Usar getElementsByTagName('img') y aplicar una clase a todas las imagenes
   - Acción: Obtener todas las imagenes, agregarles la clase "thumb" y un id unico a cada una
   - Pista: document.getElementsByTagName('img') o gallery.getElementsByTagName
*/
// TODO Reactivo 7: Obtener img y agregar clase "thumb"

const imagenes = gallery.getElementsByTagName('img');
for (let i = 0; i < imagenes.length; i++) {
   imagenes[i].classList.add('thumb');
   imagenes[i].id = 'img-' + (i + 1);
}


/* Reactivo 8
   - Objetivo: Cambiar el atributo src de todas las imagenes
   - Acción: Obtener todas las imagenes con la clase "thumb", cambiar el atributo src de cada una
      añadirles el src que quieras y una descripcion de la imagen en el alt.
   - Pista: querySelectorAll('.thumb').forEach(img => img.setAttribute(...))
*/
// TODO Reactivo 8: añadir src a cada .thumb

document.querySelectorAll('.thumb').forEach((img, i) => {
   img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxg_QPefJSakuvAufsSBl2-oqXGUL50Ie0uyrqHhMyuQ&s=10' + (i + 1));
   img.setAttribute('alt', 'Imagen de spiderman ' + (i + 1));
});


/* Reactivo 9
   - Objetivo: Usar querySelectorAll() para seleccionar todas las miniaturas (.thumb) y añadirles
              un listener 'click' que muestre su atributo alt en #gallery-info
   - Pista: querySelectorAll('.thumb').forEach(img => img.addEventListener('click', ...))
*/
// TODO Reactivo 9: añadir listener click a cada .thumb que muestre src en gallery-info

document.querySelectorAll('.thumb').forEach(img => {
   img.addEventListener('click', () => {
      galleryInfo.textContent = img.getAttribute('alt');
   });
});


/* Reactivo 10
   - Objetivo: Clonar la plantilla .card.template usando cloneNode(true)
   - Acción: clonar, quitar atributo hidden, cambiar texto, src de la imagen y append al contenedor .cards
   - Pista: const clone = templateCard.cloneNode(true); clone.hidden=false; cards.appendChild(clone)
*/
// TODO Reactivo 10: clonar template, ajustarlo y añadirlo a .cards

function crearCard(titulo, descripcion, imgSrc) {
   const clone = templateCard.cloneNode(true);
   clone.hidden = false;
   clone.classList.remove('template');
   clone.querySelector('.card-title').textContent = titulo;
   clone.querySelector('.card-desc').textContent = descripcion;
   clone.querySelector('.card-img').setAttribute('src', imgSrc);
   return clone;
}

const nuevaCard = crearCard('Nueva Tarjeta', 'Esta es una tarjeta clonada', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjQDhHm3HLNNZRoLeI5Wqi1FyLRi_6hHYE-pX-ZNyqxg&s=10');
cards.appendChild(nuevaCard);



/* Reactivo 11
   - Objetivo: Usar classList para añadir la clase 'highlight' a la tarjeta clonada del reactivo 10
   - Acción: seleccionar la última .card añadida y aplicar classList.add('highlight')
   - Pista: classList.add("highlight")
*/
// TODO Reactivo 11: añadir classList.add('highlight') a la última .card




/* Reactivo 12
   - Objetivo: Alternar (toggle) la clase 'fiesta' en el botón #btn-create cuando se haga click
   - Acción: usar addEventListener('click', handler) y e.g. btn.classList.toggle('fiesta')
   - Pista: querySelector('#btn-create').addEventListener(...)
*/
// TODO Reactivo 12: añadir listener que haga toggle de la clase 'fiesta' en el botón




/* Reactivo 13
   - Objetivo: Usar parentNode: al hacer click en un .delete dentro de una tarjeta,
              eliminar el nodo padre (la tarjeta) con removeChild o element.remove()
   - Acción: delegación: añadir listener a .delete y eliminar la card que corresponda
   - Pista: querySelectorAll(".delete") y btn.parentNode.parentNode
*/
// TODO Reactivo 13: Eliminar la tarjeta con el evento 'click" de su boton eliminar




/* Reactivo 14
   - Objetivo: Añadir clase 'super-fiesta' a todos los elementos .done
   - Acción: Obtener elementos .done y añadirles la clase 'super-fiesta'
   - Pista: querySelectorAll(...), classList.add(...)
*/
// TODO Reactivo 14: Añadir 'super-fiesta' a .done




/* Reactivo 15
   - Objetivo: Modificar atributos con setAttribute() y getAttribute()
   - Acción: crear un enlace nuevo <a> hacia donde quieras, utiliza setAttribute('href',...), añadirlo a #links
   - Pista: createElement('a')
*/
// TODO Reactivo 15: crear y añadir enlace con setAttribute




/* Reactivo 16
   - Objetivo: Usar innerHTML VS textContent
   - Acción: crear dos divs; uno con innerHTML = '<strong>Hola</strong>' y otro con textContent = '<strong>Hola</strong>'
    agregarlos a #text y observar la diferencia en el navegador
   - Pista:createElement('div')
*/
// TODO Reactivo 16: crear dos divs que muestren la diferencia innerHTML / textContent




/* Reactivo 17
   - Objetivo: Cambiar estilos con style (inline)
   - Acción: cambiar color de fondo y borderRadius de la primera tarjeta visible usando element.style
   - Pista: item.style.backgroundColor = '#123456'; item.style.borderRadius = '12px';
*/
// TODO Reactivo 17: aplicar estilos inline a la primera tarjeta




/* Reactivo 18
   - Objetivo: Agregar una card cuando se hace click en crear tarjeta (#btn-create)
   - Acción: Agregar addEventListener al boton #btn-create y cada vez que se haga click
      tome los valores de #input-title e #input-description para agregar una nueva card
      como en el reactivo Reactivo 10
   - Pista: document.getElementById("btn-create"), document.getElementById("input-title").value, ...
*/
// TODO Reactivo 18: create card




/* Reactivo 19
   - Objetivo: Usar value para inputs y modificar su valor
   - Acción: Añadir evento a los botones .edit dentro de las cards, de forma que se tome el texto
      de su titulo y su descripcion y se asignen a los values de sus respectivos inputs
   - Pista: querySelectorAll('.edit'), parecido al Reactivo 13
*/
// TODO Reactivo 19: set y get de value




/* Extra
   - Objetivo: Usar append() y prepend() para añadir nodos en distintos puntos
   - Acción: crear un mensaje y usar prepend en .cards (que quede al inicio) y append en .cards (al final)
   - Pista: cards.prepend(nuevo) / cards.append(nuevo2)
*/
// TODO Reactivo 20: usar prepend y append




/* Extra
   - Objetivo: Usar form submit y event.preventDefault()
   - Acción: al enviar #demo-form evitar recarga, leer FormData, mostrar los valores en console.log y resetear el form
   - Pista: demoForm.addEventListener('submit', e => { e.preventDefault(); const fd = new FormData(e.target); ... })
*/
// TODO Reactivo 23: capturar submit del form y manejar datos con FormData




/* Extra
   - Objetivo: Usar addEventListener con opciones (once: true)
   - Acción: hacer que un botón muestre un alert solo la primera vez que se hace click (usa once:true)
   - Pista: element.addEventListener('click', handler, {once:true})
*/
// TODO Reactivo 24: añadir listener con once:true




/* Extra
   - Objetivo: Evitar propagación con stopPropagation()
   - Acción: crear un contenedor con un listener de 'click' y dentro un botón que al hacer click
              llame stopPropagation para que el contenedor no reaccione
   - Pista: e.stopPropagation()
*/
// TODO Reactivo 25: demostrar stopPropagation




/* Extra
   - Objetivo: Usar outerHTML para reemplazar un elemento completamente
   - Acción: reemplazar #form-section por un nuevo <button> usando outerHTML = '<button>Nuevo</button>'
   - Pista: const link = querySelector('#form-section'); link.outerHTML = '<button id="new-btn">Nuevo</button>';
*/
// TODO Reactivo 27: usar outerHTML para reemplazar elemento




/* Extra
   - Objetivo: Usar replaceChild para intercambiar nodos
   - Acción: crear un nuevo nodo y usar parent.replaceChild(newNode, oldNode) para reemplazar un hijo
   - Pista: const parent = querySelector('#links'); parent.replaceChild(newNode, oldNode);
*/
// TODO Reactivo 28: reemplazar un hijo con replaceChild
