document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let errorMsg = document.getElementById("error");
  
    if (name === "" || email === "") {
      errorMsg.textContent = "All fields are required.";
    } else if (!validateEmail(email)) {
      errorMsg.textContent = "Invalid email format.";
    } else {
      errorMsg.textContent = "";
      alert("Form submitted successfully!");
      this.reset();
    }
  });
  
  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  