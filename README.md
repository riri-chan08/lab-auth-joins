# Laboratory Activity 4: Extending Authentication API with SQL JOIN Reports

## Overview
This project extends the Lab 3 Authentication API by adding SQL `JOIN` queries and exposing them through protected `/api/reports` endpoints. The API demonstrates several SQL join types and how to securely access them using JWT authentication.

---

## SQL JOIN Explanations (short)
- **INNER JOIN** — Returns rows that have matching values in both tables.  
- **LEFT JOIN** — Returns all rows from the left table, and matching rows from the right (NULL where no match).  
- **RIGHT JOIN** — Returns all rows from the right table, and matching rows from the left (NULL where no match).  
- **FULL OUTER JOIN (emulated)** — Combined LEFT + RIGHT (via `UNION`) to include rows present in either table.  
- **CROSS JOIN** — Returns the Cartesian product: every combination of rows from both tables.  
- **SELF JOIN** — Joins a table to itself; useful for hierarchical relationships (e.g., referrals).  
- **Latest-login (subquery + JOIN)** — Returns each user with their most recent login record.

---

## API Endpoints (all protected — require JWT)
Use `Authorization: Bearer <token>` for all routes below.

- `GET /api/reports/users-with-roles`  
  Lists users with their assigned roles (INNER JOIN users ↔ roles).

- `GET /api/reports/users-with-profiles`  
  Lists all users and their profile info when available (LEFT JOIN users ↔ profiles).

- `GET /api/reports/roles-right-join`  
  Shows all roles and any assigned users (RIGHT JOIN roles ↔ user_roles/users).

- `GET /api/reports/profiles-full-outer`  
  Shows users and profiles, including unmatched rows (FULL OUTER emulation via LEFT UNION RIGHT).

- `GET /api/reports/user-role-combos`  
  Displays all possible user × role combinations (CROSS JOIN users × roles).

- `GET /api/reports/referrals`  
  Shows referral relationships — who referred whom (SELF JOIN on users via referrals).

- `GET /api/reports/latest-login`  
  Shows each user with their most recent login (LEFT JOIN to a subquery that finds MAX(occurred_at)).

---

