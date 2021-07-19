document.addEventListener("DOMContentLoaded",function(event){
  console.log("hey");
    document.querySelector("#submit").addEventListener("click",function(event){
        var x = document.getElementById("password");
        let regex = /^(\w|\D)(\w|\D){7,}$/;
        console.log(x.value);
        console.log(regex.test(x.value));
        if(regex.test(x.value)){
        window.open("../mail/mail.html");
        }
        else{
            alert("please enter a valid passsword.");
        }
    
    });

});