# Lab Authentication API

A simple Node.js + Express + MySQL API for Lab 3 that implements user signup, login, logout (token revocation), and a protected profile endpoint using JWT.

## Overview
- **Language:** Node.js  
- **Framework:** Express  
- **Database:** MySQL  
- **Auth:** JWT (jsonwebtoken) + bcrypt (bcryptjs)  
- **Token revocation:** stored `jti` in `revoked_tokens` table  


## How to Run (Quick)

1. **Install dependencies:**

```bash
npm install express cors dotenv mysql2 bcryptjs jsonwebtoken uuid
npm install --save-dev nodemon

## API Endpoints

| Method | Endpoint           | Description                       |
|------- | ----------------- | --------------------------------- |
| GET    | `/api/health`      | Health check (no auth required)   |
| POST   | `/api/auth/signup` | Register a new user               |
| POST   | `/api/auth/login`  | Login and receive JWT token       |
| POST   | `/api/auth/logout` | Revoke token (requires token)     |
| GET    | `/api/profile`     | Get current user (requires token) |

## 📖 SQL JOINs (Short Explanation)

- **INNER JOIN** → Returns rows that have matching values in both tables.  
- **LEFT JOIN** → Returns all rows from the left table, with matching rows from the right.  
- **RIGHT JOIN** → Returns all rows from the right table, with matching rows from the left.  
- **FULL OUTER JOIN** → Returns all rows when there is a match in either left or right table.  
- **CROSS JOIN** → Returns all possible combinations of rows from both tables.  
- **SELF JOIN** → A table joined with itself, useful for hierarchical data.

---

## 🔗 API Endpoints and Purpose

- **`/api/reports/users-with-roles`** → Lists users with their roles (INNER JOIN).  
- **`/api/reports/users-with-profiles`** → Lists users with profile info (LEFT JOIN).  
- **`/api/reports/roles-right-join`** → Shows all roles and the users assigned to them (RIGHT JOIN).  
- **`/api/reports/profiles-full-outer`** → Combines all users and all profiles, even unmatched (FULL OUTER JOIN).  
- **`/api/reports/user-role-combos`** → Displays all possible user/role pairings (CROSS JOIN).  
- **`/api/reports/referrals`** → Shows users alongside the user who referred them (SELF JOIN).  
- **`/api/reports/latest-login`** → Shows each user with their most recent login activity.
