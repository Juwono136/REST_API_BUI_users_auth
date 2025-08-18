# User Management API
![users-rest-api](https://github.com/user-attachments/assets/9523d3ec-3f15-47d3-b4fd-61ffa90cd328)

API for managing users including registration, login, profile updates, and role-based access, etc. Built with Node.js, Express.js, MongoDB/Mongoose, and documented via Swagger. Designed for internal usage (Computer Science program, BINUS University International), but portable to any environment.

- **Production base URL**: https://csbi-users.csbihub.id/api/user
- **Development base URL**: http://localhost:5000/api/user

> *Swagger is configured in `utils/swagger.js` and points at the base paths above.*

## Features
- User registration & authentication
  - Passwords hashed with bcrypt
  - JWT-based auth with Authorization header (Bearer scheme)
- Role-based access with flexible role array (e.g., `0=user`, `1=admin`, `2=staff`)
- Profile management: personal_info (binusian_id, name, email, password, address, phone, bio, role, avatar, status), and socialLinks.
- Social links support (YouTube, Instagram, Facebook, Twitter, GitHub, Website)
- Secure by default
  - `helmet` for HTTP headers hardening
  - `cors` with configurable origins
  - `cookie-parser` for optional cookie usage
  - Input sanitization with `dompurify` + `jsdom`
- Email support via `nodemailer` (verification, notifications, etc.)
- OpenAPI 3 documentation with `swagger-jsdoc` + `swagger-ui-express`
- Developer friendly
  - `.env` config via `dotenv`
  - Hot reload with `nodemon`
  - Docker-ready
  - CI/CD scaffold via GitHub Actions

## Tech Stack
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


