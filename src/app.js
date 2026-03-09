let iconElement = document.querySelector('#mIcon')
let navElement =document.querySelector('nav')

iconElement.addEventListener('click',()=>{
    navElement.classList.toggle('left-[0px]')
})