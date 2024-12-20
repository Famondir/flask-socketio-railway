# Dynamic Pricing App

This project is a full-stack application that features a Flask backend with Flask-SocketIO and a React frontend. The application allows users to increment a numeric variable through a button on the frontend, with real-time updates displayed on the screen.

## Project Structure

```
dynamic-pricing-app
├── backend
│   ├── app.py               # Main entry point for the Flask server
│   ├── requirements.txt      # Python dependencies for the backend
│   └── README.md             # Documentation for the backend
├── frontend
│   ├── public
│   │   └── index.html        # Main HTML file for the React application
│   ├── src
│   │   ├── App.js            # Main component of the React application
│   │   ├── index.js          # Entry point for the React application
│   │   └── components
│   │       └── Counter.js     # Component to display and increment the numeric value
│   ├── package.json          # Configuration file for npm
│   ├── .env                  # Environment variables for the frontend
│   └── README.md             # Documentation for the frontend
├── .gitignore                # Files and directories to be ignored by Git
└── README.md                 # Overview of the entire project
```

## Getting Started

### Backend Setup

1. Navigate to the `backend` directory.
2. Install the required Python packages:
   ```
   pip install -r requirements.txt
   ```
3. Run the Flask server:
   ```
   python app.py
   ```

### Frontend Setup

1. Navigate to the `frontend` directory.
2. Install the required npm packages:
   ```
   npm install
   ```
3. Start the React application:
   ```
   npm start
   ```

## Usage

- Access the application at `https://dynamicpricing-production.up.railway.app/`.
- Use the button on the frontend to increment the numeric value, which will be updated in real-time.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.