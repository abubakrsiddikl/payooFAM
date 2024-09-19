// Add money event handaler
document
  .getElementById("button-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    
    // Get money added to the account
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);
    // Get the pin number
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);
  });
