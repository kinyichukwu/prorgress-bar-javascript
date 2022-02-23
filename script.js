var progress = document.getElementById('progress')
var next = document.getElementById('next')
var prev = document.getElementById('prev')
var circle = document.querySelectorAll('.circle')

let currentProgress = 1

next.addEventListener('click', ()=>{
    currentProgress++
    console.log(currentProgress)
    update()
})

prev.addEventListener('click', ()=>{
    currentProgress--
    if(currentProgress < 1){
        currentProgress = 1
    }
    update()
})




function update() {
    circle.forEach( (circle1, idx) => {
         progress.style.width = (((currentProgress / 3) - 0.35 ) * 100) + '%'
        if( idx < currentProgress) {
            circle1.classList.add('active')
        }else{
            circle1.classList.remove('active')
        }
    })

    if(currentProgress == 1){
        progress.style.width = 0 + '%'
        prev.disabled = true
    }else if ( currentProgress == 4){ 
        next.disabled = true
    }else{ prev.disabled = false 
        next.disabled = false
    }
}