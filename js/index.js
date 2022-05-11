let $ = document
let btnToggle = $.querySelector('.title')
let bgtitle = $.querySelector('.bgtitle')
let boxInput= $.querySelector('.boxInput')

btnToggle.addEventListener('click', function(event){
    let target = event.target.id

    if(target === 'b1'){
        bgtitle.classList.add('translateBg')
        boxInput.classList.add('translateInput')
    }else{
        bgtitle.classList.remove('translateBg')
        boxInput.classList.remove('translateInput')
    }   
})