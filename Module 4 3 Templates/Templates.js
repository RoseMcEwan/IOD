const data = [{name: 'bob', age: 23}, {name: 'alice', age: 39}]
for (let person of data){
  addCard(person);
}

function addCard(parameter) {
// clone the template
const template =
document.getElementById("card-template")
.content.cloneNode(true);
// populate the template
template.querySelector('.card-title').innerText = parameter.name;
template.querySelector('.card-text').innerText =
'Age: ' + parameter.age;
// include the populated template into the page
document.querySelector('#card-list')
.appendChild(template);
}



const artist = {
name: "Van Gogh",
portfolio:[
{title: "portrait", url:
"https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image"},
{title: "sky", url: "https://mymodernmet.com/wp/wp-content/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg"},
]
}

function artistaddCard (artwork) {

const template = document
    .getElementById("card-template")
    .content
    .cloneNode(true);

    template.querySelector(".card-title").innerText = artwork.title;
    template.querySelector(".card-img-top").src = artwork.url;
    template.querySelector(".card-img-top").alt = artwork.title;
    template.querySelector(".btn").href = artwork.url;
    
document.querySelector('#card-list')
.appendChild(template);
}

const artistName = document.getElementById('artist');
for (let artwork of artist.portfolio){
  artistaddCard(artwork);
}