/////////////// Funcion mostrar o ocultar inner para la ruta buscar todos

function Mostrarinner() {
  document.getElementById("tablei").style.display = "block";
}

function Ocultarinner() {
  document.getElementById("tablei").style.display = "none";
}

/////////////// Funcion mostrar o ocultar left para la ruta buscar todos

function Mostrarorder() {
  document.getElementById("table2").style.display = "block";
}

function Ocultarorder() {
  document.getElementById("table2").style.display = "none";
}

/////////////// Funcion mostrar o ocultar  para la ruta buscar todos

function Mostrarleft() {
  document.getElementById("table3").style.display = "block";
}

function Ocultarleft() {
  document.getElementById("table3").style.display = "none";
}

/////////////// Funcion mostrar o ocultar inner para la ruta buscar todos

function Mostrarcount() {
  document.getElementById("table4").style.display = "block";
}

function Ocultarcount() {
  document.getElementById("table4").style.display = "none";
}

/////////////// Funcion mostrar o ocultar inner para la ruta buscar todos

function Mostrarmax() {
  document.getElementById("table5").style.display = "block";
}

function Ocultarmax() {
  document.getElementById("table5").style.display = "none";
}

/////////////// Funcion mostrar o ocultar inner para la ruta buscar todos

function Mostrarmin() {
  document.getElementById("table6").style.display = "block";
}

function Ocultarmin() {
  document.getElementById("table6").style.display = "none";
}

/////////////// Funcion mostrar o ocultar inner para la ruta buscar todos

function Mostrarsum() {
  document.getElementById("table7").style.display = "block";
}

function Ocultarsum() {
  document.getElementById("table7").style.display = "none";
}

/////////////// Funcion mostrar o ocultar inner para la ruta buscar todos

function Mostraravg() {
  document.getElementById("table8").style.display = "block";
}

function Ocultaravg() {
  document.getElementById("table8").style.display = "none";
}

/////////////// Funcion inner para la ruta buscar todos
document.querySelector("#inner").addEventListener("click", consultainner);

function consultainner() {
  axios
    .get("http://127.0.0.1:5000/consultainner")
    .then(function (response) {
      // alert(response.data[0].Nombre);
      console.log(response);
      let datos = response.data;
      let table = document.querySelector("#tablei");
      table.innerHTML = "";
      if (table.style.display == "none") {
        Mostrarinner();

        table.innerHTML += `
          
        <tr>
        <th scope="col">TITULO</th>
        <th scope="col">AUTOR</th>
        <th scope="col">GENERO</th>
        <th scope="col">NOMBRE</th>
    </tr>`;

        for (let item of datos) {
          table.innerHTML += `
          
          <tr>
                              <td>${item.Titulo}</td>
                              <td>${item.Autor}</td>
                              <td>${item.Genero}</td>
                              <td>${item.Nombre}</td>
                          </tr>`;
        }
      } else {
        Ocultarinner();
      }

      // console.log(response.data[0]);
      //  document.getElementById("res").innerHTML = response.data[0].Nombre;
    })
    .catch(function (error) {
      console.log(error);
    });
}

/////////////// Funcion avg para la ruta buscar todos
document.querySelector("#avg").addEventListener("click", consultaavg);

function consultaavg() {
  axios
    .get("http://127.0.0.1:5000//consultaAVG")
    .then(function (response) {
      // alert(response.data[0].Nombre);
      console.log(response);
      let datos = response.data;
      let table = document.querySelector("#table8");
      table.innerHTML = "";
      if (table.style.display == "none") {
        Mostraravg();

        table.innerHTML += `
          
        <tr>
        <th th-center scope="col">AVG_Edad</th>
    </tr>`;

        for (let item of datos) {
          table.innerHTML += `
          
          <tr >
                              <td td-center>${item.AVG_Edad}</td>
                          </tr>`;
        }
      } else {
        Ocultaravg();
      }

      // console.log(response.data[0]);
      //  document.getElementById("res").innerHTML = response.data[0].Nombre;
    })
    .catch(function (error) {
      console.log(error);
    });
}

/////////////// Funcion inner para la ruta buscar todos

document.querySelector("#order").addEventListener("click", consultaorder);

function consultaorder() {
  axios
    .get("http://127.0.0.1:5000/consultaorderby")
    .then(function (response) {
      // alert(response.data[0].Nombre);
      console.log(response);
      let datos = response.data;
      let table = document.querySelector("#table2");
      table.innerHTML = "";
      if (table.style.display == "none") {
        Mostrarorder();

        table.innerHTML += `
          
        <tr>
        <th scope="col">TITULO</th>
                            <th scope="col">AUTOR</th>
                            <th scope="col">FECHA ALQUILER</th>
                            <th scope="col">DEVUELTO</th>
    </tr>`;

        for (let item of datos) {
          table.innerHTML += `
          
          <tr >
          <td>${item.Titulo}</td>
          <td>${item.Autor}</td>
          <td>${item.FechaAlquiler}</td>
          <td>${item.Devuelto}</td>
                          </tr>`;
        }
      } else {
        Ocultarorder();
      }
      // console.log(response.data[0]);
      //  document.getElementById("res").innerHTML = response.data[0].Nombre;
    })
    .catch(function (error) {
      console.log(error);
    });
}

/////////////// Funcion left para la ruta buscar todos

document.querySelector("#left").addEventListener("click", consultaleft);

function consultaleft() {
  axios
    .get("http://127.0.0.1:5000/consultaleft")
    .then(function (response) {
      // alert(response.data[0].Nombre);
      console.log(response);
      let datos = response.data;
      let table = document.querySelector("#table3");
      table.innerHTML = "";
      if (table.style.display == "none") {
        Mostrarleft();

        table.innerHTML += `
          
        <tr>
        <th scope="col">IDLIBRO</th>
        <th scope="col">IDEDITORIAL</th>
        <th scope="col">TITULO</th>
        <th scope="col">AUTOR</th>
        <th scope="col">GENERO</th>
        <th scope="col">FECHAENTRADA</th>
        <th scope="col">ESTADO</th>
        <th scope="col">IDEDITORIAL</th>
        <th scope="col">NOMBRE</th>
        <th scope="col">FECHAEDITORIAL</th>
    </tr>`;

        for (let item of datos) {
          table.innerHTML += `
          
          <tr >
          <td>${item.Titulo}</td>
          <td>${item.idLibro}</td>
          <td>${item.idEditorial}</td>
          <td>${item.Autor}</td>
          <td>${item.Genero}</td>
          <td>${item.FechaEntrada}</td>
          <td>${item.Estado}</td>
          <td>${item.IDEDITORIAL}</td>
          <td>${item.Nombre}</td>
          <td>${item.FechaEditorial}</td>
                          </tr>`;
        }
      } else {
        Ocultarleft();
      }

      // console.log(response.data[0]);
      //  document.getElementById("res").innerHTML = response.data[0].Nombre;
    })
    .catch(function (error) {
      console.log(error);
    });
}

/////////////// Funcion left para la ruta buscar todos

document.querySelector("#count").addEventListener("click", consultacount);

function consultacount() {
  axios
    .get(" http://127.0.0.1:5000//consultaCOUNT")
    .then(function (response) {
      // alert(response.data[0].Nombre);
      console.log(response);
      let datos = response.data;
      let table = document.querySelector("#table4");
      table.innerHTML = "";
      if (table.style.display == "none") {
        Mostrarcount();

        table.innerHTML += `
          
        <tr>
        <th scope="col">COUNT_Libro</th>
    </tr>`;

        for (let item of datos) {
          table.innerHTML += `
          
          <tr >
          <td>${item.COUNT_Libro}</td>
                          </tr>`;
        }
      } else {
        Ocultarcount();
      }
      // console.log(response.data[0]);
      //  document.getElementById("res").innerHTML = response.data[0].Nombre;
    })
    .catch(function (error) {
      console.log(error);
    });
}

/////////////// Funcion left para la ruta buscar todos

document.querySelector("#max").addEventListener("click", consultamax);

function consultamax() {
  axios
    .get("http://127.0.0.1:5000///consultaMAX")
    .then(function (response) {
      // alert(response.data[0].Nombre);
      console.log(response);
      let datos = response.data;
      let table = document.querySelector("#table5");
      table.innerHTML = "";
      if (table.style.display == "none") {
        Mostrarmax();

        table.innerHTML += `
          
        <tr>
        <th scope="col">MAX_Edad</th>
    </tr>`;

        for (let item of datos) {
          table.innerHTML += `
          
          <tr >
          <td>${item.MAX_Edad}</td>
                          </tr>`;
        }
      } else {
        Ocultarmax();
      }

      // console.log(response.data[0]);
      //  document.getElementById("res").innerHTML = response.data[0].Nombre;
    })
    .catch(function (error) {
      console.log(error);
    });
}

/////////////// Funcion left para la ruta buscar todos

document.querySelector("#min").addEventListener("click", consultamin);

function consultamin() {
  axios
    .get("http://127.0.0.1:5000/consultaMIN")
    .then(function (response) {
      // alert(response.data[0].Nombre);
      console.log(response);
      let datos = response.data;
      let table = document.querySelector("#table6");
      table.innerHTML = "";
      if (table.style.display == "none") {
        Mostrarmin();

        table.innerHTML += `
          
        <tr>
        <th scope="col">MIN_Edad</th>
    </tr>`;

        for (let item of datos) {
          table.innerHTML += `
          
          <tr >
          <td>${item.MIN_Edad}</td>
                          </tr>`;
        }
      } else {
        Ocultarmin();
      }

      // console.log(response.data[0]);
      //  document.getElementById("res").innerHTML = response.data[0].Nombre;
    })
    .catch(function (error) {
      console.log(error);
    });
}

/////////////// Funcion left para la ruta buscar todos

document.querySelector("#sum").addEventListener("click", consultasum);

function consultasum() {
  axios
    .get("http://127.0.0.1:5000//consultaSUM")
    .then(function (response) {
      // alert(response.data[0].Nombre);
      console.log(response);
      let datos = response.data;
      let table = document.querySelector("#table7");
      table.innerHTML = "";
      if (table.style.display == "none") {
        Mostrarsum();

        table.innerHTML += `
          
        <tr>
        <th scope="col">SUM_EDAD</th>
    </tr>`;

        for (let item of datos) {
          table.innerHTML += `
          
          <tr >
          <td>${item.SUM_EDAD}</td>
                          </tr>`;
        }
      } else {
        Ocultarsum();
      }

      // console.log(response.data[0]);
      //  document.getElementById("res").innerHTML = response.data[0].Nombre;
    })
    .catch(function (error) {
      console.log(error);
    });
}
