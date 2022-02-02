// let receiveBtn = document.getElementById(elementId = 'receive')
// console.log(receive)

let text = document.getElementsByTagName('h2')[0],
    contactForm = document.getElementsByClassName('.contactform_name')[0],
    message = document.getElementsByName('message')[0],
    modal = document.querySelector('.modal'),
    closeBtn = document.querySelector('.close'),
    receiveBtn = document.getElementById('receive');


function hover() {
    text.textContent = 'tugadi'
}
text.addEventListener('mouseenter', hover)
text.addEventListener('mouseleave', function () {
    text.textContent = 'Все включено'
})

receiveBtn.addEventListener('click', listener = function () {
    modal.style.display = 'block'
})
closeBtn.addEventListener('click', listener = function () {
    modal.style.display = 'none'
})

contactForm.addEventListener('input', listener = function () {
    message.value = `My name is ${contactForm.value} i have got apple`;
})