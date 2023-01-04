from flask import Flask 
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
'''
def getallrecord(table: str) -> list: 
    sql: str = f"SELECT * FROM `{table}`"
    cursor: object = db.cursor(dictionary=True)
    cursor.execute(sql)
    rows: list = cursor.fetchall()
    return rows
'''

@app.route("/members")
def members():
    sql: str = f"SELECT * FROM `student`"
    cursor: object = db.cursor(dictionary=True)
    cursor.execute(sql)
    rows: list = cursor.fetchall()
    return rows
    # return {"members": ["Member1", "Member2", "Member3"]} (for testing)



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