window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}

myBody = document.getElementsByTagName("body");

let btnText1 = document.querySelector('#btn1');
let btnText2 = document.querySelector('#btn2');
let btnText3 = document.querySelector('#btn3');
let btnText4 = document.querySelector('#btn4');
let btnText5 = document.querySelector('#btn5');
let btnText6 = document.querySelector('#btn6');

btnText1.addEventListener('click', ()=>{
    myBody[0].innerHTML = ""
})