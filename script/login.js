document.getElementById("login-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById("account-number").value;
    const pin = document.getElementById("pin").value;
    if(accountNumber.length === 11){
        if(pin.length === 4 && !isNaN(pin)){
            window.location.href = "./main.html"
        }
        else{
            alert('invalid pin')
        }
    }
    else{
        alert('invalid account number')
    }
});