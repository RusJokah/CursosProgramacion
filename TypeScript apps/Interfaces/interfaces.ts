interface Usuario{
    nombreUsuario:string;
    password:string;
    confirmarPassword?:string;
}

let usuario1:Usuario = {nombreUsuario: "RusJokah", password: "1234", confirmarPassword: "1234"}

console.log(usuario1);
console.log(usuario1.nombreUsuario);

interface Abordar{
    abordarTransporte():void;
}

let avion:Abordar = {
    abordarTransporte: function (){
        console.log("abordando");
    }
}

avion.abordarTransporte();