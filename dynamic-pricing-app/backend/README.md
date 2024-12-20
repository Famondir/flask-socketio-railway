# Dynamic Pricing App - Backend

This is the backend for the Dynamic Pricing App, which uses Flask and Flask-SocketIO to create a real-time web application.

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone https://github.com/yourusername/dynamic-pricing-app.git
   cd dynamic-pricing-app/backend
   ```

2. **Create a virtual environment:**
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install the required packages:**
   ```
   pip install -r requirements.txt
   ```

4. **Run the Flask server:**
   ```
   python app.py
   ```

## Usage

- The server initializes a numeric variable that can be incremented via WebSocket events.
- The current value is sent to connected clients, allowing real-time updates.

## Endpoints

- The server listens for WebSocket connections and handles events to increment and retrieve the current numeric value.

## Technologies Used

- Flask
- Flask-SocketIO

## License

This project is licensed under the MIT License.