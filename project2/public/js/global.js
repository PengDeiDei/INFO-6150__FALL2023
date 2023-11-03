"use strict";
(function(){
    /*
     * @brief: Function to create dropdown menu  
     */
    const dropdown__btn = document.querySelector(".dropdown__btn");
    const dropdown__content = document.querySelector(".dropdown__content");
    
    dropdown__btn.addEventListener("click",function(){
        dropdown__content.classList.toggle("active");
    });


    /*
     * @brief: enable each subscribe link to open the register form, 
     */
    const subscribe__links = document.querySelectorAll(".subscribe__link");
    const main__subscribe = document.querySelector(".main__subscribe");

    subscribe__links.forEach((link) =>{
        link.addEventListener("click",(event)=>{
            event.preventDefault();
            main__subscribe.showModal();
        })
    });

    /*
     * @brief: enable "cancel" button to close the form and return to cats page
     */
    const cancel__btn = document.querySelector(".form__cancel-btn");

    cancel__btn.addEventListener("click",(event)=>{
        event.preventDefault();
        main__subscribe.close();
    });


    /*
     * @brief: setup message if the email field is empty after user left this
     * field or what user entered is invalid as an email address
     */ 

    const form_email__input = document.querySelector(".form__email");
    const form_email__error = document.querySelector(".email__error");

    form_email__input.addEventListener('blur',(event)=>{
        form_email__error.innerText = "";

        let isInvalid = false;
        
        if(!form_email__input.value){
            // check if the field is empty
            form_email__error.innerText = "This field is required to fill";
            isInvalid = true;
        }else if(!form_email__input.value.includes('@')){
            // check if the input is not a regular valid email
            form_email__error.innerText = "Please enter valid email";
            isInvalid = true;
        }

        if(isInvalid){
            event.preventDefault();
        }
    });

     /*
     * @brief: setup message if the confirm field is empty after user left this
     * field or what user entered does not match the input in the email field
     */ 

    const form_confirm__input = document.querySelector(".form__confirm");
    const form_confirm__error = document.querySelector(".confirm__error");

    form_confirm__input.addEventListener('blur',(event)=>{
        form_confirm__error.innerText = "";

        let isInvalid = false;

        if(!form_confirm__input.value){
            // check if the field is empty
            form_confirm__error.innerText = "This field is required to fill";
            isInvalid = true;
        }else if(form_confirm__input.value != form_email__input.value){
            // check if the input in this field matches the one in the email field
            form_confirm__error.innerText = "The email enteted in this filed must match your email";
            isInvalid = true;
        }

        if(isInvalid){
            event.preventDefault();
        }
    });

    /*
     * @brief: prevent user submit the form unless all fields are filled and valid 
     * 
     */ 

    const main__form = document.querySelector(".subscribe__form");

    main__form.addEventListener('submit', (event)=>{
        form_email__error.innerText = "";
        form_confirm__error.innerText = "";

        let isInvalid = false;

        if(isInvalid){
            event.preventDefault();
        }

        if(!form_email__input.value){
            form_email__error.innerText = "This field is required to fill";
            isInvalid = true;
        }else if(!form_email__input.value.includes('@')){
            form_email__error.innerText = "Please enter valid email";
            isInvalid = true;
        }

        if(!form_confirm__input.value){
            form_confirm__error.innerText = "This field is required to fill";
            isInvalid = true;
        }else if(form_confirm__input.value != form_email__input.value){
            form_confirm__error.innerText = "The email enteted in this filed must match your email";
            isInvalid = true;
        }

        if(isInvalid){
            event.preventDefault();
        }
    });
})();