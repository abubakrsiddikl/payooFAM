// Cash out button event handeler
document
  .getElementById("button-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("cash out button clicked");
    // get cash out amount and pin
    const cashOut = document.getElementById("input-cash-out").value;
    const cashOutNumber = parseFloat(cashOut);
    const pinNumber = document.getElementById("input-cash-out-pin").value;
    console.log(cashOut, pinNumber);
    // wrong way veryfiy pin number
    if (pinNumber === "1234") {
      const currentBalance = document.getElementById('account-balance').innerText;
      const currentBalanceNumber = parseFloat(currentBalance);
      

    //   balance reduce 
      const newBalance = currentBalance - cashOut;
    //   show the UI / DOM update
     document.getElementById('account-balance').innerText = newBalance;
    }
     else {
      alert("Pin don't macth")
    }
  });
