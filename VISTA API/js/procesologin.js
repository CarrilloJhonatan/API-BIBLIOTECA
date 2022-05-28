///////////////////////////////////LOGIN/////////////////////////////////////

function login() {
  let CorreoElectronico, Contraseña;
  CorreoElectronico = document.getElementById("CorreoElectronico").value;
  Contraseña = document.getElementById("Contraseña").value;

  if (CorreoElectronico == "" || Contraseña == "") {
    alert("ERROR, VERIFIQUE LOS DATOS INGRESADOS");
  } else {
    let data = {
      CorreoElectronico: CorreoElectronico,
      Contraseña: Contraseña,
    };
    axios
      .post("http://127.0.0.1:5000/login", data)
      .then(function (response) {
        console.log(response);
        if (response == true) {
          window.open("../html/crud.html");
          window.close();
          document.getElementById("CorreoElectronico").reset();
          document.getElementById("Contraseña").reset();
        } else {
          alert("Datos incorrectos");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
