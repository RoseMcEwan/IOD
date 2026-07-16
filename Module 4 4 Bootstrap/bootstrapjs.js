        const cards = [1, 2, 3, 4, 5, 6, 7, 8];

    const functTemp = (parameter) => {
    const cardClone = document
            .getElementById('cardTemp')
            .content
            .cloneNode(true);

    cardClone.querySelector('.card-title').innerText = 'Card ' + parameter;

        document
            .querySelector('#cardContainer')
            .appendChild(cardClone);
    };

            for (let i = 0; i < cards.length; i++) {
            functTemp(cards[i]);

    }