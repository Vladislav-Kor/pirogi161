const form = document.querySelector('.form');
const number = '789287509604';

// Функция отправки в WhatsApp
function sendToWhatsapp(text, number) {
  text = encodeURIComponent(text);
  const url = `https://web.whatsapp.com/send?phone=${number}&text=${text}`;
  window.open(url);
}

// Сбор данных wtXX_Y
const wtData = {};

// Максимальное число групп и элементов в группе (33 и 3 — по вашему примеру)
const groups = 33;
const itemsPerGroup = 3;

for (let group = 1; group <= groups; group++) {
  wtData[group] = [];
  for (let item = 1; item <= itemsPerGroup; item++) {
    const id = `${group}${item}1`.slice(0, -1); // например, '11', '12', '13' для group=1
    // В вашем оригинале id формируются как '11', '12', '13', '21', '22', '23' и т.д.
    // Формируем id как `${group}${item}`, например '11' для group=1, item=1
    const elementId = `${group}${item}1`.slice(0, -1); // но slice тут лишний, проще:
    const elId = `${group}${item}1`;
    const el = document.getElementById(elId);
    wtData[group][item - 1] = el ? el.innerHTML.trim() : '';
  }
}

// Обработчик формы
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputValue = e.currentTarget.querySelector('input').value.trim();
  // Предполагается, что к inputValue надо добавить wt1_1? 
  // Уточните логику, если надо динамически из wtData брать данные.
  const text = inputValue + (wtData[1] ? wtData[1][0] : ''); 
  sendToWhatsapp(text, number);
});
