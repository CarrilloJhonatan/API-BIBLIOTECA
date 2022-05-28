# importar librerias

from flask import Flask, request, jsonify, render_template, redirect, url_for, session
from flask_mysqldb import MySQL
from flask_cors import CORS, cross_origin
from os import path  # pip install notify-py
from notifypy import Notify


# initializations
app = Flask(__name__)
CORS(app)


######CONEXION CON MYSQL###########
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'biblioteca'
mysql = MySQL(app)

# settings A partir de ese momento Flask utilizará esta clave para poder cifrar la información de la cookie
app.secret_key = "mysecretkey"


@app.route('/')
def home():
    return render_template("\PARCIAL2\API BIBLIOTECA\VISTA API\html\iniciosecion.html")

####

###

###############################             CONSULTAR / EN LISTAR                  ####################################
#############################################################################################3####


# metodo para consultar  los registros de usuario
@app.route('/consultausuario', methods=['GET'])
def consultausuario():
    try:
        cur = mysql.connection.cursor()
        cur.execute('SELECT * FROM usuarios')
        rv = cur.fetchall()
        cur.close()
        payload = []
        content = {}
        for result in rv:
            content = {'idUsuario': result[0], 'Nombre': result[1], 'Apellidos': result[2],   'Edad': result[3], 'Direccion': result[4],
                       'Ciudad': result[5], 'CorreoElectronico': result[6], 'Contraseña': result[7], 'FechaRegistro': result[8], 'Estado': result[9]}
            payload.append(content)
            content = {}
        return jsonify(payload)
    except Exception as e:
        print(e)
        return jsonify({"informacion": e})

        # metodo para consultar  los registros de editorial


@app.route('/consultaeditorial', methods=['GET'])
def consultaeditorial():
    try:
        cur = mysql.connection.cursor()
        cur.execute('SELECT * FROM editorial')
        rv = cur.fetchall()
        cur.close()
        payload = []
        content = {}
        for result in rv:
            content = {'idEditorial': result[0], 'Nombre': result[1], 'FechaEditorial': result[2],
                       'Estado': result[3]}
            payload.append(content)
            content = {}
        return jsonify(payload)
    except Exception as e:
        print(e)
        return jsonify({"informacion": e})

        # metodo para consultar  los registros de libros


@app.route('/consultalibros', methods=['GET'])
def consultalibros():
    try:
        cur = mysql.connection.cursor()
        cur.execute('SELECT * FROM libros')
        rv = cur.fetchall()
        cur.close()
        payload = []
        content = {}
        for result in rv:
            content = {'idLibro': result[0], 'idEditorial': result[1], 'Titulo': result[2],   'Autor': result[3], 'Genero': result[4],
                       'FechaEntrada': result[5], 'Estado': result[6]}
            payload.append(content)
            content = {}
        return jsonify(payload)
    except Exception as e:
        print(e)
        return jsonify({"informacion": e})

# metodo para consultar  los registros de evidencias


@app.route('/consultalquileres', methods=['GET'])
def consultalquileres():
    try:
        cur = mysql.connection.cursor()
        cur.execute('SELECT * FROM alquileres')
        rv = cur.fetchall()
        cur.close()
        payload = []
        content = {}
        for result in rv:
            content = {'idAlquiler': result[0], 'idUsuario': result[1],
                       'idLibro': result[2],   'FechaAlquiler': result[3], 'Devuelto': result[4]}
            payload.append(content)
            content = {}
        return jsonify(payload)
    except Exception as e:
        print(e)
        return jsonify({"informacion": e})


# metodo para consultar  los innerjoin de alquileres


@app.route('/consultaalquileresjuntos', methods=['GET'])
def consultalquileresjuntos():
    try:
        cur = mysql.connection.cursor()
        cur.execute('SELECT a.Nombre, a.Apellidos, b.Titulo, c.FechaAlquiler, c.Devuelto from alquileres as C inner join usuarios as a on c.idUsuario = a.idUsuario inner join libros as b on c.idLibro = b.idLibro')
        rv = cur.fetchall()
        cur.close()
        payload = []
        content = {}
        for result in rv:
            content = {'Nombre': result[0], 'Apellidos': result[1],
                       'Titulo': result[2],   'FechaAlquiler': result[3], 'Devuelto': result[4]}
            payload.append(content)
            content = {}
        return jsonify(payload)
    except Exception as e:
        print(e)
        return jsonify({"informacion": e})


# metodo para consultar  los innerjoin de alquileres


@app.route('/consultainner', methods=['GET'])
def consultainner():
    try:
        cur = mysql.connection.cursor()
        cur.execute(
            'SELECT a.Titulo, a.Autor, a.Genero, b.Nombre from libros as a inner join editorial as b on a.idEditorial = b.idEditorial')
        rv = cur.fetchall()
        cur.close()
        payload = []
        content = {}
        for result in rv:
            content = {'Titulo': result[0], 'Autor': result[1],
                       'Genero': result[2],   'Nombre': result[3]}
            payload.append(content)
            content = {}
        return jsonify(payload)
    except Exception as e:
        print(e)
        return jsonify({"informacion": e})


@app.route('/consultaleft', methods=['GET'])
def consultaleft():
    try:
        cur = mysql.connection.cursor()
        cur.execute(
            'SELECT * from libros LEFT join editorial on libros.idEditorial = editorial.idEditorial')
        rv = cur.fetchall()
        cur.close()
        payload = []
        content = {}
        for result in rv:
            content = {'idLibro': result[0], 'idEditorial': result[1], 'Titulo': result[2],   'Autor': result[3], 'Genero': result[4],
                       'FechaEntrada': result[5], 'Estado': result[6], 'IDEDITORIAL': result[7], 'Nombre': result[8], 'FechaEditorial': result[9]}
            payload.append(content)
            content = {}
        return jsonify(payload)
    except Exception as e:
        print(e)
        return jsonify({"informacion": e})


@app.route('/consultaorderby', methods=['GET'])
def consultaorderby():
    try:
        cur = mysql.connection.cursor()
        cur.execute(
            'SELECT a.Nombre, a.Apellidos, c.FechaAlquiler, c.Devuelto from alquileres as c inner join usuarios as a on c.idUsuario = a.idUsuario order by c.FechaAlquiler DESC')
        rv = cur.fetchall()
        cur.close()
        payload = []
        content = {}
        for result in rv:
            content = {'Titulo': result[0], 'Autor': result[1],
                       'FechaAlquiler': result[2], 'Devuelto': result[3]}
            payload.append(content)
            content = {}
        return jsonify(payload)
    except Exception as e:
        print(e)
        return jsonify({"informacion": e})


#########################  METODO AVG CONSULTAR VENTAS ######################################
@app.route('/consultaAVG', methods=['GET'])
def consultaAVG():
    try:
        cur = mysql.connection.cursor()
        cur.execute('SELECT AVG(Edad) FROM usuarios')
        rv = cur.fetchall()
        cur.close()
        payload = []
        content = {}
        for result in rv:
            content = {'AVG_Edad': result[0]}
            payload.append(content)
            content = {}
        return jsonify(payload)
    except Exception as e:
        print(e)
        return jsonify({"informacion": e})


#########################  METODO COUNT CONSULTAR VENTAS ######################################
@app.route('/consultaCOUNT', methods=['GET'])
def consultaCOUNT():
    try:
        cur = mysql.connection.cursor()
        cur.execute('SELECT  count(idLibro) FROM libros')
        rv = cur.fetchall()
        cur.close()
        payload = []
        content = {}
        for result in rv:
            content = {'COUNT_Libro': result[0]}
            payload.append(content)
            content = {}
        return jsonify(payload)
    except Exception as e:
        print(e)
        return jsonify({"informacion": e})


#########################  METODO MAX CONSULTAR VENTAS ######################################
@app.route('/consultaMAX', methods=['GET'])
def consultaMAX():
    try:
        cur = mysql.connection.cursor()
        cur.execute('SELECT MAX(Edad) FROM usuarios;')
        rv = cur.fetchall()
        cur.close()
        payload = []
        content = {}
        for result in rv:
            content = {'MAX_Edad': result[0]}
            payload.append(content)
            content = {}
        return jsonify(payload)
    except Exception as e:
        print(e)
        return jsonify({"informacion": e})


#########################  METODO MIN CONSULTAR VENTAS ######################################
@app.route('/consultaMIN', methods=['GET'])
def consultaMIN():
    try:
        cur = mysql.connection.cursor()
        cur.execute('SELECT MIN(Edad) FROM usuarios;')
        rv = cur.fetchall()
        cur.close()
        payload = []
        content = {}
        for result in rv:
            content = {'MIN_Edad': result[0]}
            payload.append(content)
            content = {}
        return jsonify(payload)
    except Exception as e:
        print(e)
        return jsonify({"informacion": e})


#########################  METODO SUM CONSULTAR VENTAS ######################################
@app.route('/consultaSUM', methods=['GET'])
def consultaSUM():
    try:
        cur = mysql.connection.cursor()
        cur.execute('SELECT SUM(Edad) FROM usuarios;')
        rv = cur.fetchall()
        cur.close()
        payload = []
        content = {}
        for result in rv:
            content = {'SUM_EDAD': result[0]}
            payload.append(content)
            content = {}
        return jsonify(payload)
    except Exception as e:
        print(e)
        return jsonify({"informacion": e})

        ####################################           CONSULTAR POR ID                  ####################################
#############################################################################################################


# #metodo para consultar por parametro de alquileres inner
@app.route('/consultalquileres/<id>/', methods=['GET'])
def parametro(id):
    try:
        cur = mysql.connection.cursor()
        cur.execute(
            'SELECT a.Nombre, a.Apellidos, b.Titulo, c.FechaAlquiler, c.Devuelto from alquileres as C inner join usuarios as a on c.idUsuario = a.idUsuario inner join libros as b on c.idLibro = b.idLibro WHERE a.Nombre = %s', (id,))
        rv = cur.fetchall()
        cur.close()
        payload = []
        content = {}
        for result in rv:
            content = {'Nombre': result[0], 'Apellidos': result[1],
                       'Titulo': result[2],   'FechaAlquiler': result[3], 'Devuelto': result[4]}
            payload.append(content)
            content = {}
        return jsonify(payload)
    except Exception as e:
        print(e)
        return jsonify({"informacion": e})

        ###############################          REGISTRAR USUARIO                   ####################################
#############################################################################################################


# #metodo para crear registro de usuario
@app.route('/addalquileres', methods=['POST'])
def addusuario():
    try:
        if request.method == 'POST':

            idUsuario = request.json['idUsuario']
            idLibro = request.json['idLibro']
            cur = mysql.connection.cursor()
            cur.execute("INSERT INTO alquileres (idUsuario,idLibro) VALUES (%s,%s)",
                        (idUsuario, idLibro))
            mysql.connection.commit()
            return jsonify({"informacion": "Registro exitoso"})

    except Exception as e:
        print(e)
        return jsonify({"informacion": e})


###############################                ACTUALIZAR                   ####################################
###############################################################################################################


# # metodo para actualizar usuario
@app.route('/actualizaralquiler/<id>', methods=['PUT'])
def updatealquiler(id):
    try:

        idUsuario = request.json['idUsuario']
        idLibro = request.json['idLibro']
        cur = mysql.connection.cursor()
        cur.execute("""
        UPDATE alquileres
        SET
            idUsuario = %s,
            idLibro = %s
        WHERE idAlquiler = %s
        """, (idUsuario, idLibro, id))
        mysql.connection.commit()
        return jsonify({"informacion": "Registro actualizado"})
    except Exception as e:
        print(e)
        return jsonify({"informacion": e})

###############################             DELETE O ELIMINAR                   ####################################
###########################################################################################################


# metodo delete de usuario
@app.route('/deletealquiler/<id>', methods=['DELETE'])
def deletealquiler(id):
    try:
        cur = mysql.connection.cursor()
        cur.execute('DELETE FROM alquileres WHERE idAlquiler = %s', (id,))
        mysql.connection.commit()
        return jsonify({"informacion": "Registro eliminado"})
    except Exception as e:
        print(e)
        return jsonify({"informacion": e})


###############################             LOGIN                   ####################################
###########################################################################################################


# metodo Login de usuario
@app.route('/login', methods=["POST"])
def login():
    CorreoElectronico = request.json.get("CorreoElectronico", None)
    Contraseña = request.json.get("Contraseña", None)
    cur = mysql.connection.cursor()
    cur.execute(
        'SELECT  CorreoElectronico, Contraseña from usuarios  where CorreoElectronico = %s', (CorreoElectronico,))
    rv = cur.fetchall()
    cur.close()
    for result in rv:

        if CorreoElectronico == result[0] and Contraseña == result[1]:
            response = {"msg": "Access"}
            return response

        return {"msg": "Correo o Contraseña equivocada"}, 401


#########################################################################################################


# validacion en caso de error
def pagina_no_encontrada(error):

    return "<h1>La pagina que intentas buscar no existe...</h1>"


# parametros a cargar
if __name__ == '__main__':

    app.register_error_handler(404, pagina_no_encontrada)

    app.run(debug=True)
