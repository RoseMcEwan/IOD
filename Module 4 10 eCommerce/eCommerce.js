  fetch("https://fakestoreapi.com/products/")
        .then((response) => response.json())
        .then((json) => {
          
    const functTemp = (parameter) => {

    const cardClone = document
            .getElementById('cardTemp')
            .content
            .cloneNode(true);

      cardClone.querySelector(".product-img").src = parameter.image;
      cardClone.querySelector(".card-title").innerText = parameter.title;
      cardClone.querySelector(".card-text").innerText = parameter.description;
      cardClone.querySelector(".btn").innerText = "$" + parameter.price;

        document
            .querySelector('#cardContainer')
            .appendChild(cardClone);
    };

            for (let i = 0; i < json.length; i++) {
            functTemp(json[i]);
            }
    });

