const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let isValid = true;
    const inputs = this.elements;

   
    const validateField = (id, condition, message) => {
        const errElement = document.getElementById(id);
        if (condition) {
            errElement.textContent = message;
            errElement.style.display = "block";
            isValid = false;
        } else {
            errElement.style.display = "none";
        }
    };

   
    const nameRegex = /^[A-Za-z]+$/;
    validateField("fNameErr", !nameRegex.test(inputs["firstName"].value), "Letters only.");
    validateField("lNameErr", !nameRegex.test(inputs["lastName"].value), "Letters only.");

  
    validateField("dobErr", inputs["dob"].value === "", "Please enter a valid date.");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    validateField("emailErr", !emailRegex.test(inputs["userEmail"].value), "Invalid email format.");
    if (isValid && inputs["userEmail"].value !== inputs["confirmEmail"].value) {
        validateField("emailErr", true, "Emails do not match.");
    }

      const passRegex = /^[A-Z](?=(?:.*\d){2,})(?=.*[\W_]).{7,31}$/;
    validateField("passErr", !passRegex.test(inputs["password"].value), 
        "Must start with a capital, include 2 numbers, 1 special char, and be 8-32 characters.");


    validateField("confirmPassErr", inputs["password"].value !== inputs["confirmPass"].value, "Passwords do not match.");

    
    if (isValid) {
        alert("Registration Successful!");
        this.reset();
        document.querySelectorAll('.error-text').forEach(el => el.style.display = 'none');
    }
});