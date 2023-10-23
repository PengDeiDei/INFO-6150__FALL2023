"use strict";
(function(){
    const dropdown__btn = document.querySelector(".dropdown__btn");
    const dropdown__content = document.querySelector(".dropdown__content");

    dropdown__btn.addEventListener("click",function(){
        dropdown__content.classList.toggle("active");
    })
})();