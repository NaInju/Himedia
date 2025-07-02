const headerGnb = document.querySelector('#gnb')
const header = document.querySelector('header')

headerGnb.addEventListener('mouseenter', function(){
    header.classList.add('scroll')
})

headerGnb.addEventListener('mouseleave', function(){
    header.classList.remove('scroll')
})