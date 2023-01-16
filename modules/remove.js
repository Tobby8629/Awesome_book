const remove = (arry, re) => {
  re.parentNode.remove();
  arry.delbook(parseInt(re.dataset.id, 10));
  localStorage.setItem('array', JSON.stringify(arry.lists));
};
export default remove;