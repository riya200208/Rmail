document.addEventListener("DOMContentLoaded",function(event){
    // $(document).ready(function(){
    // $window.scrollTop(0);
    window.onbeforeunload = function(){
        window.scrollTo(0,0);
    };
 
    document.querySelector("#submit").addEventListener("click",function(event){
            var x = document.getElementById("name").value;
            var y = document.getElementById("email").value;
            var z = document.getElementById("number").value;
            let reg1 = /^[A-z][a-z]*[ ][A-z]{1}[a-z]*$/g;
            let reg3 = /^[6-9][0-9]{9}$/g;
            let reg2 = /^[a-z0-9.]{5,}@g(oogle)?mail[.]com$|^[6-9]\d{9}$/g;
        
            if(reg1.test(x)){
                if(reg2.test(y)){
                    if(reg3.test(z)){
                            document.getElementById("name").value ="";
                            document.getElementById("email").value ="";
                            document.getElementById("number").value="";
                            document.getElementById("sub-grp").innerHTML ="<h2><center>submitted!</center><h2>";
                        
                    }
                    else{
                        alert("please enter a valid mobile number");
                    }
                }
                else{
                    alert("please enter a vlaid gmail with more than 4 characters");
                }
            }
           
           else{
               alert("please enter first letter of name and title as upper case and others in lower case also include one space between name and title");
           }

    });
});