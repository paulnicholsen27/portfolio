# Use official Python image
FROM python:3.11-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set work directory
WORKDIR /app

# Install system dependencies (includes Node.js + npm)
RUN apt-get update && apt-get install -y \
    build-essential \
    curl \
    git \
    npm \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY requirements.txt .
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copy the full project (both Django and React)
COPY . .

# Build the React frontend
WORKDIR /app/reactfolio
RUN npm install
RUN npm run build

# Move back to Django app directory
WORKDIR /app/portfolio

# Collect static files
RUN python manage.py collectstatic --noinput

# Set Django settings module
ENV DJANGO_SETTINGS_MODULE=portfolio.settings

# Start the application with Gunicorn
CMD ["gunicorn", "portfolio.wsgi:application", "--bind", "0.0.0.0:8000"]
