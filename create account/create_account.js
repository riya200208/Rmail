document.addEventListener("DOMContentLoaded",function(event){

    document.querySelector("#show").addEventListener("click",function(event){

        var x = document.getElementById("togglePassword1");
        var y = document.getElementById("togglePassword2");
        if(x.type === 'password' && y.type === 'password'){
            x.type = 'text';
            y.type = 'text';
        }
        else{
            x.type = 'password';
            y.type = 'password';
        }
    });
    document.querySelector("#next").addEventListener("click",function(event){
        var x = document.getElementById("togglePassword1");
        var y = document.getElementById("togglePassword2");
        var fn = document.getElementById("first").value;
        var ln = document.getElementById("last").value;
        var user = document.getElementById("username").value;
        let reg1 = /^[A-Z][a-z]+$/g;
        let reg2 = /^[a-z0-9.]{5,}@g(oogle)?mail[.]com$|^[6-9]\d{9}$/g;
        let reg3 = /^(\w|\D)(\w|\D){7,}$/;
        let reg4 = /^[A-Z][a-z]+$/g;
       
        if(reg1.test(fn) && reg4.test(ln)){
            if(reg2.test(user)){
                if(reg3.test(x.value) && reg3.test(y.value)){
                    if(x.value === y.value){
                      
                        window.open("../mail/mail.html");
                    }
                    else{
                        alert("please enter same passwords in the both sections.");
                    }
                }
                else{
                    alert("please follow the instruction give below to make a strong password");
                }
            }
            else{
                alert("please enter a valid user name.");
            }
        }
        else{
            alert("please use only the first letter in upper case and other in lower case .");
        }
    });
});