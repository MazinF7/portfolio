let allbody=document.getElementById('allbody');
let lite=document.getElementById('lite');
let dark=document.getElementById('dark');
let menubar=document.getElementById('menubar');
let menu=document.getElementById('menu');
let close=document.getElementById('close');
let ulbody=document.getElementById('ulbody');
lite.onclick=function (){
    allbody.style.filter='invert(0)'
}
dark.onclick=function (){
    allbody.style.filter='invert(1)'
}
menubar.onclick=function(){
    menu.style.animationName='transetion'
    menu.style.left='0px'
    ulbody.style.position='static'
}
close.onclick=function(){
    menu.style.animationName='close'
    menu.style.left='-300px'
    setTimeout(() => {
        ulbody.style.position='relative'    
    }, 1000);
}
