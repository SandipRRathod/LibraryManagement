# Library Management System

## Project Overview

The **Library Management System** is a web-based application that allows users to manage books, users, and transactions efficiently. It is built using **Spring Boot** for the backend and **Angular** for the frontend, with MySQL as the database.

## Technologies Used

- **Backend:** Spring Boot, Spring Data JPA, Lombook,Devtools etc.
- **Frontend:** Angular, TypeScript, Bootstrap
- **Database:** MySQL
- **Deployment:** Backend deployed using Docker and AWS EC2, Frontend deployed on Vercel

---

## Setup and Installation

### Prerequisites

Ensure you have the following installed on your system:

- Java 17+
- Maven 3+
- Node.js 16+
- Angular CLI
- MySQL
- Docker (for containerized deployment)

### Backend Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/librarymanagement.git
   cd librarymanagement/Backend
   ```
2. Configure the database in `application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/library_db
   spring.datasource.username=root
   spring.datasource.password=yourpassword
   ```
3. Build and run the backend:
   ```sh
   mvn clean install
   mvn spring-boot:run
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```sh
   cd ../Frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the Angular application:
   ```sh
   ng serve --open
   ```

---

## Deployment

### Backend Deployment

- The backend is deployed on **AWS EC2** using Docker.

### Frontend Deployment

- The frontend is deployed on **Vercel** for seamless hosting and automatic deployments from GitHub.
- Live site: [Library Management System](https://library-management-flax-three.vercel.app/books)

---

## API Endpoints

### Books

- **GET /api/books** – Retrieves a list of all books.
- **GET /api/books/{id}** – Retrieves details of a specific book by BookID.
- **GET /api/books/{bookTitle}** – Retrieves details of a specific book by BookTitle.
- **POST /api/books** – Adds a new book to the system.
- **PUT /api/books/{id}** – Updates details of an existing book.
- **DELETE /api/books/{id}** – Deletes a book by ID.

---

## Challenges Faced

1. **Frontend-Backend Integration**

   - CORS errors prevented API calls from the frontend.
   - Solved by configuring CORS in Spring Boot.

2. **Mixed Content Error**

   - Encountered issues due to API requests being made over HTTP while the frontend was served over HTTPS.
   - Resolved by ensuring the backend also runs on HTTPS or by allowing requests from HTTPS sources.

## Future Improvements

- **Better UI/UX**: Implement a more user-friendly interface with Material UI and Bootstrap.
- **Microservices Architecture**: Break down the monolithic structure into microservices.
- **HTTPS Implementation**: Ensure secure HTTPS connections for both frontend and backend to prevent mixed content errors in future deployments.
- **Security Like JWT Or OAuth.**
- **Role-Based Access Control**: Implement different access levels for admins and users.
- **Optimized Database Queries**: Improve query performance by indexing frequently accessed columns.

---

## Contact

For any issues or contributions, reach out via [sandiprathod2667@gmail.com](mailto\:sandiprathod2667@gmail.com) or open an issue on GitHub.

