document.getElementById("formRegister").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;

    let passwordCheck = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordCheck.test(password)) {
        alert("Password has to contain minimum 8 symbols, one number and one big letter!");
        return;
    }


    if (password !== confirmPassword) {
        alert("The passwords don't match!");
        return;
    }

  
    if (age < 18 || age > 99) {
        alert("Age must be between 18 and 99 years old!");
        return;
    }

    
    localStorage.setItem("userData", JSON.stringify({
        firstName: document.getElementById("name").value,
        lastName: document.getElementById("last-name").value,
        email: email,
        age: age
    }));

    alert("Register succes!");
});

document.getElementById("photo").addEventListener("change", function() {
    let fileName = this.files[0] ? this.files[0].name : "No file chosen";
    document.getElementById("file-name").textContent = fileName;
});