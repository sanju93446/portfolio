
const body = document.querySelector('body');

const dark = document.getElementById('dark');
const light = document.getElementById('light');

const a1 = document.querySelector('.a1');
const a2 = document.querySelector('.a2');
const a3 = document.querySelector('.a3');
const a4 = document.querySelector('.a4');

const blackmenu = document.querySelector('#blackmenu');
const whitemenu = document.querySelector('#Whitemenu');

const sidebar = document.querySelector('.sidebar');

// skills
const skillWhite = document.querySelector('#skill-w');
const skillBlack = document.querySelector('skill-b');

const educationWhite = document.querySelector('#education-w');
const educationBlack = document.querySelector('#education-b');

const projectWhite = document.querySelector('#project-w');
const projectblack = document.querySelector('#project-B');


window.onload = ()=>{
    sidebar.style = "display:none"
}
light.style = "display:none";
dark.addEventListener("click",()=>{
    light.style = "display:block"
    body.style = "background-color:black;color:white";
    dark.style = "display:none";
    a1.style = "color:white";
    a2.style = "color:white";
    a3.style = "color:white";
    a4.style = "color:white";
})
light.addEventListener("click",()=>{
    dark.style = "display:block";
    body.style="background-color:white;color:black";
    light.style="display:none"
    a1.style = "color:black";
    a2.style = "color:black";
    a3.style = "color:black";
    a4.style = "color:black";
       
})
// sidebar menu
function showsidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style = "display:flex";
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style = "display:none";

}