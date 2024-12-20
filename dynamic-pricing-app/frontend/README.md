# Frontend README for Dynamic Pricing App

# Dynamic Pricing App - Frontend

This is the frontend part of the Dynamic Pricing App, built with React and Flask-SocketIO. The application allows users to increment a numeric value displayed on the screen, which is managed by a Flask backend.

## Getting Started

To get started with the frontend, follow these steps:

1. **Clone the repository:**
   ```
   git clone https://github.com/yourusername/dynamic-pricing-app.git
   cd dynamic-pricing-app/frontend
   ```

2. **Install dependencies:**
   Make sure you have Node.js installed. Then run:
   ```
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the `frontend` directory and add the following line:
   ```
   REACT_APP_BACKEND_URL=http://localhost:5000
   ```

4. **Run the application:**
   Start the development server with:
   ```
   npm start
   ```

   The app will be available at `http://localhost:3000`.

## Features

- Real-time updates of the numeric value using WebSocket communication.
- Simple and intuitive user interface to increment the value.

## Folder Structure

- `public/`: Contains the static files for the React app.
- `src/`: Contains the source code for the React application.
  - `components/`: Contains React components, including the Counter component.

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Flask-SocketIO](https://flask-socketio.readthedocs.io/en/latest/) - Enables WebSocket communication in Flask.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.