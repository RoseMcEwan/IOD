let news = [
{ id: 1, title: 'Election Results',
content: "Newly elected minister..." },
{ id: 2, title: 'Sporting Success',
content: "World Cup winners..." },
{ id: 3, title: 'Tornado Warning',
content: "Residents should prepare..." }
];

const artfunct = (parameter) => {
const artFunctInside = document
    .getElementById("articleMain")
    .content
    .cloneNode(true);

artFunctInside.querySelector(".card-title").innerText = parameter.title
artFunctInside.querySelector(".card-content").innerText = parameter.content 

document
    .getElementById("containerRow")
    .appendChild(artFunctInside)
}
for (let key of news){
 artfunct(key); 
}; 

document
    .getElementById("button-addon2")
    .addEventListener("click", () => {

       const newArticle = {
            id: news.length + 1,
            title: document.getElementById("title").value,
            content: document.getElementById("content").value
        };
    
    news.push(newArticle);
    });

setInterval(() => {

    document.getElementById("containerRow").innerHTML = "";

    for (let key of news) {
        artfunct(key);
    }

}, 5000);
