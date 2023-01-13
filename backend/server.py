from flask import Flask, request, send_file
from mysql.connector import connect
from flask_cors import CORS # idk why i installed cors

app = Flask(__name__)
CORS(app)

# database: student_database 
# table: student
# for login use table: users
db = connect(
    host = '127.0.0.1', # can be replaced with 'localhost'
    user = 'root',
    password = '',
    database = 'student_database'
)

#table: str = "student"

@app.route("/export", methods=['POST'])
def export():
    text = request.json['text']
    with open('attendance.txt', 'w') as f:
        f.write(text)
    return send_file('attendance.txt', as_attachment=True)

@app.route("/members")
def members():
    sql: str = f"SELECT * FROM `student`"
    cursor: object = db.cursor(dictionary=True)
    cursor.execute(sql)
    rows: list = cursor.fetchall()
    return rows
    # return {"members": ["Member1", "Member2", "Member3"]} (for testing)

@app.route("/savestudent", methods=["POST"])
def savestudent():
    form_data = request.form
    idno = form_data["idno"]
    lastname = form_data["lastname"]
    firstname = form_data["firstname"]
    course = form_data["course"]
    level = form_data["level"]

    # connect to the database and insert the data
    cursor = db.cursor(dictionary=True)
    cursor.execute(
        'INSERT INTO student (idno, lastname, firstname, course, level) VALUES (%s, %s, %s, %s, %s)',
        (idno, lastname, firstname, course, level),
    )
    rows: list = cursor.fetchall()
    
    db.commit()
    db.close()    

    return rows




if __name__=="__main__":
    app.run(debug=True)

# cd c:\xampp
# xampp-control

# to install flask
# refer to documentation but (https://flask.palletsprojects.com/en/2.2.x/installation/#install-flask) 
# py -3 -m venv venv
# venv\Scripts\activate 
# pip install Flask

# to run server: py -3 server.py
# ctrl + c to quit server

# flask --app app --debug run (save lng ari)