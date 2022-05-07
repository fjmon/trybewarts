function validateForm() {
    let password = document.forms["myForm"]["password"].value;
    let email = document.forms["myForm"]["email"].value;

    if (password == "123456" && email == "tryber@teste.com") {
      alert("Olá, Tryber!");
    }
    else {
        alert("Email ou senha inválidos.")
    }
  }