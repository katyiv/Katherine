'use strict'
  function adduser(){  
    let korisnik={
    name:document.getElementById("first_name").value,
    lname:document.getElementById("last_name").value,
    text:document.getElementById("txtara").value,
    email:document.getElementById("emails").value
    }
 let x = document.forms["form"]["first_name"].value;
 let y= document.forms["form"]["emejl"].value;
  if (x == ""||y=="") {
    alert("Name and email must be filled out");
    return false;
  }
else{
let json_str=JSON.stringify(korisnik);
let json=JSON.parse(json_str);
alert("Thank you "+json.name+ "!  We are going to contact you as soon as possible on your email: "+json.email)
}
}
  select.options[1].selected=true;
let form = document.getElementById('form');

form.addEventListener('focus', (event) => {
  event.target.style.background = '#F3EAC4';

}, true);

form.addEventListener('blur', (event) => {
  event.target.style.background = '';    
}, true);


