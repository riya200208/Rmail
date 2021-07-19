document.addEventListener("DOMContentLoaded",function(event){
    
    document.querySelector("#submit").addEventListener("click",function(event){
       var a = document.getElementById("username").value;
      
       let regex1 = /^[a-z0-9.]{5,}@g(oogle)?mail[.]com$|^[6-9]\d{9}$/g;
       if(regex1.test(a)){
        var mywindow =  window.open("../contact/contact.html");
        
           //  confirm("you have entered a valid email id or mobile number");
       }
       else{
           alert("Please enter a vlid email or phone");
          
       }
    });
  
});