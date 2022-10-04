from crypt import methods
from flask import jsonify, render_template

from registros_ig import app
from registros_ig.models import select_all

@app.route("/")
def index():
    return render_template("pagina_principal.html")
    


@app.route("/api/v1.0/all")
def all_movements():
    registros = select_all()
    return jsonify(registros) #transforma en json con jsoninfy

@app.route("/api/v1.0/new", methods="POST")
def new():
    return "Esto hara alta"

@app.route("/api/v1.0/delete/<int:id>", methods="DELETE")
def delete(id):
    return f"Esto borra {id}"
@app.route("/api/v1.0/update/<int:id>", methods="PUT")
def update(id):
    return f"Esto hara modifica {id}"