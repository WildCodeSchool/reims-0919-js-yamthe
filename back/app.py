from flask import Flask
from flask import render_template

app = Flask(__name__)


@app.route('/')
def index():
    return "hello World!"


def page_not_found(e):
    return render_template('404.html'), 404


def create_app(config_filename):
    app = Flask(__name__)
    app.register_error_handler(404, page_not_found)
    return app


if __name__ == "__main__":
    app.run(debug=True)
