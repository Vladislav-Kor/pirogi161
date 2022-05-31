let center = [47.230651,39.683994];

function init() {
    let map = new ymaps.Map("map__address-script", {
        center: center,
        zoom: 17
    });

    let placemark = new ymaps.Placemark(center, {}, {

    });

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    /* map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально) */

    map.geoObjects.add(placemark);
}

ymaps.ready(init);





const number = '789287509604';
function sendToWhatsapp(text, number) {

  text = encodeURIComponent(text);

  if (window.innerWidth >= 960) {
    let url = `https://web.whatsapp.com/send?phone=${number}&text=${text}&source=&data=`;
    window.open(url);
      }
  else{
    let url = `https://wa.me/${number}/?text=${text}&source=&data=`;
    window.open(url);
      }

}


let price = '';

document.addEventListener('DOMContentLoaded', function () { // При загрузке документа
  const priceButtons = document.querySelectorAll('.wt_bacs'); // Получаем кнопки с классом

  priceButtons.forEach(function (priceButton) { // Для каждой кнопки
    priceButton.onclick = function () { // Слушаем нажатие
      price = priceButton.innerText;
    }
  });


  const form1 = document.querySelector('#x1');
    form1.addEventListener('submit', function () {

        const name1 = document.querySelector('#inp1').value;
        const tovar1 = document.querySelector('#name1').innerText;
        const whatsAppMessag1e = `${tovar1}. Стоимость ${price}. Зовут ${name1}.` ; // Сообщение
        console.log(whatsAppMessage1);
        sendToWhatsapp(whatsAppMessage1, number);
      });

      const form2 = document.querySelector('#x2');
        form2.addEventListener('submit', function () {

            const name2 = document.querySelector('#inp2').value;
            const tovar2 = document.querySelector('#name2').innerText;
            const whatsAppMessage2 = `${tovar2}. Стоимость ${price}. Зовут ${name2}.` ; // Сообщение
            console.log(whatsAppMessage2);
            sendToWhatsapp(whatsAppMessage2, number);
          });
          const form3 = document.querySelector('#x3');
            form3.addEventListener('submit', function () {

                const name3 = document.querySelector('#inp3').value;
                const tovar3 = document.querySelector('#name3').innerText;
                const whatsAppMessage3 = `${tovar3}. Стоимость ${price}. Зовут ${name3}.` ; // Сообщение
                console.log(whatsAppMessage3);
                sendToWhatsapp(whatsAppMessage3, number);
              });

              const form4 = document.querySelector('#x4');
                form4.addEventListener('submit', function () {

                    const name4 = document.querySelector('#inp4').value;
                    const tovar4 = document.querySelector('#name4').innerText;
                    const whatsAppMessage4 = `${tovar4}. Стоимость ${price}. Зовут ${name4}.` ; // Сообщение
                    console.log(whatsAppMessage4);
                    sendToWhatsapp(whatsAppMessage4, number);
                  });
                  const form5 = document.querySelector('#x5');
                    form5.addEventListener('submit', function () {

                        const name5 = document.querySelector('#inp5').value;
                        const tovar5 = document.querySelector('#name5').innerText;
                        const whatsAppMessage5 = `${tovar5}. Стоимость ${price}. Зовут ${name5}.` ; // Сообщение
                        console.log(whatsAppMessage5);
                        sendToWhatsapp(whatsAppMessage5, number);
                      });
                      const form6 = document.querySelector('#x6');
                        form6.addEventListener('submit', function () {

                            const name6 = document.querySelector('#inp6').value;
                            const tovar6 = document.querySelector('#name6').innerText;
                            const whatsAppMessage6 = `${tovar6}. Стоимость ${price}. Зовут ${name6}.` ; // Сообщение
                            console.log(whatsAppMessage6);
                            sendToWhatsapp(whatsAppMessage6, number);
                          });
                          const form7 = document.querySelector('#x7');
                            form7.addEventListener('submit', function () {

                                const name7 = document.querySelector('#inp7').value;
                                const tovar7 = document.querySelector('#name7').innerText;
                                const whatsAppMessage7 = `${tovar7}. Стоимость ${price}. Зовут ${name7}.` ; // Сообщение
                                console.log(whatsAppMessage7);
                                sendToWhatsapp(whatsAppMessage7, number);
                              });
                              const form8 = document.querySelector('#x8');
                                form8.addEventListener('submit', function () {

                                    const name8 = document.querySelector('#inp8').value;
                                    const tovar8 = document.querySelector('#name8').innerText;
                                    const whatsAppMessage8 = `${tovar8}. Стоимость ${price}. Зовут ${name8}.` ; // Сообщение
                                    console.log(whatsAppMessage8);
                                    sendToWhatsapp(whatsAppMessage8, number);
                                  });
                                  const form9 = document.querySelector('#x9');
                                    form9.addEventListener('submit', function () {

                                        const name9 = document.querySelector('#inp9').value;
                                        const tovar9 = document.querySelector('#name9').innerText;
                                        const whatsAppMessage9 = `${tovar9}. Стоимость ${price}. Зовут ${name9}.` ; // Сообщение
                                        console.log(whatsAppMessage9);
                                        sendToWhatsapp(whatsAppMessage9, number);
                                      });
                                      const form10 = document.querySelector('#x10');
                                        form10.addEventListener('submit', function () {

                                            const name10 = document.querySelector('#inp10').value;
                                            const tovar10 = document.querySelector('#name10').innerText;
                                            const whatsAppMessage10 = `${tovar10}. Стоимость ${price}. Зовут ${name10}.` ; // Сообщение
                                            console.log(whatsAppMessage10);
                                            sendToWhatsapp(whatsAppMessage10, number);
                                          });
                                          const form11 = document.querySelector('#x11');
                                            form11.addEventListener('submit', function () {

                                                const name11 = document.querySelector('#inp11').value;
                                                const tovar11 = document.querySelector('#name11').innerText;
                                                const whatsAppMessage11 = `${tovar11}. Стоимость ${price}. Зовут ${name11}.` ; // Сообщение
                                                console.log(whatsAppMessage11);
                                                sendToWhatsapp(whatsAppMessage11, number);
                                              });
                                              const form12 = document.querySelector('#x12');
                                                form12.addEventListener('submit', function () {

                                                    const name12 = document.querySelector('#inp12').value;
                                                    const tovar12 = document.querySelector('#name12').innerText;
                                                    const whatsAppMessage12 = `${tovar12}. Стоимость ${price}. Зовут ${name12}.` ; // Сообщение
                                                    console.log(whatsAppMessage12);
                                                    sendToWhatsapp(whatsAppMessage12, number);
                                                  });
                                                  const form13 = document.querySelector('#x13');
                                                    form13.addEventListener('submit', function () {

                                                        const name13 = document.querySelector('#inp13').value;
                                                        const tovar13 = document.querySelector('#name13').innerText;
                                                        const whatsAppMessage13 = `${tovar13}. Стоимость ${price}. Зовут ${name13}.` ; // Сообщение
                                                        console.log(whatsAppMessage13);
                                                        sendToWhatsapp(whatsAppMessage13, number);
                                                      });
                                                      const form14 = document.querySelector('#x14');
                                                        form14.addEventListener('submit', function () {

                                                            const name14 = document.querySelector('#inp14').value;
                                                            const tovar14 = document.querySelector('#name14').innerText;
                                                            const whatsAppMessage14 = `${tovar14}. Стоимость ${price}. Зовут ${name14}.` ; // Сообщение
                                                            console.log(whatsAppMessage14);
                                                            sendToWhatsapp(whatsAppMessage14, number);
                                                          });
                                                          const form15 = document.querySelector('#x15');
                                                            form15.addEventListener('submit', function () {

                                                                const name15 = document.querySelector('#inp15').value;
                                                                const tovar15 = document.querySelector('#name15').innerText;
                                                                const whatsAppMessage15 = `${tovar15}. Стоимость ${price}. Зовут ${name15}.` ; // Сообщение
                                                                console.log(whatsAppMessage15);
                                                                sendToWhatsapp(whatsAppMessage15, number);
                                                              });
                                                              const form16 = document.querySelector('#x16');
                                                                form16.addEventListener('submit', function () {

                                                                    const name16 = document.querySelector('#inp16').value;
                                                                    const tovar16 = document.querySelector('#name16').innerText;
                                                                    const whatsAppMessage16 = `${tovar16}. Стоимость ${price}. Зовут ${name16}.` ; // Сообщение
                                                                    console.log(whatsAppMessage16);
                                                                    sendToWhatsapp(whatsAppMessage16, number);
                                                                  });
                                                                  const form17 = document.querySelector('#x17');
                                                                    form17.addEventListener('submit', function () {

                                                                        const name17 = document.querySelector('#inp17').value;
                                                                        const tovar17 = document.querySelector('#name17').innerText;
                                                                        const whatsAppMessage17 = `${tovar17}. Стоимость ${price}. Зовут ${name17}.` ; // Сообщение
                                                                        console.log(whatsAppMessage17);
                                                                        sendToWhatsapp(whatsAppMessage17, number);
                                                                      });
                                                                      const form18 = document.querySelector('#x18');
                                                                        form18.addEventListener('submit', function () {

                                                                            const name18 = document.querySelector('#inp18').value;
                                                                            const tovar18 = document.querySelector('#name18').innerText;
                                                                            const whatsAppMessage2 = `${tovar18}. Стоимость ${price}. Зовут ${name18}.` ; // Сообщение
                                                                            console.log(whatsAppMessage18);
                                                                            sendToWhatsapp(whatsAppMessage18, number);
                                                                          });
                                                                          const form19 = document.querySelector('#x19');
                                                                            form19.addEventListener('submit', function () {

                                                                                const name19 = document.querySelector('#inp19').value;
                                                                                const tovar19 = document.querySelector('#name19').innerText;
                                                                                const whatsAppMessage19 = `${tovar19}. Стоимость ${price}. Зовут ${name19}.` ; // Сообщение
                                                                                console.log(whatsAppMessage19);
                                                                                sendToWhatsapp(whatsAppMessage19, number);
                                                                              });
                                                                              const form20 = document.querySelector('#x20');
                                                                                form20.addEventListener('submit', function () {

                                                                                    const name20 = document.querySelector('#inp20').value;
                                                                                    const tovar20 = document.querySelector('#name20').innerText;
                                                                                    const whatsAppMessage20 = `${tovar20}. Стоимость ${price}. Зовут ${name20}.` ; // Сообщение
                                                                                    console.log(whatsAppMessage20);
                                                                                    sendToWhatsapp(whatsAppMessage20, number);
                                                                                  });
                                                                                  const form21 = document.querySelector('#x21');
                                                                                    form21.addEventListener('submit', function () {

                                                                                        const name21 = document.querySelector('#inp21').value;
                                                                                        const tovar21 = document.querySelector('#name21').innerText;
                                                                                        const whatsAppMessage21 = `${tovar21}. Стоимость ${price}. Зовут ${name21}.` ; // Сообщение
                                                                                        console.log(whatsAppMessage21);
                                                                                        sendToWhatsapp(whatsAppMessage21, number);
                                                                                      });
                                                                                      const form22 = document.querySelector('#x22');
                                                                                        form22.addEventListener('submit', function () {

                                                                                            const name22 = document.querySelector('#inp22').value;
                                                                                            const tovar22 = document.querySelector('#name22').innerText;
                                                                                            const whatsAppMessage22 = `${tovar22}. Стоимость ${price}. Зовут ${name22}.` ; // Сообщение
                                                                                            console.log(whatsAppMessage22);
                                                                                            sendToWhatsapp(whatsAppMessage22, number);
                                                                                          });
                                                                                          const form23 = document.querySelector('#x23');
                                                                                            form23.addEventListener('submit', function () {

                                                                                                const name23 = document.querySelector('#inp23').value;
                                                                                                const tovar23 = document.querySelector('#name23').innerText;
                                                                                                const whatsAppMessage23 = `${tovar23}. Стоимость ${price}. Зовут ${name23}.` ; // Сообщение
                                                                                                console.log(whatsAppMessage23);
                                                                                                sendToWhatsapp(whatsAppMessage23, number);
                                                                                              });
                                                                                              const form24 = document.querySelector('#x24');
                                                                                                form24.addEventListener('submit', function () {

                                                                                                    const name24 = document.querySelector('#inp24').value;
                                                                                                    const tovar24 = document.querySelector('#name24').innerText;
                                                                                                    const whatsAppMessage24 = `${tovar24}. Стоимость ${price}. Зовут ${name24}.` ; // Сообщение
                                                                                                    console.log(whatsAppMessage24);
                                                                                                    sendToWhatsapp(whatsAppMessage24, number);
                                                                                                  });
                                                                                                  const form25 = document.querySelector('#x25');
                                                                                                    form25.addEventListener('submit', function () {

                                                                                                        const name25 = document.querySelector('#inp25').value;
                                                                                                        const tovar25 = document.querySelector('#name25').innerText;
                                                                                                        const whatsAppMessage25 = `${tovar25}. Стоимость ${price}. Зовут ${name25}.` ; // Сообщение
                                                                                                        console.log(whatsAppMessage25);
                                                                                                        sendToWhatsapp(whatsAppMessage25, number);
                                                                                                      });
                                                                                                      const form26 = document.querySelector('#x26');
                                                                                                        form26.addEventListener('submit', function () {

                                                                                                            const name26 = document.querySelector('#inp26').value;
                                                                                                            const tovar26 = document.querySelector('#name26').innerText;
                                                                                                            const whatsAppMessage26 = `${tovar26}. Стоимость ${price}. Зовут ${name26}.` ; // Сообщение
                                                                                                            console.log(whatsAppMessage26);
                                                                                                            sendToWhatsapp(whatsAppMessage26, number);
                                                                                                          });
                                                                                                             const form27 = document.querySelector('#x27');
                                                                                                                  form27.addEventListener('submit', function () {

                                                                                                                      const name27 = document.querySelector('#inp27').value;
                                                                                                                      const tovar27 = document.querySelector('#name27').innerText;
                                                                                                                      const whatsAppMessage27 = `${tovar27}. Стоимость ${price}. Зовут ${name27}.` ; // Сообщение
                                                                                                                      console.log(whatsAppMessage27);
                                                                                                                      sendToWhatsapp(whatsAppMessage27, number);
                                                                                                                    });
                                                                                                                      const form28 = document.querySelector('#x28');
                                                                                                                            form28.addEventListener('submit', function () {

                                                                                                                                const name28 = document.querySelector('#inp28').value;
                                                                                                                                const tovar28 = document.querySelector('#name28').innerText;
                                                                                                                                const whatsAppMessage28 = `${tovar28}. Стоимость ${price}. Зовут ${name28}.` ; // Сообщение
                                                                                                                                console.log(whatsAppMessage28);
                                                                                                                                sendToWhatsapp(whatsAppMessage28, number);
                                                                                                                              });
                                                                                                                                  const form29 = document.querySelector('#x29');
                                                                                                                                      form29.addEventListener('submit', function () {

                                                                                                                                          const name29 = document.querySelector('#inp29').value;
                                                                                                                                          const tovar29 = document.querySelector('#name29').innerText;
                                                                                                                                          const whatsAppMessage29 = `${tovar29}. Стоимость ${price}. Зовут ${name29}.` ; // Сообщение
                                                                                                                                          console.log(whatsAppMessage29);
                                                                                                                                          sendToWhatsapp(whatsAppMessage29, number);
                                                                                                                                        });
                                                                                                                                          const form30 = document.querySelector('#x30');
                                                                                                                                                form30.addEventListener('submit', function () {

                                                                                                                                                    const name30 = document.querySelector('#inp30').value;
                                                                                                                                                    const tovar30 = document.querySelector('#name30').innerText;
                                                                                                                                                    const whatsAppMessage30 = `${tovar30}. Стоимость ${price}. Зовут ${name30}.` ; // Сообщение
                                                                                                                                                    console.log(whatsAppMessage30);
                                                                                                                                                    sendToWhatsapp(whatsAppMessage30, number);
                                                                                                                                                  });
                                                                                                                                                      const form31 = document.querySelector('#x31');
                                                                                                                                                          form31.addEventListener('submit', function () {

                                                                                                                                                              const name31 = document.querySelector('#inp2').value;
                                                                                                                                                              const tovar31 = document.querySelector('#name2').innerText;
                                                                                                                                                              const whatsAppMessage31 = `${tovar31}. Стоимость ${price}. Зовут ${name31}.` ; // Сообщение
                                                                                                                                                              console.log(whatsAppMessage31);
                                                                                                                                                              sendToWhatsapp(whatsAppMessage31, number);
                                                                                                                                                            });
                                                                                                                                                               const form32 = document.querySelector('#x32');
                                                                                                                                                                    form32.addEventListener('submit', function () {

                                                                                                                                                                        const name32 = document.querySelector('#inp32').value;
                                                                                                                                                                        const tovar32 = document.querySelector('#name32').innerText;
                                                                                                                                                                        const whatsAppMessage32 = `${tovar32}. Стоимость ${price}. Зовут ${name32}.` ; // Сообщение
                                                                                                                                                                        console.log(whatsAppMessage32);
                                                                                                                                                                        sendToWhatsapp(whatsAppMessage32, number);
                                                                                                                                                                      });
                                                                                                                                                                        const form33 = document.querySelector('#x33');
                                                                                                                                                                           form33.addEventListener('submit', function () {

                                                                                                                                                                               const name33 = document.querySelector('#inp33').value;
                                                                                                                                                                               const tovar33 = document.querySelector('#name33').innerText;
                                                                                                                                                                               const whatsAppMessage33 = `${tovar33}. Стоимость ${price}. Зовут ${name33}.` ; // Сообщение
                                                                                                                                                                               console.log(whatsAppMessage33);
                                                                                                                                                                               sendToWhatsapp(whatsAppMessage33, number);
                                                                                                                                                                             });

  });


const btns = document.querySelectorAll('.item-pizza__button');
const modals = document.querySelectorAll('.modal');
const close = document.querySelectorAll('.close');

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

close.forEach((al) => {
  al.addEventListener('click', (a) => {


    for (let x= 0; x<34; x++) {
      modals[x].style.display = "none";
      const body = document.getElementsByTagName('body')[0];
      body.style.overflow="auto";
   };

  });
});
