function getPassword() {
  var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*";
  var passwordLength1 = 16;
  var password = "";

  for (var i=0; i<passwordLength1; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length)
    password += chars.substring(randomNumber, randomNumber+1)
  }
  document.getElementById("password").value = password

}

function getPassword2() {
  var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*!";
  var passwordLength2 = 12;
  var password = "";

  for (var i=0; i<passwordLength2; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length)
    password += chars.substring(randomNumber, randomNumber+1)
  }
  document.getElementById("password2").value = password
}