const form = document.getElementById("regexForm");

form.addEventListener("submit", function(e) {
    e.preventDefault(); 

    let isValid = true;

    const emailInput = this.elements["userEmail"];
    const mobileInput = this.elements["userMobile"];

   
    const emailErr = document.getElementById("emailError");
    const mobileErr = document.getElementById("mobileError");

   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    const mobileRegex = /^\d{10}$/;


    if (emailInput.value.trim() === "") {
        emailErr.textContent = "Email is required";
        isValid = false;
    } else if (!emailRegex.test(emailInput.value)) {
        emailErr.textContent = "Invalid email format (e.g., name@mail.com)";
        isValid = false;
    } else {
        emailErr.textContent = "";
    }

   
    if (mobileInput.value.trim() === "") {
        mobileErr.textContent = "Mobile number is required";
        isValid = false;
    } else if (!mobileRegex.test(mobileInput.value)) {
        mobileErr.textContent = "Mobile must be exactly 10 digits (numbers only)";
        isValid = false;
    } else {
        mobileErr.textContent = "";
    }


    if (isValid) {
        alert("Success! All Regex patterns passed.");
        this.reset();
    }
});