
function validate(){
 var regex = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
    if(!regex.test(formName.email.value)){
      
     // alert("Congrats! This is a valid Email email");
    
      alert("This is not a valid email address");
      //return false;
    }
  
      
          var reg=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
          if(reg.test(formName.password.value)){
              
              alert("correct password");
             // document.getElementById("error_msg").innerHTML ="correct password" ;
              //return tru
          }
          else{
              alert("incorrect password");
             // return false;
          }
          
          
          var regexx=/^[a-zA-Z]/;
          if(regexx.test(formName.first_name.value)){
              
              alert("correct name" );
              //return true;
          }
          else{
              alert("incorrect name");
             // return false;
          }
           var regexx=/^[a-zA-Z]/;
          if(regexx.test(formName.last_name.value)){
              
              alert("correct name" );
              //return true;
          }
          else{
              alert("incorrect name");
             // return false;
          }
      }

        
  
          
