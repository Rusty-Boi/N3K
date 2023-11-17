
function confirmData() {
    let form = document.getElementById("reg")
    let name=document.getElementById("Name")
    let email=document.getElementById("Email")
    let password=document.getElementById("password")
    let confirmpass=document.getElementById("confirmpass")
    let male=document.getElementById("male");
    let female=document.getElementById("female");
    let agreement=document.getElementById("agreement")

    if(email.value.length <= 0){
        alert("Please enter your email")
        return
    }
    if(!checkEmail(email.value)) {
        alert("Password must ends with .com")
        return
    }
    if(password.value.length <= 0){
        alert("Press enter your password")
        return
    }
    if(confirmpass.value!=password.value) {
        alert("cofirm password must be the same as password")
        return
    }
    if(!male.checked&&!female.checked) {
        alert("Gender must be selected")
        return
    }
    if(!agreement.checked) {
        alert("Agreement must be checked")
        return
    }
    if(name.value.length < 4 || name.Value.length>20) {
        alert("Name length minimum 4 characters and maximum 20 characters")
        return
    }
}

function checkEmail(email){
    return email.endsWith('.com')
}

