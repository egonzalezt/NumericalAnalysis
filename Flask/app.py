from flask import Flask
import os

from Routes.routes import methods

app = Flask(__name__)
app.config["DEBUG"] = False
app.register_blueprint(methods)

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run()