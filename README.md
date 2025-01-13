# TrimLink

TrimLink is a URL shortening service that allows users to create, manage, and track shortened URLs. The project consists of two main parts: the client application built with React and the server application built with Spring Boot.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Features

- User authentication (login and registration)
- URL shortening
- URL redirection
- URL analytics (click tracking)
- User-specific URL management
- Responsive design

## Technologies Used

### Client

- React
- React Router
- Axios
- Tailwind CSS
- Chart.js
- React Hook Form
- React Query
- React Hot Toast
- Framer Motion

### Server

- Spring Boot
- Spring Security
- JWT (JSON Web Tokens)
- JPA (Java Persistence API)
- MySQL
- Lombok
- Maven

## Getting Started

### Prerequisites

- Node.js and npm
- Java Development Kit (JDK)
- MySQL database

### Installation

1. Clone the repository:

```sh
git clone https://github.com/your-username/TrimLink.git
```
```
cd TrimLink
```
2. Set up the server application:
   - Navigate to the TrimLink-server directory:

     ```cd TrimLink-server```
   - Create a MySQL database and update application.yml file with your database credentials:
  ```
  spring:
      datasource:
    url: jdbc:mysql://localhost:3306/your-database
    username: your-username
    password: your-password 
```
  - Update the JWT secret and expiration in the application.yml file:
```
jwt:
  secret: your-jwt-secret
  expiration: 86400000
```
  - Build and Run the server

3. Set up the client application:
   - Navigate to the TrimLink-client directory:

     ```cd TrimLink-client```

   - Create a .env file and add the backend URL:
  ```
     VITE_BACKEND_URL=http://localhost:8080
     VITE_REACT_FRONT_END_URL=http://localhost:3000
```
  - Install the dependencies and start the client application:
```
npm install
npm run dev
```

### Usage
1. Open your browser and navigate to http://localhost:5173.
2. Register a new user or log in with an existing account.
3. Create a new shortened URL by entering the original URL.
4. Manage your shortened URLs and view analytics on the dashboard.

## API Endpoints
### Authentication
- ```POST /api/auth/public/login``` : Login User
- ```POST /api/auth/public/register``` : Register a new user

### URL Management
- ```POST /api/urls/shorten``` : Create a new shortened URL
- ```GET /api/urls/myurls``` : Get all URLs created by the authenticated user
- ```GET /api/urls/analytics/{shortUrl}``` :  Get analytics for a specific shortened URL
- ```GET /api/urls/totalClicks``` :  Get total clicks for the authenticated user's URLs

### Redirection
- ```GET /{shortUrl}``` : Redirect to the original URL
