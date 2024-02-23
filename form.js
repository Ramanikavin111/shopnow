const username=document.getElementById("username").value;
const email=document.getElementById("email").value;
const mobilenumber=document.getElementById("mobilenumber").value;
const password=document.getElementById("password").value;
const cpassword=document.getElementById("cpassword").value;
const form=document.getElementById("form");


form.addEventListener("submit",(e)=>{
    validateform();
    e.preventDefault();
})
function error(error,message){
    document.getElementById(error).innerHTML=message;
}
function validateform(){
      nameerror=true;
    if(username==""){
        error("nameerror","Enter the Name");
    }
    emailerror=true;
    if(email==""){
        error("emailerror","Enter the Email");
    }
    numbererror=true;
    if(email==""){
        error("numbererror","Enter the 10 Digit Number");
    }
    passworderror=true;
    if(email==""){
        error("passworderror","Enter the Password");
    }
    cpassworderror=true;
    if(email=="password"){
        error("cpassworderror","password dosen't Macth");
    }
}

    