const form = document.getElementById("user-info");
const display = document.getElementById("display-area");

form.addEventListener("submit", (event) => {
    
    event.preventDefault();

  
    const fName = document.getElementById("fName").value;
    const lName = document.getElementById("lName").value;
    const email = document.getElementById("email").value;

  
    document.getElementById("res-name").textContent = `Name: ${fName} ${lName}`;
    document.getElementById("res-email").textContent = `Email: ${email}`;

    display.style.display = "block";

    
    form.reset();
});