/////////////// Funcion mostrar o ocultar inner para la ruta buscar todos

function Mostrar() {
  document.getElementById("table").style.display = "block";
}

function Ocultar() {
  document.getElementById("table").style.display = "none";
}

/////////////// Funcion mostrar o ocultar left para la ruta buscar todos

function Mostrarid() {
  document.getElementById("tableid").style.display = "block";
}

function Ocultarid() {
  document.getElementById("tableid").style.display = "none";
}

/////////////// Funcion para la ruta buscar todos

document.querySelector("#Mostrar").addEventListener("click", consultacrud);

function consultacrud() {
  axios
    .get("http://127.0.0.1:5000/consultaalquileresjuntos")
    .then(function (response) {
      // alert(response.data[0].Nombre);
      console.log(response);
      let datos = response.data;
      let table = document.querySelector("#table");
      table.innerHTML = "";
      if (table.style.display == "none") {
        Mostrar();

        table.innerHTML += `
          
        <tr>
        <th scope="col">NOMBRE</th>
        <th scope="col">APELLIDOS</th>
        <th scope="col">TITULO</th>
        <th scope="col">FECHA ALQUILER</th>
        <th scope="col">DEVUELTO</th>
    </tr>`;

        for (let item of datos) {
          table.innerHTML += `
          
          <tr>
          <td>${item.Nombre}</td>
          <td>${item.Apellidos}</td>
          <td>${item.Titulo}</td>
          <td>${item.FechaAlquiler}</td>
          <td>${item.Devuelto}</td>
                          </tr>`;
        }
      } else {
        Ocultar();
      }

      // console.log(response.data[0]);
      //  document.getElementById("res").innerHTML = response.data[0].Nombre;
    })
    .catch(function (error) {
      console.log(error);
    });
}

///////////////////funcion para la ruta de buscar por id

document.querySelector("#MostrarId").addEventListener("click", consultaxcrud);

function consultaxcrud() {
  id = document.getElementById("Nombre").value;
  axios
    .get("http://127.0.0.1:5000/consultalquileres/" + id)
    .then(function (response) {
      console.log(response);
      let datos = response.data;
      let table = document.querySelector("#tableid");
      table.innerHTML = "";
      if (table.style.display == "none") {
        Mostrarid();

        table.innerHTML += `
          
        <tr>
        <th scope="col">NOMBRE</th>
        <th scope="col">APELLIDOS</th>
        <th scope="col">TITULO</th>
        <th scope="col">FECHA ALQUILER</th>
        <th scope="col">DEVUELTO</th>
    </tr>`;

        for (let item of datos) {
          table.innerHTML += `
          
          <tr>
          <td>${item.Nombre}</td>
          <td>${item.Apellidos}</td>
          <td>${item.Titulo}</td>
          <td>${item.FechaAlquiler}</td>
          <td>${item.Devuelto}</td>
                          </tr>`;
        }
      } else {
        Ocultarid();
      }
      //console.log(response.data[2].Titulo);
      // alert(response.data[2].Titulo);
    })
    .catch(function (error) {
      console.log(error);
    });
}

///////////////////funcion para la ruta para insertar
function addcrud() {
  idUsuario = document.getElementById("idUsuario").value;
  idLibro = document.getElementById("idLibro").value;
  const nuevocontacto = {
    idUsuario: idUsuario,
    idLibro: idLibro,
  };

  axios({
    method: "POST",
    url: "http://127.0.0.1:5000/addalquileres",
    data: nuevocontacto,
  })
    .then((res) => console.log(res), alert("Alquiler agregado."))
    .catch((err) => console.log("Error: ", err));
}

///////////////////funcion para actualizar
function actualizarcrud() {
  //crear variables de opciones para mostrar los radios
  var opcion1;
  var opcion2;

  idUsuario = document.getElementById("idUsuario").value;
  idLibro = document.getElementById("idLibro").value;
  Devuelto = document.getElementsByName("Devuelto").value;
  id = document.getElementById("idAlquile").value;

  //condicion para mostrar las opcion seleccionada de los radios
  if ((opcion1 = document.getElementById("Devuelto1").checked)) {
    Devuelto = false;
  }
  if ((opcion2 = document.getElementById("Devuelto2").checked)) {
    Devuelto = true;
  }
  const nuevocontacto = {
    idUsuario: idUsuario,
    idLibro: idLibro,
    Devuelto: Devuelto,
  };

  axios({
    method: "PUT",
    url: "http://127.0.0.1:5000//actualizaralquiler/" + id,
    data: nuevocontacto,
  })
    .then((res) => console.log(res), alert("Contacto actualizado."))
    .catch((err) => console.log("Error: ", err));
}

// ///////////////////funcion para actualizar
// function actualizarcrud() {
//   idUsuario = document.getElementById("idUsuario").value;
//   idLibro = document.getElementById("idLibro").value;
//   // Devuelto = document.getElementById("Devuelto").value;
//   id = document.getElementById("idAlquile").value;

//   const nuevocontacto = {
//     idUsuario: idUsuario,
//     idLibro: idLibro,
//     // Devuelto: Devuelto,
//   };

//   axios({
//     method: "PUT",
//     url: "http://127.0.0.1:5000//actualizaralquiler/" + id,
//     data: nuevocontacto,
//   })
//     .then((res) => console.log(res), alert("Contacto actualizado."))
//     .catch((err) => console.log("Error: ", err));
// }

/////////////////funcion para eliminar
function borrarcrud() {
  id = document.getElementById("idAlquiler").value;

  axios
    .delete("http://127.0.0.1:5000//deletealquiler/" + id)
    .then((res) => {
      console.log(res.data);

      alert("Registro Eliminado");
    })
    .catch((err) => console.log("Error: ", err));
}

//////////////////////////////////////////////////////////////////////////////////////////

function Login() {
  alert("Lo siento por el momento no puede iniciar seccion... :(");
}
