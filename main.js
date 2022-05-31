const form = document.querySelector('.form');
const number = '789287509604';
function sendToWhatsapp(text, number) {

  text = encodeURIComponent(text);

  let url = `https://web.whatsapp.com/send?phone=${number}&text=${text}&source=&data=`;

  window.open(url);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  var text = e.currentTarget.querySelector('input').value; // Сообщение
  text = (text+wt1_1);
  sendToWhatsapp(text, number);
});

const btns = document.querySelectorAll('.item-pizza__button');
const modals = document.querySelectorAll('.modal');

btns.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');


    for (let x= 0; x<path ; x++) {
      modals[x].style.display = "block";
      const body = document.getElementsByTagName('body')[0];
      body.style.overflow="hidden";
   };
  });
});

const wt1_1 = document.getElementById("11").innerHTML;
const wt1_2 = document.getElementById("12").innerHTML;
const wt1_3 = document.getElementById("13").innerHTML;

const wt2_1 = document.getElementById("21").innerHTML;
const wt2_2 = document.getElementById("22").innerHTML;
const wt2_3 = document.getElementById("23").innerHTML;

const wt3_1 = document.getElementById("31").innerHTML;
const wt3_2 = document.getElementById("32").innerHTML;
const wt3_3 = document.getElementById("33").innerHTML;

const wt4_1 = document.getElementById("41").innerHTML;
const wt4_2 = document.getElementById("42").innerHTML;
const wt4_3 = document.getElementById("43").innerHTML;

const wt5_1 = document.getElementById("51").innerHTML;
const wt5_2 = document.getElementById("52").innerHTML;
const wt5_3 = document.getElementById("53").innerHTML;

const wt6_1 = document.getElementById("61").innerHTML;
const wt6_2 = document.getElementById("62").innerHTML;
const wt6_3 = document.getElementById("63").innerHTML;

const wt7_1 = document.getElementById("71").innerHTML;
const wt7_2 = document.getElementById("72").innerHTML;
const wt7_3 = document.getElementById("73").innerHTML;

const wt8_1 = document.getElementById("81").innerHTML;
const wt8_2 = document.getElementById("82").innerHTML;
const wt8_3 = document.getElementById("83").innerHTML;

const wt9_1 = document.getElementById("91").innerHTML;
const wt9_2 = document.getElementById("92").innerHTML;
const wt9_3 = document.getElementById("93").innerHTML;

const wt10_1 = document.getElementById("101").innerHTML;
const wt10_2 = document.getElementById("102").innerHTML;
const wt10_3 = document.getElementById("103").innerHTML;

const wt11_1 = document.getElementById("111").innerHTML;
const wt11_2 = document.getElementById("112").innerHTML;
const wt11_3 = document.getElementById("113").innerHTML;

const wt12_1 = document.getElementById("121").innerHTML;
const wt12_2 = document.getElementById("122").innerHTML;
const wt12_3 = document.getElementById("123").innerHTML;

const wt13_1 = document.getElementById("131").innerHTML;
const wt13_2 = document.getElementById("132").innerHTML;
const wt13_3 = document.getElementById("133").innerHTML;

const wt14_1 = document.getElementById("141").innerHTML;
const wt14_2 = document.getElementById("142").innerHTML;
const wt14_3 = document.getElementById("143").innerHTML;

const wt15_1 = document.getElementById("151").innerHTML;
const wt15_2 = document.getElementById("152").innerHTML;
const wt15_3 = document.getElementById("153").innerHTML;

const wt16_1 = document.getElementById("161").innerHTML;
const wt16_2 = document.getElementById("162").innerHTML;
const wt16_3 = document.getElementById("163").innerHTML;

const wt17_1 = document.getElementById("171").innerHTML;
const wt17_2 = document.getElementById("172").innerHTML;
const wt17_3 = document.getElementById("173").innerHTML;

const wt18_1 = document.getElementById("181").innerHTML;
const wt18_2 = document.getElementById("182").innerHTML;
const wt18_3 = document.getElementById("183").innerHTML;

const wt19_1 = document.getElementById("191").innerHTML;
const wt19_2 = document.getElementById("192").innerHTML;
const wt19_3 = document.getElementById("193").innerHTML;

const wt20_1 = document.getElementById("201").innerHTML;
const wt20_2 = document.getElementById("202").innerHTML;
const wt20_3 = document.getElementById("203").innerHTML;

const wt21_1 = document.getElementById("211").innerHTML;
const wt21_2 = document.getElementById("212").innerHTML;
const wt21_3 = document.getElementById("213").innerHTML;

const wt22_1 = document.getElementById("221").innerHTML;
const wt22_2 = document.getElementById("222").innerHTML;
const wt22_3 = document.getElementById("223").innerHTML;

const wt23_1 = document.getElementById("231").innerHTML;
const wt23_2 = document.getElementById("232").innerHTML;
const wt23_3 = document.getElementById("233").innerHTML;

const wt24_1 = document.getElementById("241").innerHTML;
const wt24_2 = document.getElementById("242").innerHTML;
const wt24_3 = document.getElementById("243").innerHTML;

const wt25_1 = document.getElementById("251").innerHTML;
const wt25_2 = document.getElementById("252").innerHTML;
const wt25_3 = document.getElementById("253").innerHTML;

const wt26_1 = document.getElementById("261").innerHTML;
const wt26_2 = document.getElementById("262").innerHTML;
const wt26_3 = document.getElementById("263").innerHTML;

const wt27_1 = document.getElementById("271").innerHTML;
const wt27_2 = document.getElementById("272").innerHTML;
const wt27_3 = document.getElementById("273").innerHTML;

const wt28_1 = document.getElementById("281").innerHTML;
const wt28_2 = document.getElementById("282").innerHTML;
const wt28_3 = document.getElementById("283").innerHTML;

const wt29_1 = document.getElementById("291").innerHTML;
const wt29_2 = document.getElementById("292").innerHTML;
const wt29_3 = document.getElementById("293").innerHTML;

const wt30_1 = document.getElementById("301").innerHTML;
const wt30_2 = document.getElementById("302").innerHTML;
const wt30_3 = document.getElementById("303").innerHTML;

const wt31_1 = document.getElementById("311").innerHTML;
const wt31_2 = document.getElementById("312").innerHTML;
const wt31_3 = document.getElementById("313").innerHTML;

const wt32_1 = document.getElementById("321").innerHTML;
const wt32_2 = document.getElementById("322").innerHTML;
const wt32_3 = document.getElementById("323").innerHTML;

const wt33_1 = document.getElementById("331").innerHTML;
const wt33_2 = document.getElementById("332").innerHTML;
const wt33_3 = document.getElementById("333").innerHTML;






