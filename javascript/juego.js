'use strict';
/* PASO A SEGUIR
- Escribir el HTML un h1,h4, un select, un boton y dos p
- Darle clases a los apartados a necesitar
- Crear un evento click sobre el boton
- Recoger el valor del select
- Mensaje vamor a jugar, que vaya cambiando segun seleccione el boton 

*/


const container = document.querySelector ('.container');
const select = document.querySelector('.js-select');
const buttonGame = document.querySelector('.js-button');
const gamer = document.querySelector('.js-gamer');
const computer = document.querySelector('.js-computer');
const textChange = document.querySelector('.js-text');



function getRandomInt(max) {
    return Math.ceil(Math.random() * max);
};

const computerGame = () =>{
    const numberRandom = getRandomInt(9);
    //console.log (numberRandom);
    if(numberRandom <= 3 ){
        return `Piedra`;
     }else if(numberRandom >= 7){
        return `Papel`;
     }else{
        return `Tijera`;
     }
};

const gamePlayer = (selectValue)=> {
    const resultComputer = computerGame();
    console.log (resultComputer);
    if (selectValue === resultComputer){
        textChange.innerHTML = `Empate`;    
    } else if (
      (selectValue === `Piedra` && resultComputer `Papel`) || 
      (selectValue === `Papel` && resultComputer `Tijera`)||
      (selectValue === `Piedra` && resultComputer `Papel`)
    ){
        textChange.innerHTML = `Perdiste`
    } else if (
        (selectValue === `Tijera` && resultComputer `Papel`)||
        (selectValue === `Papel` && resultComputer `Piedra`)||
        (selectValue === `Piedra` && resultComputer `Tijera`)
    ){
        textChange.innerHTML = `Ganaste`
    }
};
    

const handleClickGame = (event) =>{
    event.preventDefault();
    const selectValue = select.value;
    gamePlayer(selectValue);
    console.log(selectValue)
};

buttonGame.addEventListener('click', handleClickGame);