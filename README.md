## Library Management System - Backend API
A robust, scalable, and type-safe backend for a Library Management System. Built with Node.js, Express, and Prisma ORM, this server handles everything from user memberships and book inventories to complex borrowing workflows and fine management.



# Key Features
- Relational Data Modeling: Optimized PostgreSQL schema for Users, Memberships, Books, and Borrowing records.

- Automated Borrowing System: Tracks due dates, return dates, and renewal counts.

- Fine Management: Automatically manages different fine types like OVERDUE, LOST_BOOK, and DAMAGED_BOOK.

- Role-Based Access (RBAC): Distinct logic for Admin, Librarian, and User.

- Inventory Tracking: Detailed logs for added, removed, or damaged books.

- Notifications & Alerts: Notification system for due reminders and system announcements.

# Tech Stack & Tools
- Language: TypeScript

- Framework: Express.js

- ORM: Prisma

- Database: PostgreSQL

- Environment: Node.js

# Prisma Database Setup
Since this project uses Prisma, follow these steps to sync your database:

- 1. Configure Environment
Create a .env file in the root directory and add your PostgreSQL connection string:

  ```bash
  DATABASE_URL="postgresql://username:password@localhost:5432/library_db?schema=public"
  PORT=3003
  ```

- 2. Install Dependencies
 
 ```bash
 npm install
 ```
- 3. Sync Database (Migrations)

```bash
 npx prisma migrate dev --name init
 ```

- 4. Generate Client

```bash
 npx prisma generate
 ```

- 5. Explore via Prisma Studio

```bash
 npx prisma studio
 ```

# Getting Started
```bash
 npm run dev
 ```


# NPM Packages Used
- @prisma/client - Type-safe database client.

- express - Fast and minimalist web framework.

- http-status - Consistent HTTP response status codes.

- dotenv - Managing environment variables.

- typescript - For strict typing and better developer experience.


# Backend Architecture
- The project follows a modular structure for maintainability:

- Interfaces: Data definitions and types.

- Services: Core business logic and database interactions.

- Controllers: Request handling and response formatting.

- Routes: API endpoint mapping.


# Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

# Developed with ❤️ by Hafsa