const submitButton= document.getElementById("submit-button");

submitButton.addEventListener('click', function(event){

    event.preventDefault();
    
    valid= true;

    const errorMessages= document.querySelectorAll(".error-message");
    errorMessages.forEach(function(error){
        error.classList.remove('active');
    })
    
    const fname= document.getElementById('fname');
    if(fname.value.trim().length==0){

        const fnameError=document.getElementById("fname-error");
        fnameError.classList.add("active");
        fname.setAttribute("aria-invalid", "true");
        valid=false;
    }
    else{
        fname.setAttribute("aria-invalid", "false");
    }
    const lname=document.getElementById("lname");

    if(lname.value.trim().length==0){
        
        const lnameError= document.getElementById("lname-error");
        lnameError.classList.add('active');
        lname.setAttribute("aria-invalid","true");
        valid= false;
    }
    else{
        lname.setAttribute("aria-invalid", false);
    }
    const email= document.getElementById("email");
    const emailExpression= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim().length==0 || !emailExpression.test(email.value)) {

        const emailError= document.getElementById("email-error");
        emailError.classList.add('active');
        email.setAttribute("aria-invalid", "true");
        valid= false;
    }
    else{
        email.setAttribute("aria-invalid", "false");
    }
    if(!document.getElementById("general-enquiry").checked && !document.getElementById("support-request").checked){

        const queryError= document.getElementById("query-error");
        queryError.classList.add('active');
        valid= false;
    } 
    const message= document.getElementById("message");
    if (message.value.trim().length==0){

        const messageError= document.getElementById("message-error");
        messageError.classList.add("active");
        message.setAttribute("aria-invalid", "true");
        valid= false;
    }
    else{
        message.setAttribute("aria-invalid", "false");
    }
    const checkConsent= document.getElementById("check-consent");

    if(!checkConsent.checked){

        const consentError= document.getElementById("consent-error");
        consentError.classList.add('active');
        valid= false;
    }
    if(valid==true) {
       
        const popUp= document.querySelector(".pop-up");
        popUp.classList.add('show');
        
        document.getElementById("myform").reset();
        const buttons= document.querySelectorAll('.buttons');
        buttons.forEach(function(button){
            button.classList.remove('active');
        })

        setTimeout(() => {
            
            popUp.classList.remove("show");
        }, 7000);

    }
    
});
let parent
const radioButtons= document.querySelectorAll(".radio-buttons input[type='radio']");
radioButtons.forEach(function(radio){

    radio.addEventListener('change', function(){
        
        radioButtons.forEach(function(radio){
            parent= radio.parentElement
            parent.classList.remove("active");
        })
        parent= radio.parentElement;
        parent.classList.add("active");
    });
});

const inputs= document.querySelectorAll('input, textarea');
inputs.forEach(function(input){

    input.addEventListener('input', function(){
        
        const errorMessage= document.getElementById(input.getAttribute('aria-describedby'));
        if (errorMessage.classList.contains('active')){

            errorMessage.classList.remove('active');
        }
        input.setAttribute("aria-invalid", "false");
    })
});