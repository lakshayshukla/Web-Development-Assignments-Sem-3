# Student Management REST API

**Lab Assignment 2 (Unit 2)** – Back End Development

| | |
|---|---|
| **Name** | Lakshay Shukla |
| **Roll No.** | 2501660031 |
| **Semester** | 3 |
| **Programme** | BCA (Cybersecurity) |
| **Course** | Back End Development |

## About

A simple REST API built with Node.js and Express for managing student records. It supports the full set of CRUD operations. As per the assignment, **no database is used** – student data is kept in a plain JavaScript array in memory, so it resets whenever the server restarts.

## Tech Stack

- Node.js
- Express.js
- Postman (for testing)

## Project Structure

```
student-management-api/
├── app.js                      # server setup, middleware, error handling
├── routes/
│   └── studentRoutes.js        # all /students routes
├── middleware/
│   └── logger.js               # custom logger (method, URL, time)
├── data/
│   └── students.js             # in-memory student array
├── postman/
│   └── Student_API.postman_collection.json
├── package.json
└── README.md
```

## Setup and Run

Make sure Node.js is installed, then:

```bash
npm install
npm start
```

The server starts at `http://localhost:3000`.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/students` | Get all students |
| GET | `/students/:id` | Get one student by id |
| POST | `/students` | Add a new student |
| PUT | `/students/:id` | Update a student |
| DELETE | `/students/:id` | Delete a student |

### Request body (POST and PUT)

```json
{
  "name": "Neha",
  "course": "BBA"
}
```

Both `name` and `course` are required and must be non-empty strings.

### Sample response – GET /students

```json
[
  { "id": 1, "name": "Rahul", "course": "BCA" },
  { "id": 2, "name": "Priya", "course": "BTech" },
  { "id": 3, "name": "Amit", "course": "BCA" }
]
```

## Status Codes

| Code | Meaning | When |
|------|---------|------|
| 200 | OK | Successful GET, PUT, DELETE |
| 201 | Created | Student added with POST |
| 400 | Bad Request | Missing/empty fields, invalid id, or malformed JSON |
| 404 | Not Found | Student id or route does not exist |
| 500 | Internal Server Error | Unexpected server error |

Error responses look like this:

```json
{ "error": "Student with id 99 not found" }
```

## Middleware

- **Logger** (`middleware/logger.js`) – prints the time, HTTP method and URL of every request to the console, e.g. `[10/6/2026, 6:27:18 PM] GET /students`
- **express.json()** – parses JSON request bodies
- **Error handler** – returns a clean JSON response for malformed JSON and unexpected errors

## Testing with Postman

1. Start the server with `npm start`.
2. In Postman, click **Import** and select `postman/Student_API.postman_collection.json`.
3. Run the requests (the base URL is stored as a collection variable `baseUrl`).

All five APIs were tested, along with the 400 and 404 cases.

## Author

Lakshay Shukla – BCA (Cybersecurity), Semester 3
