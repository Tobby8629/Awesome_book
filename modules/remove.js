
export const remove = (arry,re) => {
    arry.delbook(re.dataset.id);
    localStorage.setItem('array', JSON.stringify(arry));
     re.parentNode.remove();
}