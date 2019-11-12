    function mostrarvalor() {
            var done = 0;
            var username=document.login.username.value;
            username=username.toLowerCase();
            var password=document.login.password.value;
            password=password.toLowerCase();
    
                if(username =="nicolas" && password == "102003"){
                    alert("logado com sucesso");
                    console.log("logado com sucesso");
                    done=1;
                }
                else if (username=="angelo" && password =="123") {
                    alert("Logado com sucesso");
                    done=1;
                }
                if(done==0){
                alert("voce foi bloqueado pra sempre");
        } 
}
