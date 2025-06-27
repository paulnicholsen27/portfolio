# Use official Python image
FROM python:3.11-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV DJANGO_SETTINGS_MODULE=portfolio.settings

# Set work directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    curl \
    git \
    npm \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY requirements.txt .
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copy the full project into the container
COPY . .

# Build the React frontend
WORKDIR /app/reactfolio
RUN npm install && npm run build

# Copy React build into Django static directory
WORKDIR /app
RUN mkdir -p /app/portfolio/static && \
    cp -r /app/reactfolio/build/* /app/portfolio/static/

# Collect Django static files
WORKDIR /app
RUN python manage.py collectstatic --noinput

# Start the Django app with Gunicorn
CMD ["gunicorn", "portfolio.wsgi:application", "--bind", "0.0.0.0:8000"]
