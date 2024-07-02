document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var phone = document.getElementById("phone").value;

    console.log("name:", name);
    console.log("email:", email);
    console.log("phone:", phone);
    console.log("message:", message);
  });
});
