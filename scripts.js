const contactBox = document.querySelector(".contact-info");
const btnHeaderHover = document.querySelector(".contact-btn");

btnHeaderHover.addEventListener('mouseover' , ()=>{
  contactBox.style.display = "block"
})
contactBox.addEventListener('mouseleave' , ()=>{
  contactBox.style.display = "none"
})
btnHeaderHover.addEventListener('click' , ()=>{
  contactBox.style.display = "none"
})