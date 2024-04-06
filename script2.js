function validateForm() {
    const form = document.getElementById("contactForm"); 
    const submitButton = document.getElementById("submitButton");

    submitButton.addEventListener("click", function validate(event) {
    
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;
        const phone = document.getElementById("phone").value;
    
    
        if (!name || !email || !subject ||!message ||!phone) {
            alert("All fields are required!");
            return false;
        } else if (!email.endsWith(".com") && !email.endsWith(".ca")) {
            alert("Email is invalid");
            return false;
        }

        var phonePattern = /^[789]\d{9}$/; 
        if (!phonePattern.test(phone)) {
            alert("Please enter a valid 10-digit phone number!");
            return false;
        }
        

        
        return true;
    }); 
}


validateForm();
