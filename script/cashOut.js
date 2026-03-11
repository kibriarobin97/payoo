document.getElementById("add-money-section").style.display = "block";
document.getElementById("cash-out-section").style.display = "none";
document.getElementById("send-money-section").style.display = "none";

document.getElementById("add-money-btn").addEventListener("click", function () {
  document.getElementById("add-money-section").style.display = "block";
  document.getElementById("cash-out-section").style.display = "none";
  document.getElementById("send-money-section").style.display = "none";
});

document.getElementById("cash-out-btn").addEventListener("click", function () {
  document.getElementById("cash-out-section").style.display = "block";
  document.getElementById("add-money-section").style.display = "none";
  document.getElementById("send-money-section").style.display = "none";
});

document
  .getElementById("send-money-btn")
  .addEventListener("click", function () {
    document.getElementById("send-money-section").style.display = "block";
    document.getElementById("add-money-section").style.display = "none";
    document.getElementById("cash-out-section").style.display = "none";
  });
