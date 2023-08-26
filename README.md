![Screen Shot 2023-08-26 at 12 13 56](https://github.com/RevoU-FSSE-2/week-10-resyanac/assets/135514670/792ce954-808c-4229-8032-d409e639d419)# INTRODUCTION

Hello, Resya here! 23 years old girl in +8 GMT (East Borneo) timezone. I am a Tax Collector and software engineer. The 9th assignment are assigned to a simple API server about mbanking app. 

# RESTful API for Transfer Request Management


This 10th week project is a RESTful API built with Node.js, Express.js, MongoDB Atlas, and Swagger. It facilitates the interaction between two distinct roles: the "maker" and the "approver." The primary goal of this API is to manage transfer requests efficiently, ensuring data integrity and security.

## Features

- **CRUD Operations**: The API supports Create, Read, Update, and Delete (CRUD) operations for two distinct collections: Users and Transfers.

- **Role-Based Access**: Users are categorized into "maker" and "approver" roles, each with specific permissions and access levels.

- **Swagger Documentation**: Comprehensive API documentation is available via Swagger UI, making it easy for developers to understand and interact with the API.

- **MongoDB Atlas Integration**: Data is stored in MongoDB Atlas, providing scalability, reliability, and ease of management.

## Usage

- Access the API documentation and test the endpoints using Swagger UI at `http://localhost:3000/`.

## API Endpoints

### Users

- `GET /`: homepage.
- `GET /users/users`: Retrieve all users.
- `POST /users/register`: Register a new user.
- `POST /users/login`: Login a new user.

### Transfers

- `GET /auth/`: Retrieve all transfer requests.
- `POST /auth/transfer`: Create a new transfer request.
- `PUT /auth/transfer/:id`: Update an existing transfer request by ID.
- `DELETE /auth/transfer/:id`: Delete a transfer request by ID.

![Screen Shot 2023-08-26 at 12 13 56](https://github.com/RevoU-FSSE-2/week-10-resyanac/assets/135514670/e2584cb7-975e-49d3-8f71-b0f27b051030)

![Screen Shot 2023-08-25 at 23 47 30](https://github.com/RevoU-FSSE-2/week-10-resyanac/assets/135514670/b5238e35-f984-42ff-ae2e-c15ec37d8e27)

![Screen Shot 2023-08-26 at 00 34 06](https://github.com/RevoU-FSSE-2/week-10-resyanac/assets/135514670/df0cc0b1-2610-4d63-8f93-f7621eed3960)







