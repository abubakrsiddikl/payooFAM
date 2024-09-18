// console.log("hellow world")

// Form handel
// step- 1: Handel login button
document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    // step-2: pevent defalut behavior 
    event.preventDefault();

    // step-3: get phone number and pin 
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    // step-4:bad way use Check validation
    if (phoneNumber === '5' && pinNumber === '1234') {
        console.log("log in successfull");
        window.location.href = './home.html';
    }
    else{
        alert('wrong phone number or pin.')
    }

  });
