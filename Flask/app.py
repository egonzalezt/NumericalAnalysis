import flask

app = flask.Flask(__name__)
app.config["DEBUG"] = True

from Routes import routes

app.run()