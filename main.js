const divFather=document.querySelector('#divs-father')
for (let index = 0; index<256; index++) {
    const div=document.createElement('div')
    div.classList.add('divSon')
    divFather.appendChild(div)
    
}


const divSons=document.querySelectorAll('.divSon')

divSons.forEach(function(button){
  button.addEventListener('mouseover', aaa= function(){
    button.classList.add('active')
  })
  button.removeEventListener('mousedown', aaa)
})

