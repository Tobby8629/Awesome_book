const remove = (arry, re) => {
  arry.delbook(parseInt(re.dataset.id, 10));
  localStorage.setItem('array', JSON.stringify(arry));
  re.parentNode.remove();
};
export default remove;