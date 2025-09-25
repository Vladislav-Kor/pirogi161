// Яндекс карта
let center = [47.230651, 39.683994];

function init() {
  let map = new ymaps.Map("map__address-script", {
    center: center,
    zoom: 17,
    controls: []
  });

  let placemark = new ymaps.Placemark(center);
  map.geoObjects.add(placemark);

  // Также отключаем скролл карты при необходимости:
  // map.behaviors.disable(['scrollZoom']);
}

ymaps.ready(init);

// Отправка в WhatsApp
const number = '789287509604';

function sendToWhatsapp(text, number) {
  text = encodeURIComponent(text);
  let url = window.innerWidth >= 960
    ? `https://web.whatsapp.com/send?phone=${number}&text=${text}`
    : `https://wa.me/${number}/?text=${text}`;
  window.open(url);
}

// Обработка выбора цены
let price = '';
document.addEventListener('click', e => {
  if (e.target.classList.contains('wt_bacs')) {
    price = e.target.innerText.trim();
  }
});

// Универсальная обработка всех форм с id x1 ... x33
document.addEventListener('DOMContentLoaded', () => {
  // Используем делегирование на форме-родителе, если есть, или по всем формам
  for (let i = 1; i <= 33; i++) {
    const form = document.getElementById('x' + i);
    if (!form) continue;
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // предотвращаем стандартную отправку формы

      const nameInput = form.querySelector(`#inp${i}`);
      const tovarElem = document.querySelector(`#name${i}`);

      if (!nameInput || !tovarElem) {
        console.warn(`Элементы с id inp${i} или name${i} не найдены`);
        return;
      }

      const name = nameInput.value.trim();
      const tovar = tovarElem.innerText.trim();

      const whatsAppMessage = `${tovar}. Стоимость ${price}. Зовут ${name}.`;
      console.log(whatsAppMessage);
      sendToWhatsapp(whatsAppMessage, number);
    });
  }
});

// Модальные окна
const modals = document.querySelectorAll('.modal');
const body = document.body;

document.addEventListener('click', e => {
  // Кнопки открытия модалок
  if (e.target.classList.contains('item-pizza__button')) {
    const path = +e.target.getAttribute('data-path');
    if (!isNaN(path) && path > 0) {
      for (let i = 0; i < path && i < modals.length; i++) {
        modals[i].style.display = "block";
      }
      body.style.overflow = "hidden";
    }
  }

  // Кнопки закрытия модалок
  if (e.target.classList.contains('close')) {
    modals.forEach(modal => modal.style.display = 'none');
    body.style.overflow = "auto";
  }
});
