"use strict";

let cardList = [];
let buttons = document.querySelectorAll('.toBasketBtn');
let cardTotalPrice = 0;

buttons.forEach(button => {
    button.addEventListener('click', addToCard);
});

function addToCard(target) {
    let id = +target.target.dataset.id;
    let price = +target.target.dataset.price;
    let name = target.target.dataset.name;
    let countItems = 1;

    cardList.forEach(
        cardItem => {
            if (cardItem.id === id) {
                cardItem.countItems++;
                countItems++;
                cardTotalPrice += price;
            }
        }
    );
    if (countItems === 1) {
        cardList.push({
            id: id,
            price: price,
            name: name,
            countItems: countItems
        });
        cardTotalPrice += price;
    }
    updateCard();
}

function updateCard() {
    let card = '';
    cardList.forEach(cardItem => {
        card += `
            <tr>
                <th scope="row">${cardItem.id}</th>
                <td>${cardItem.name}</td>
                <td>${cardItem.price}</td>
                <td class="productCount" data-id="${cardItem.id}">${cardItem.countItems}</td>
            </tr>
        `;
    });
    let tbody = document.querySelector('tbody');
    tbody.innerHTML = card;
    let total = document.querySelector('.total');
    total.innerHTML = cardTotalPrice;
}

