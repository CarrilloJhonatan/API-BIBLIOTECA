-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-05-2022 a las 01:45:47
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `biblioteca`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alquileres`
--

CREATE TABLE `alquileres` (
  `idAlquiler` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `idLibro` int(11) NOT NULL,
  `FechaAlquiler` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `Devuelto` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `alquileres`
--

INSERT INTO `alquileres` (`idAlquiler`, `idUsuario`, `idLibro`, `FechaAlquiler`, `Devuelto`) VALUES
(1, 1, 1, '2022-05-27 17:17:46', 0),
(2, 2, 2, '2022-05-27 17:17:46', 0),
(3, 3, 3, '2022-05-27 17:17:46', 0),
(4, 4, 4, '2022-05-27 17:17:46', 0),
(5, 5, 5, '2022-05-27 17:17:46', 0),
(6, 2, 5, '2022-05-27 17:17:46', 0),
(7, 3, 1, '2022-05-27 17:17:46', 0),
(8, 1, 2, '2022-05-27 17:17:46', 0),
(9, 5, 3, '2022-05-27 17:17:46', 0),
(10, 4, 4, '2022-05-27 17:17:46', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `editorial`
--

CREATE TABLE `editorial` (
  `idEditorial` int(11) NOT NULL,
  `Nombre` varchar(30) NOT NULL,
  `FechaEditorial` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `Estado` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `editorial`
--

INSERT INTO `editorial` (`idEditorial`, `Nombre`, `FechaEditorial`, `Estado`) VALUES
(1, 'Babel Libros', '2022-05-27 17:17:46', 0),
(2, 'Carvajal Ediciones', '2022-05-27 17:17:46', 0),
(3, 'Editorial Gato Malo.', '2022-05-27 17:17:46', 0),
(4, 'Editorial Planeta', '2022-05-27 17:17:46', 0),
(5, 'Ediciones SM', '2022-05-27 17:17:46', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libros`
--

CREATE TABLE `libros` (
  `idLibro` int(11) NOT NULL,
  `idEditorial` int(11) NOT NULL,
  `Titulo` varchar(30) NOT NULL,
  `Autor` varchar(50) NOT NULL,
  `Genero` varchar(30) DEFAULT NULL,
  `FechaEntrada` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `Estado` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `libros`
--

INSERT INTO `libros` (`idLibro`, `idEditorial`, `Titulo`, `Autor`, `Genero`, `FechaEntrada`, `Estado`) VALUES
(1, 1, 'Linux es lo mejor', 'J. Maria Carazo', 'Sistemas Informáticos', '2022-05-27 17:17:46', 0),
(2, 2, 'Divina comedia', 'Dante Alighieri', 'Epopeya', '2022-05-27 17:17:46', 0),
(3, 3, 'Bases de Datos  NoSQL', 'J. Maria Carazo', 'Trabajos de Ampliacion', '2022-05-27 17:17:46', 0),
(4, 4, 'Ilíada', 'Homero', 'Épico', '2022-05-27 17:17:46', 0),
(5, 5, 'Don Quijote de la Mancha', 'Miguel de Cervantes', 'Novela de aventuras', '2022-05-27 17:17:46', 0),
(6, 5, 'El principito', 'Antoine de Saint-Exupéry', 'Literatura infantil', '2022-05-27 17:17:46', 0),
(7, 1, 'La Singularidad está cerca', 'Raymond Kurzweil', 'Diccionario', '2022-05-27 17:17:46', 0),
(8, 3, 'Vida 3.0', 'Max Tegmark', 'Tecnologia', '2022-05-27 17:17:46', 0),
(9, 2, '1984', 'George Orwell', 'Ciencia ficción', '2022-05-27 17:17:46', 0),
(10, 4, 'Cien años de soledad', 'Gabriel García Márquez', 'Realismo mágico', '2022-05-27 17:17:46', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `idUsuario` int(11) NOT NULL,
  `Nombre` varchar(30) NOT NULL,
  `Apellidos` varchar(50) NOT NULL,
  `Edad` int(11) NOT NULL,
  `Direccion` varchar(100) NOT NULL,
  `Ciudad` varchar(30) NOT NULL,
  `CorreoElectronico` varchar(50) NOT NULL,
  `Contraseña` varchar(50) NOT NULL,
  `FechaRegistro` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `Estado` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idUsuario`, `Nombre`, `Apellidos`, `Edad`, `Direccion`, `Ciudad`, `CorreoElectronico`, `Contraseña`, `FechaRegistro`, `Estado`) VALUES
(1, 'Bryan', 'Fernández Ebraht', 34, 'C.52 nº79, 1ºA', 'Ponedera', 'bryan@ul.edu.co', 'bryan777', '2022-05-27 17:17:46', 1),
(2, 'Agustin', 'Hidalgo Cotán', 23, 'C.Ficticia nº12, 1ºB', 'Sevilla', 'agu@agu.es', 'agustin123', '2022-05-27 17:17:46', 1),
(3, 'Felipe', 'Gallardo Álvarez', 31, 'C. Esta Mismo nº 5', 'Villanueva del Ariscal', 'felipe@felipe.com', 'felipe321', '2022-05-27 17:17:46', 1),
(4, 'Andres', 'Gamarra Urbano', 44, 'Cra. 54c #55-9', 'Ponedera', 'pipe@hotmail.com', 'pipe09', '2022-05-27 17:17:46', 1),
(5, 'Margarita', 'Ortega Orozco', 22, 'Cra. 10a #15-3', 'Carmen del Bolivar', 'Margarita@gmail.com', 'margarita30', '2022-05-27 17:17:46', 1),
(6, 'Laura', 'Ochoa Cervantes', 25, 'Cra. 72b #98-100', 'Cartagena', 'Laura@outlook.com', 'laura14', '2022-05-27 17:17:46', 1),
(7, 'Javier', 'Fontalvo González ', 29, 'C. Esta Mismo nº 3', 'VillaVicencio ', 'jav@gmail.com', 'javi333', '2022-05-27 17:17:46', 1),
(8, 'Enuar', 'Molina Maldonado', 27, 'Cra. 24c #52-9', 'Malambo', 'enuar@hotmail.com', 'enuar10', '2022-05-27 17:17:46', 1),
(9, 'Yaslen', 'Girasol Cabrera', 33, 'Cra. 4a #4-4', 'Caracas', 'yasle@gmail.com', 'yas30', '2022-05-27 17:17:46', 1),
(10, 'Aldeir', 'Diaz Pitt', 36, 'Cra. 03t #98-66', 'Tubara', 'alde@outlook.com', 'alde69', '2022-05-27 17:17:46', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alquileres`
--
ALTER TABLE `alquileres`
  ADD PRIMARY KEY (`idAlquiler`),
  ADD KEY `Usuario` (`idUsuario`),
  ADD KEY `Libro` (`idLibro`);

--
-- Indices de la tabla `editorial`
--
ALTER TABLE `editorial`
  ADD PRIMARY KEY (`idEditorial`);

--
-- Indices de la tabla `libros`
--
ALTER TABLE `libros`
  ADD PRIMARY KEY (`idLibro`),
  ADD KEY `Editorial` (`idEditorial`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idUsuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `alquileres`
--
ALTER TABLE `alquileres`
  MODIFY `idAlquiler` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `editorial`
--
ALTER TABLE `editorial`
  MODIFY `idEditorial` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `libros`
--
ALTER TABLE `libros`
  MODIFY `idLibro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `alquileres`
--
ALTER TABLE `alquileres`
  ADD CONSTRAINT `Libro` FOREIGN KEY (`idLibro`) REFERENCES `libros` (`idLibro`),
  ADD CONSTRAINT `Usuario` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`idUsuario`);

--
-- Filtros para la tabla `libros`
--
ALTER TABLE `libros`
  ADD CONSTRAINT `Editorial` FOREIGN KEY (`idEditorial`) REFERENCES `editorial` (`idEditorial`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
