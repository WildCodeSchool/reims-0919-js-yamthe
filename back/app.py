from flask import Flask
from flask import render_template
from flask import request, redirect, url_for

app = Flask(__name__)


@app.route('/')
def index():
    return "hello World!"


@app.route('/success/<name>')
def success(name):
    return 'welcome %s' % name


@app.route('/convert', methods=['POST'])
def login():
    user = request.form['name']
    return redirect(url_for('success', name=user))


def page_not_found(e):
    return render_template('404.html'), 404


def create_app(config_filename):
    app = Flask(__name__)
    app.register_error_handler(404, page_not_found)
    return app


if __name__ == "__main__":
    app.run(debug=True)
