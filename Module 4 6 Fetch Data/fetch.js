fetch('https://fakestoreapi.com/products?_limit=10')
  .then(response => response.json())
  .then((json) => {

const cardFunct = (parameter) => {
const cloneNode = getElementById ("cardTemp")
    .document
    .content 
    .clonenode(true);
    .querySelector("card-title").innerText = parameter.title

}
  });