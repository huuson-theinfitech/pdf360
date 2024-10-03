# FastAPI & React Project

## Overview

This project is a full-stack web application built with **FastAPI** for the backend and **React** for the frontend. The backend serves a REST API that handles data processing and serves data to the frontend, which is built with React for creating an interactive user interface.

### Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/huuson-theinfitech/pdf360

   ```

### Setup Environment Variables

1. **Backend (.env)**

   Navigate to the backend folder and create a `.env` file based on `env_example`:

   ```bash
   cd pdf360-server
   cp .env.example .env

   ```

2. **Frontend (.env)**

   Navigate to the frontend folder and create a `.env` file based on `.env.example`:

   ```bash
   cd pdf360-user
   cp .env.example .env
   ```

   Edit the `.env` file and configure the following variables:

   ```bash
   VITE_API_BASE_URL=http://127.0.0.1:8000
   # Setup your openai key here
   VITE_OPENAI_API_KEY= YOUR_OPEN_AI_KEY
   ```

### Running the Application\*\*

Navigate to the root directory of the project:\*\*

```bash
cd pdf360
```

Build and start the application using Docker Compose:

```bash
docker-compose up --build
```

This command will:

- Build the Docker images for both the backend and frontend.
- Start the backend on port `8000` and the frontend on port `8080`.

Access the application:

- Open your web browser and navigate to http://localhost:8080 for the React frontend.
- The FastAPI backend will be available at http://localhost:8000.
