var nome_carro = "Novo-Supra";
var n_portas = 2;
var car_carro = "branco";
var Supra_carro = 2022;
var sistema_eletrrico = true;
var velocidade = 0;
var ligado = false;
var parado = false;

const marca = "Toyota";

function acelerar(){
    if(velocidade < 120){
        velocidade +=1;
    }
}
function freiar(){
    if(velocidade > 0){
        velocidade -=1;
    }
}
function parar(){
    if(velocidad == 0){
        parado = true;
    }else{
        parado = false;
    }
}
function ligar(){
    ligado = true
    if(ligado == false){
        ligar = true;
    }
}
function desligar(){
    if(ligado == true){
        ligado = false;
    }
}