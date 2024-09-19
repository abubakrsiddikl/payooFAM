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

    // Verify the pin number not the write way
    if (pinNumberInput === '1234') {
        console.log("Add money to your acconunt");
        // Get the current blalace 
        const currentBalance = document.getElementById('account-balance').innerText;
        console.log(currentBalance);
        // Addition currentBlance and addMoneyInput
        const addMoneyNumber = parseFloat(addMoneyInput);
        const currentBalanceNumber = parseFloat(currentBalance);
        const newBalance = addMoneyNumber + currentBalanceNumber;
        console.log(newBalance);

        // Update balane UI/DOM
        document.getElementById('account-balance').innerText = newBalance;
    }
    else {
      alert("Pin dont macth")
    }
  });
