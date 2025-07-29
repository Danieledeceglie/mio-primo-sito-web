// script.js

// 1. Seleziona l’elemento <h1> e aggiungi un listener per il click
const titolo = document.querySelector('h1');
titolo.addEventListener('click', () => {
  alert('Hai cliccato sul titolo!');
});

// 2. Cambia dinamicamente il contenuto di un paragrafo
const paragrafo = document.querySelector('p');
paragrafo.addEventListener('mouseenter', () => {
  paragrafo.textContent = 'Stai passando il mouse su di me!';
});
paragrafo.addEventListener('mouseleave', () => {
  paragrafo.textContent = 'Questo è il mio primo sito.';
});