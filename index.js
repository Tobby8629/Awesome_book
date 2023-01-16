import BookList from './modules/Booklist.js';
import remove from './modules/remove.js';
import links from './modules/links.js';
import date from './modules/time.js';

const all = document.querySelector('.all');
const form = document.querySelector('#form');
const titl = document.querySelector('#title');
const autho = document.querySelector('#author');
const time = document.querySelector('#time');

const booklist = new BookList();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // Add to list of book display
  all.innerHTML = '';
  booklist.Addbook(autho.value, titl.value, all);

  // clear inputs
  autho.value = '';
  titl.value = '';

  // remove from the list
  const del = document.querySelectorAll('.remove');
  del.forEach((del) => {
    del.addEventListener('click', () => {
      remove(booklist, del);
    });
  });
});

window.addEventListener('load', () => {
  const reload = JSON.parse(localStorage.getItem('array'));
  booklist.toReload(reload, all);

  const del = document.querySelectorAll('.remove');
  del.forEach((del) => {
    del.addEventListener('click', () => {
      remove(booklist, del);
    });
  });
});

links();
date(time);
