var fnameInput = document.getElementById('input-fname')
var lnameInput = document.getElementById('input-lname')
var emailInput = document.getElementById('input-email')
var passInput = document.getElementById('input-pass')
var submit = document.getElementById('btn')


submit.onclick = function (e) {
    e.preventDefault()
    if(fnameInput.value == '' || lnameInput.value == '' || emailInput.value == '' || passInput.value == ''){
        alert('you should enter all information')
    }else{
        localStorage.setItem('firstName' , fnameInput.value)
        localStorage.setItem('Email' , emailInput.value)
        localStorage.setItem('Pass' , passInput.value)

        setTimeout(() => {
           window.location = 'login.html'
        },1500)
    }
}

