document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = document.getElementById("amount").value;
    const convertedAmount = parseFloat(amount);
    const accountNumber = document.getElementById("account-number").value;
    const pin = document.getElementById("pin").value;
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    console.log(typeof convertedMainBalance);
    if (accountNumber.length === 11) {
      if (pin.length === 4 && !isNaN(pin)) {
        const sum = convertedMainBalance + convertedAmount;
        document.getElementById("main-balance").innerText = sum;
      } else {
        alert("invalid pin");
      }
    } else {
      alert("invalid account number");
    }
    document.getElementById("amount").value = "";
    document.getElementById("account-number").value = "";
    document.getElementById("pin").value = "";
  });
