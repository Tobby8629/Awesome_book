export let clone = (main, array) => {
    const text = `
      <p> "${array.title}" by ${array.author}</p>
      <button class="remove" data-id = ${array.id}>remove</button>
      `;
  
    const each = document.createElement('div');
    each.classList.add('each');
    each.innerHTML = text;
    main.appendChild(each);
  }