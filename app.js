

const form = document.getElementById("form");
const Name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const submit = document.getElementById("submit");
const register = document.getElementById("register");



form.addEventListener("submit",function  formFunction(e)  {
  
  const nameValue = Name.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const passwordValue = password.value.trim();

  if (nameValue == "") {
    e.preventDefault();
    alert("Please provide the name");
    Name.focus();
   
    return false
  }

  if (!isNaN(nameValue)) {
    e.preventDefault();
    alert("Please provide the valid name");
    Name.focus();
    return false
  }
  if (emailValue == "") {
    alert("Please provide the email");
    email.focus();
    e.preventDefault();
    return false
  }

  if (phoneValue == "") {
    alert("Please provide the Phonenumber");
    phoneValue.focus();
    e.preventDefault();
    return false
  }

  if (phoneValue.length > 10 || phoneValue.length < 10) {
    alert("Please provide the Valid Phonenumber");
    phoneValue.focus();
    e.preventDefault();
    return false
  }
  
  if (passwordValue == "") {
    alert("Please provide the password");
    passwordValue.focus();
    e.preventDefault();
    return false
  }

  if (passwordValue.length < 5) {
    alert("Please provide the valid&strong Password");
    passwordValue.focus();
    e.preventDefault();
    return false
  }
  if(nameValue && emailValue&&phoneValue&&passwordValue.length > 5){
    e.preventDefault();
    alert("Form submitted successfully!")

    window.open("./places/index.html",`_blank`)
  }
  console.log("submitted");

});


register.addEventListener("click" ,(e)=>{
  e.preventDefault();
  alert("Registered successfully!")

  window.open("../places/index.html",`_blank`)
});
