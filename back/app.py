from flask import Flask
from flask import render_template
from flask import request, redirect, url_for
import os

app = Flask(__name__)


@app.route('/')
def index():
    return "hello World!"


@app.route('/convert', methods=['POST'])
def login():
    text = request.form['text']
    file = open("data.md", "w")
    file.write(text)
    file.close()
    os.system("python -m markdown -x codehilite data.md > body.html")
    secondfile = open("body.html", "r")
    resultinhtml = secoundfile.read()
    secoundfile.close()
    return resultinhtml


def page_not_found(e):
    return render_template('404.html'), 404


def create_app(config_filename):
    app = Flask(__name__)
    app.register_error_handler(404, page_not_found)
    return app


if __name__ == "__main__":
    app.run(debug=True)
