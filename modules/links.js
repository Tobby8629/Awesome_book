import hide from './hide.js';

const links = () => {
  const list = document.querySelector('#list');
  const addnew = document.querySelector('#addnew');
  const contact = document.querySelector('#contact');
  const li = document.querySelector('#top');
  const add = document.querySelector('#add');
  const contac = document.querySelector('#contac');

  list.addEventListener('click', () => {
    hide(li, add, contact);
  });

  addnew.addEventListener('click', () => {
    hide(add, li, contact);
  });

  contac.addEventListener('click', () => {
    hide(contact, add, li);
  });
};

export default links;
