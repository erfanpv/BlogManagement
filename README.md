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
