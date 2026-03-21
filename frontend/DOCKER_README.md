# Portfolio Frontend - Docker Setup

This is a React-based portfolio website containerized with Docker.

## Prerequisites

- **Docker Desktop must be installed and running**
- Download from: https://www.docker.com/products/docker-desktop

## 🚀 Quick Start

### Step 1: Start Docker Desktop
1. Open Docker Desktop application
2. Wait for it to fully start (whale icon in system tray should be solid)

### Step 2: Run the Application

#### Option A: Using the batch file (Easiest)
```bash
# Double-click the run-docker.bat file in the frontend folder
run-docker.bat
```

#### Option B: Using Command Prompt
```bash
cd frontend
docker-compose up --build
```

#### Option C: Manual Docker commands
```bash
# Build the image
docker build -t portfolio-frontend .

# Run the container
docker run -p 8080:80 portfolio-frontend
```

### Step 3: Access Your Portfolio
Open your browser and go to: **http://localhost:8080**

## Troubleshooting

### ❌ "Docker daemon is not running"
**Solution:** Start Docker Desktop and wait for it to fully load

### ❌ "Port 8080 already in use"
**Solution:** Change the port in docker-compose.yml:
```yaml
ports:
  - "3000:80"  # Change 8080 to any available port
```

### ❌ Build fails
**Solution:** Clear Docker cache and rebuild:
```bash
docker system prune -f
docker-compose up --build --force-recreate
```

### ❌ Container won't start
**Solution:** Check logs:
```bash
docker-compose logs -f
```

## Development vs Production

- **Development**: `npm run dev` (hot reload, localhost:5173)
- **Production**: Docker container (optimized, localhost:8080)

## File Structure

```
frontend/
├── Dockerfile          # Docker build configuration
├── docker-compose.yml  # Container orchestration
├── nginx.conf          # Web server configuration
├── run-docker.bat      # Windows batch file for easy startup
├── .dockerignore       # Build optimization
└── DOCKER_README.md    # This file
```