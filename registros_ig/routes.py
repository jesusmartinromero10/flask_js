
import sqlite3
from flask import jsonify, render_template

from registros_ig import app
from registros_ig.models import select_all

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api/v1.0/all")
def all_movements():
    try:
        registros = select_all()
        return jsonify(
            {
                'data' : registros,
                'status': 'ok'
            }) #transforma en json con jsoninfy
    except sqlite3.Error as e:#capat el error de si cambia nombre base de datos
        return jsonify(
            {
                'status' : 'Error',
                'data': str(e)
            }
        ), 400#con esto le decimos que de el error 400


@app.route("/api/v1.0/new", methods=["POST"])
def new():
    return "Esto hara alta"

@app.route("/api/v1.0/delete/<int:id>", methods=["DELETE"])
def delete(id):
    return f"Esto borra {id}"
@app.route("/api/v1.0/update/<int:id>", methods=["PUT"])
def update(id):
    return f"Esto hara modifica {id}"