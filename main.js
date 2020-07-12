'use strict';

const items = document.querySelector('.items');
const inputPrice = document.querySelector('.footer__input--price');
const inputItem = document.querySelector('.footer__input--item');
const addBtn = document.querySelector('.footer__button');
var tempPrice;

function onAddItem() {
  const text = inputItem.value;
  if (text === '') {
    inputItem.focus();
    return;
  }

  const item = createItem(text);
  items.appendChild(item);
  item.scrollIntoView({ block: 'center' });
  inputItem.value = '';
  inputItem.focus();
}

function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');

  const item = document.createElement('div');
  item.setAttribute('class', 'item');

  const name = document.createElement('p');
  name.setAttribute('class', 'item__name');
  name.innerText = text;
  name.addEventListener('click', () => {
    item.classList.toggle('item--get');
  });

  const price = document.createElement('p');
  price.setAttribute('class', 'item__price');
  //   price.setAttribute('onclick', 'inputPrice.focus()');
  price.innerText = '---KRW';
  price.addEventListener('click', () => {
    tempPrice = price;
    inputPrice.focus();
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'item__delete');
  deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
  deleteBtn.addEventListener('click', () => {
    items.removeChild(itemRow);
  });

  const itemDivider = document.createElement('div');
  itemDivider.setAttribute('class', 'item__divider');

  item.appendChild(name);
  item.appendChild(price);
  item.appendChild(deleteBtn);

  itemRow.appendChild(item);
  itemRow.appendChild(itemDivider);
  return itemRow;
}

function onAddPrice() {
  const price = inputPrice.value;
  inputPrice.value = '';
  if (price === '') {
    document.activeElement.blur();
    tempPrice = undefined;
    return;
  }
  tempPrice.innerText = `${parseFloat(price)}KRW`;
}

addBtn.addEventListener('click', () => {
  onAddItem();
});

inputItem.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    onAddItem();
  }
});

inputPrice.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    onAddPrice();
  }
});
