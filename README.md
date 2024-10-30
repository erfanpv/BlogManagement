# Blog Management Application

# Project Overview
# This is a full-stack blog management application with a Next.js and Tailwind CSS client, and an Express and MongoDB server.
# The application allows users to manage blogs with JWT-based authentication and includes a responsive UI following Figma specifications.

# Technologies Used

## Client
# - Next.js for server-side rendering
# - Tailwind CSS for styling
# - React Query for API data handling and caching
# - Zustand for state management
# - React Hook Form with Zod for form validation

## Server
# - Express for building API routes
# - Mongoose for MongoDB
# - JWT for authentication

# Setup and Installation

## Prerequisites
# - Node.js and npm installed
# - MongoDB database setup (local or cloud)

# Client Setup

# Navigate to the client folder:
cd client

# Install dependencies:
npm install

# Set up environment variables in a .env.local file:
echo "NEXT_PUBLIC_API_BASE_URL=http://localhost:4000/api" > .env.local

## Server Setup

# Navigate to the server folder:
cd ../server

# Install dependencies:
npm install

# Set up environment variables in a .env file:
echo "MONGODB_URI=<your-mongodb-uri>" > .env
echo "JWT_SECRET=<your-jwt-secret>" >> .env
echo "PORT=4000" >> .env

# Running the Application Locally

## Start the Server

# In the server directory, run:
npm run dev

# The server will start on http://localhost:4000.

## Start the Client

# In the client directory, run:
cd ../client
npm run dev

# The client will start on http://localhost:3000.

## API Base URL

# Ensure the client-side API base URL is set to http://localhost:4000/api for local development.

# Application Architecture

## Client Side (Next.js, Zustand, React Query)
# - Pages: Dynamic and static routes for blog posts and authentication.
# - State Management: Zustand manages global state like authentication status.
# - Data Fetching: React Query handles API requests and data caching.
# - UI: Tailwind CSS and Shadcn components aligned with Figma designs.

## Server Side (Express, MongoDB)
# - Routes: Express handles CRUD operations and authentication.
# - Authentication: JWT-based, with tokens stored in HTTP-only cookies.
# - Database: MongoDB managed with Mongoose for schema definitions.

# Deployment

# The application is deployed as follows:

# Frontend: Deployed on Vercel for continuous deployment and scalability.
# Backend: Deployed on Render for managed Node.js hosting.

# Live Demo

# Access the live application here: https://blog-management-six.vercel.app/

# API Base URL:
# - Local: http://localhost:4000/api
# - Production: https://blogmanagement-ce2e.onrender.com/api
