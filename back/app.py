from flask import Flask
from flask import render_template, request, redirect, url_for, make_response
import os

app = Flask(__name__)


def transform(text_file_contents):
    file = open("data.md", "w")
    file.write(text_file_contents)
    file.close()
    os.system("python -m markdown -x codehilite data.md > body.html")
    secondfile = open("body.html", "r")
    resultinhtml = secondfile.read()
    secondfile.close()
    return resultinhtml


@app.route('/')
def form():
    return """
        <html>
            <body>
                <h1>Transform a file demo</h1>

                <form action="/transform" method="post" enctype="multipart/form-data">
                    <input type="file" name="data_file" />
                    <input type="submit" />
                </form>
            </body>
        </html>
    """


@app.route('/transform', methods=["POST"])
def transform_view():
    request_file = request.files['data_file']
    if not request_file:
        return "No file"

    file_contents = request_file.stream.read().decode("utf-8")

    result = transform(file_contents)

    response = make_response(result)
    response.headers["Content-Disposition"] = "attachment; filename=result.html"
    return response


@app.route('/convert', methods=['POST'])
def login():
    text = request.form['text']
    resultinhtml = transform(text)
    return resultinhtml


def page_not_found(e):
    return render_template('404.html'), 404


def create_app(config_filename):
    app = Flask(__name__)
    app.register_error_handler(404, page_not_found)
    return app


if __name__ == "__main__":
    app.run(debug=True)
