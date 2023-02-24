function validacaoEmail() {
    usuario = document.getElementById("inputEmail").value.substring(0, document.getElementById("inputEmail").value.indexOf("@"));
    dominio = document.getElementById("inputEmail").value.substring(document.getElementById("inputEmail").value.indexOf("@")+ 1, document.getElementById("inputEmail").value.length);
    
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
        }
    else{
    document.getElementById("inputEmail").style.borderColor="red";
    document.getElementById("erroIcon").style.visibility="visible";
    document.getElementById("mesageErro").style.visibility="visible";
    }
}