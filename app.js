

alert("welcome to our website");

var UserName = prompt("Enter Your Name pls ")



var gender = prompt("Enter Your gender (male/female)")



 
 for (let i= 0 ;  ; ) {
    var age = prompt("Enter Your Age");

    if(age > 0)
        break;
        else alert("pls enter your right age")
        
    
 }
    
 
    
  
 function validGender (){
    if (gender =="male")
  alert  ("Hello Mr "+UserName)
  else if(gender == "female")
  alert  ("Hello Mrs "+UserName)
 
   else alert("Hello "+UserName)
 
}

 
 var confirmMsg = confirm("do you want a welcoming msg!\nif you press OK the welcoming msg will show \n otherwise it won't show.")
 if (confirmMsg==true){
 validGender();
 }
 else alert("fine")

 
 
  
 
 
 