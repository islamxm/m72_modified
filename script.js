'use strict';

// Инициализация aos.js, потому что заебешься вручную писать
AOS.init();

//Header bg toggler 

const header = document.querySelector('.header');

function headerBgToggler() {
    if(document.documentElement.scrollTop > 40) {
        header.classList.add('header-show')
    }
    if(document.documentElement.scrollTop <= 40 && header.classList.contains('header-show')) {
        header.classList.remove('header-show')
    }
}

setInterval(headerBgToggler, 1);

// Preloader 

window.onload = function () {
    document.body.classList.add('loaded_hiding');

    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 1000);
}


$(document).ready(function () {
    
    


    // Counter с помощью jquery потому что не смог сам реализовать
    let show = true;
    let countbox = ".counter__wrapper";

    function counter() {
        $(window).on("scroll load resize", function () {
            if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
            let w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
            let e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
            let w_height = $(window).height(); // Высота окна браузера
            let d_height = $(document).height(); // Высота всего документа
            let e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
            if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
                $('.counter__element_num').css('opacity', '1');
                $('.counter__element_num').spincrement({
                    thousandSeparator: "",
                    duration: 4000
                });
                 
                show = false;
            }
        });
    };


    

    counter();


 
});



