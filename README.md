# Blog Management Application

This is a full-stack blog management application with a **Next.js** and **Tailwind CSS** client, and an **Express** and **MongoDB** server. The application allows users to manage their blogs with secure JWT-based authentication and includes a responsive UI following Figma specifications.

## Table of Contents

- Project Overview
- Technologies Used
- Setup and Installation
  - Client
  - Server
- Running the Application Locally
- Application Architecture
- Deployment
- Live Demo

## Project Overview

Over the past week, I focused on building and integrating Next.js, React Query, and Zustand to meet the project's requirements. Key features include:

- **Frontend Framework**: Next.js, for server-side rendering and enhanced performance.
- **State Management**: Zustand, for efficient global state management.
- **Data Fetching and Caching**: React Query, for API handling, caching, and data synchronization.
- **Form Handling and Validation**: React Hook Form and Zod, for schema-based form validation.
- **JWT Authentication**: Secure JWT-based authentication with HTTP-only cookies.
- **Admin Panel Design**: UI aligned with Figma specifications using Shadcn components.

## Technologies Used

### Client
- **Next.js** for server-side rendering
- **Tailwind CSS** for styling
- **React Query** for API data handling
- **Zustand** for state management
- **React Hook Form** with **Zod** for form validation

### Server
- **Express** for building API routes
- **Mongoose** for MongoDB
- **JWT** for authentication

## Setup and Installation

### Prerequisites

- **Node.js** and **npm** installed
- MongoDB database setup (local or cloud)

### Client

1. Navigate to the `client` folder:
   ```bash
   cd client
2. Install dependencies:
   ```bash
   npm install
3. Set up environment variables in a .env.local or .env file:
   ```bash
   echo "NEXT_PUBLIC_API_BASE_URL=http://localhost:4000/api" > .env.local

### Server

1. Navigate to the server folder:
   ```bash
   cd server
2. Install dependencies:
   ```bash
   npm install
3. Set up environment variables in a .env file:
   ```bash
   echo "MONGODB_URL=<your-mongodb-uri>" > .env
   echo "ACCESS_TOKEN_SECRET=<your-jwt-secret>" >> .env
   echo "REFRESH_TOKEN_SECRET =<your-jwt-secret>" >> .env
   echo "dbName =<your-db-name>" >> .env
   echo "PORT=4000" >> .env
   echo "CLOUDINARY_CLOUD_NAME =<your clodinary name>" >> .env
   echo "CLOUDINARY_API_KEY =<your clodinary api key>" >> .env
   echo CLOUDINARY_API_SECRET=<your clodinary api secret====>" >> .env

## Running the Application Locally

### Start the Server

1. In the server directory, run:
   ```bash
   npm run dev
The server will start on http://localhost:4000.

### Start the Client

1. In the client directory, run:
   ```bash
   npm run dev
The client will start on http://localhost:3000.

## API Base URL
Set the client-side API base URL to http://localhost:4000/api for local development.

## Application Architecture
The application is split into client and server folders:
  ### Client Side (Next.js, Zustand, React Query); 
  - **Pages: Dynamic and static routes for blog posts and authentication.**
  - **State Management: Zustand manages global state like authentication status.**
  - ** Data Fetching: React Query handles API requests and data caching.**
  - **UI: Tailwind CSS and Shadcn components aligned with Figma designs.**
  ### Server Side (Express, MongoDB);
  - **Routes: Express handles CRUD operations and authentication.**
  - **Authentication: JWT-based, with tokens stored in HTTP-only cookies.**
  - **Database: MongoDB managed with Mongoose for schema definitions.**
## Deployment
The application is deployed as follows:
  Frontend: Vercel for continuous deployment and scalability.
  Backend: Render for managed Node.js hosting.

## Live Demo
Access the live application here: [https://blog-management-six.vercel.app/]

## API Base URL:
Local: http://localhost:4000/api
Production: https://blogmanagement-ce2e.onrender.com/api









