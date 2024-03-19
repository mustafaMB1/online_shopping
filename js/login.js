var emailInput = document.getElementById('input-email')
var passInput = document.getElementById('input-pass')
var submit = document.getElementById('btn')
var emailValue = localStorage.getItem('Email')
var passValue = localStorage.getItem('Pass')


submit.onclick = (e) => {
    e.preventDefault()
    if(emailInput.value === emailValue && passInput.value === passValue){
        setTimeout(() => {
            window.location = 'index.html'
         },1500)
    }else{
        alert('this information not true')
    }
}
