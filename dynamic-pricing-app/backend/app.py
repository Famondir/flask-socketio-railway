from flask import Flask, jsonify
from flask_socketio import SocketIO, emit

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")

# Initialize a numeric variable
current_value = 0

@app.route('/')
def index():
    return jsonify({"message": "Welcome to the Dynamic Pricing API"})

@socketio.on('increment_count')
def handle_increment():
    global current_value
    current_value += 1
    print(f'Current value: {current_value}')
    emit('update_count', {'value': current_value}, broadcast=True)

@socketio.on('get_value')
def handle_get_value():
    emit('update_count', {'value': current_value})

if __name__ == '__main__':
    socketio.run(app)
    # socketio.run(app, debug=True)