"use strict";
(function(){
    /*
     * @brief: Function to create dropdown menu  
     */
    const dropdown__btn = document.querySelector(".dropdown__btn");
    const dropdown__content = document.querySelector(".dropdown__content");
    
    dropdown__btn.addEventListener("click",function(){
        dropdown__content.classList.toggle("active");
    })

     /*
     * @brief: show hidden message if username field is empty after user leaves this
     * field 
     */ 

    const form_name = document.querySelector(".form-name");
    const form_name__input = document.querySelector(".form__name");
   
    form_name__input.addEventListener('blur', (event)=>{
        let isInvalid = false;
        form_name.classList.remove("form-name--invalid");

        if(!form_name__input.value){
            form_name.classList.add("form-name--invalid");
            isInvalid = true;
        }

        if(isInvalid){
            event.preventDefault();
        }
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
        }else if(!form_email__input.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
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
     * @brief: setup message if the tier field is not select after user leaves this
     * field
     */ 

    const form_tier__input = document.querySelector(".form__tier");
    const form_tier__error = document.querySelector(".tier__error");

    form_tier__input.addEventListener('blur', (event)=>{
        form_tier__error.innerText = "";

        let isInvalid = false;

        if(form_tier__input.value == 0){
            form_tier__error.innerText = "Please select the tier you want";
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

    const main__form = document.querySelector(".main__form");

    main__form.addEventListener('submit', (event)=>{
        form_name.classList.remove("form-name--invalid");
        form_email__error.innerText = "";
        form_confirm__error.innerText = "";
        form_tier__error.innerText = "";

        let isInvalid = false;


        if(!form_name__input.value){
            form_name.classList.add("form-name--invalid");
            isInvalid = true;
        }

        if(isInvalid){
            event.preventDefault();
        }

        if(!form_email__input.value){
            form_email__error.innerText = "This field is required to fill";
            isInvalid = true;
        }else if(!form_email__input.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
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

        if(form_tier__input.value == 0){
            form_tier__error.innerText = "Please select the tier you want";
            isInvalid = true;
        }

        if(isInvalid){
            event.preventDefault();
        }
    });
})();