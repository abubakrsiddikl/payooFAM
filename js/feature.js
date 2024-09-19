// show the cash out form by click cash out buttton
document
  .getElementById("btn-show-cash-out")
  .addEventListener("click", function () {
    console.log("cash out btn clickeed");
    // hidden class remove
    document.getElementById("cash-out-form").classList.remove("hidden");
    // hide add money form
    document.getElementById("add-money-form").classList.add("hidden");
  });

// Show the add money form by click add money button
document
  .getElementById("btn-show-add-money")
  .addEventListener("click", function () {
    document.getElementById('add-money-form').classList.remove('hidden');
    // hidden cash out remove
    document.getElementById('cash-out-form').classList.add('hidden');

  });
