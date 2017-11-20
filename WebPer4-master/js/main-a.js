'use strict';

/*A1

 */
const ekaP = document.querySelector('p');
const lisaa = document.querySelector('#lisaa');

lisaa.addEventListener('click', (evt) => {
  ekaP.classList.add('punainen')
});
/*A3
*/
const kolmasP = document.querySelector('p:nth-child(3)');
const toggle = document.querySelector('#toggle');

toggle.addEventListener('click', (evt) => {
  kolmasP.classList.toggle('vihrea')
});

/*A2
 */

const tokaP = document.querySelector('p:nth-child(2)');
const vaihda = document.querySelector('#vaihda');

vaihda.addEventListener('click', (evt) => {
  if (tokaP.classList.contains('punainen')) {
  tokaP.classList.replace('punainen', 'sininen');
} else {
  tokaP.classList.replace('sininen', 'punainen');
}
});

showImages();