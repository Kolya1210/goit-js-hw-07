
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const liRef =  name => {
   const first = document.createElement('li');
   first.textContent = name;
   return first;
}
const list = ingredients.map(fruit => liRef(fruit));
const titleRef = document.querySelector('#ingredients');
titleRef.append(...list);


// const createIngradientsList = ingredient => {
//   const liItemRef = document.createElement('li');
//   liItemRef.textContent = ingredient;
//   return liItemRef;
// }
// const oneCard = ingredients.map(card => createIngradientsList(card))
// const ulRef = document.querySelector('#ingredients')
// ulRef.append(...oneCard);








