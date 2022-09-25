var user=document.getElementById("exampleInputusername1");
var username=document.getElementById("username");
var email=document.getElementById("exampleInputEmail1");
var phone=document.getElementById("exampleInputPhone1");
var password=document.getElementById("exampleInputPassword1")
var emailerror=document.getElementById("emailerror");
var phoneerror=document.getElementById("phoneerror");
var passworderror=document.getElementById("passworderror");
let regex = /^([A-Za-z0-9\-.]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;
    let phn=/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
    let repassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    var mediumpassword = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;

function validate(){
    
    if(user.value==""){
        username.innerHTML="field cannot be empty"
        username.style.color="red"
        user.style.border="2px solid red"
        return false;
    }
   else{
    username.innerHTML=""
    username.style.color="green"
    user.style.border="2px solid green"
   }
    if(regex.test(email.value)){
        emailerror.innerHTML="*******valid";
        emailerror.style.color="green"
        email.style.border="2px solid green"
        
    }
    else{
        emailerror.innerHTML="*******invalid"
        emailerror.style.color="red"
        email.style.border="2px solid red"
        return false;
    }
    if(phn.test(phone.value)){
        phoneerror.innerHTML="*******valid";
        phoneerror.style.color="green"
        phone.style.border="2px solid green"
        
    }
    else{
        phoneerror.innerHTML="*It is not correct format*(xxx-xxx-xxxx)"
        phoneerror.style.color="red"
        phone.style.border="2px solid red"
        return false;
    }
    if(repassword.test(password.value)){
        passworderror.innerHTML="*******valid";
        passworderror.style.color="green"
        password.style.border="2px solid green"
        
    }else if(mediumpassword.test(password.value)){
        passworderror.innerHTML="*********valid";
        passworderror.style.color="orange"
        password.style.border="2px solid orange"
    }
    else{
        passworderror.innerHTML="*Make sure it contain at least 8 characters including numbers,uppercase and lowercase"
        passworderror.style.color="red"
        password.style.border="2px solid red"
        return false;
    }
}
function check(){

    if(regex.test(email.value)){
        emailerror.innerHTML="*******valid";
        emailerror.style.color="green"
        email.style.border="2px solid green"
        
    }
    else{
        emailerror.innerHTML="*******invalid"
        emailerror.style.color="red"
        email.style.border="2px solid red"
        return false;
    }
    if(repassword.test(password.value)){
        passworderror.innerHTML="*******valid";
        passworderror.style.color="green"
        password.style.border="2px solid green"
        
    }else if(mediumpassword.test(password.value)){
        passworderror.innerHTML="*********valid";
        passworderror.style.color="orange"
        password.style.border="2px solid orange"
    }
    else{
        passworderror.innerHTML="*Make sure it contain at least 8 characters including numbers,uppercase and lowercase"
        passworderror.style.color="red"
        password.style.border="2px solid red"
        return false;
    }
}
