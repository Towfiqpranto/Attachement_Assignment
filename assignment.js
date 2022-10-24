let input=document.getElementById('input')
let button=document.getElementById('button')
let current=document.getElementById('output').innerHTML
button.addEventListener("click",myfunc)
function myfunc(){
    document.getElementById('output').innerHTML=current+' '+input.value
}