let dayNight=document.querySelector(".dayNight");
let banner = document.querySelector(".banner");
dayNight.addEventListener("click",()=>{
    banner.classList.toggle("night");

})
let typingeffect=new Typed("#text",{
    strings:["Raj","Programer","student","Designer","Coder"],
    loop:true,
    typeSpeed:100,
    backSpeed:50,
    backDelay:1000
});