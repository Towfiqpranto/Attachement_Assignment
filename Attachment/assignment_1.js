const input=document.getElementById('input')

const button=document.getElementById('button')

const current=document.getElementById('output').innerHTML

button.addEventListener("click",function(){

    document.getElementById('output').innerHTML=current+' '+input.value

})