const form = document.getElementById("practiceForm");

form.addEventListener("submit", function(e) {
    
    e.preventDefault();

    let isValid = true;
    const nameRegex = /^[A-Za-z]+$/;

   
    const fName = this.elements["firstName"];
    const lName = this.elements["lastName"];
    const email = this.elements["userEmail"];

   
    const fNameErr = document.getElementById("fNameError");
    const lNameErr = document.getElementById("lNameError");
    const emailErr = document.getElementById("emailError");

   
    if (fName.value === "") {
        fNameErr.textContent = "First name is required";
        isValid = false;
    } else if (!nameRegex.test(fName.value)) {
        fNameErr.textContent = "Only letters are allowed";
        isValid = false;
    } else {
        fNameErr.textContent = "";
    }


    if (lName.value=== "") {
        lNameErr.textContent = "Last name is required";
        isValid = false;
    } else if (!nameRegex.test(lName.value)) {
        lNameErr.textContent = "Only letters are allowed";
        isValid = false;
    } else {
        lNameErr.textContent = "";
    }

    if (email.value=== "") {
        emailErr.textContent = "Email is required";
        isValid = false;
    } else {
        emailErr.textContent = "";
    }

  
    if (isValid) {
        alert("Form submitted successfully!");
        this.reset(); 
    }
});