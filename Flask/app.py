from flask import Flask
from scripts.delete import deletepic
import os
import schedule
import time

from Routes.routes import methods
from Routes.matrixroutes import methodsMatrix
app = Flask(__name__)
app.config["DEBUG"] = True
app.register_blueprint(methods)
app.register_blueprint(methodsMatrix)

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
    schedule.every().hour.do(deletepic())
    schedule.run_pending()
