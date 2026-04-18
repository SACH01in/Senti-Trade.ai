# Senti-Trade.ai

## Overview

Senti-Trade.ai is an AI-powered sentiment analysis platform designed for trading applications. This project provides a backend server built with Node.js and Express to handle sentiment analysis requests and serve trading insights based on market sentiment.

## Features

- Real-time sentiment analysis
- RESTful API endpoints
- CORS enabled for cross-origin requests
- Environment-based configuration

## Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd Senti-Trade.ai
   ```

2. Navigate to the server directory:

   ```
   cd Server
   ```

3. Install dependencies:
   ```
   npm install
   ```

## Configuration

Create a `.env` file in the `Server` directory with the following variables:

```
PORT=3002
URL=http://localhost:3002
```

## Usage

To start the development server:

```
npm start
```

The server will run on the port specified in your `.env` file (default: 3002).

## API Endpoints

### GET /

- **Description**: Health check endpoint
- **Response**: `app is running smoothly at port {PORT}`

## Technologies Used

- **Node.js**: Runtime environment
- **Express.js**: Web framework
- **CORS**: Cross-origin resource sharing
- **dotenv**: Environment variable management

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the ISC License.
