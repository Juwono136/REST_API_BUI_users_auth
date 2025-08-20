# User Management API
![users-rest-api](https://github.com/user-attachments/assets/9523d3ec-3f15-47d3-b4fd-61ffa90cd328)

API for managing users including registration, login, profile updates, and role-based access, etc. Built with Node.js, Express.js, MongoDB/Mongoose, and documented via Swagger. Designed for internal usage (Computer Science program, BINUS University International), but portable to any environment.

- **Production base URL**: https://csbi-users.csbihub.id/api/user
- **Development base URL**: http://localhost:5000/api/user

> *Swagger is configured in `utils/swagger.js` and points at the base paths above.*

## 🧑‍💻 Tech Stack
- Runtime: Node.js
- Framework: Express.js
- Database & ODM: MongoDB with Mongoose
- Auth: JSON Web Tokens (JWT), bcrypt
- Docs: Swagger (OpenAPI 3) via swagger-jsdoc + swagger-ui-express
- Security: helmet, cors, cookie-parser, dompurify + jsdom
- Email: nodemailer
- Dev Tooling: nodemon, dotenv
- CI/CD: GitHub Actions
- Containerization: Docker

> See package.json for full dependency list.

## ✨ Features
- User registration & authentication
  - Passwords hashed with `bcrypt`
  - JWT-based authentication (Bearer tokens)
- Role-based access with flexible role array:
  - 0 = user
  - 1 = admin
  - 2 = staff
  - etc...
- Profile management
  - Personal Info: binusian_id, name, email, password, address, phone, bio, role, avatar, status
  - Social Links: YouTube, Instagram, Facebook, Twitter, GitHub, Website
- Security
  - `helmet` for HTTP headers
  - `cors` with configurable origins
  - `cookie-parser` for cookie usage
  - Input sanitization via `dompurify` + `jsdom`
- Email Support
  - Verification & notification emails via `nodemailer`
- API Documentation
  - OpenAPI 3 with `swagger-jsdoc` + `swagger-ui-express`
- Developer Friendly
  - .env config via `dotenv`
  - Hot reload with `nodemon`
  - Docker-ready
  - CI/CD via GitHub Actions

## 🏗️ System Architecture
<img width="3840" height="2660" alt="user rest api flowchart _ Mermaid Chart-2025-08-20-121535" src="https://github.com/user-attachments/assets/b3eb4fb7-8694-489e-9311-fbbc31c6499b" />

### Use Case Diagram
![primary-use-case](https://github.com/user-attachments/assets/9504ea0d-9e2c-4219-8b22-398223ba48f3)

### Activity Diagram



