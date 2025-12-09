# Game Catalog – SoftUni React 2025

## Description
**Game Catalog** is a web application that allows users to explore existing games, create new ones, edit or delete their own games, and interact socially through likes and comments.  
The platform also provides a personal profile page where users can track their activity.

The project was built as part of the **SoftUni React 2025** course.

---

## Features
- User authentication (register, login, logout)
- Game catalog with detailed game pages
- Create, edit, and delete games
- Like and comment system
- Personal profile page showing:
  - Created games
  - Liked games
  - User comments
- Admin privileges (full control over games and a verify feature)

---

## Technologies Used
- React
- React Router
- React Context
- Custom hooks
- Bootstrap
- SoftUni Practice Server

---
### Utils

Helper functions to improve readability in hooks.

- **`buildGameMeta.js`** – Generates metadata for games for display purposes.
- **`normalizeImageUrl.js`** – Ensures game images are loaded correctly, providing a fallback if missing.

### Services

Handles communication with the backend API:

- **`auth.js`** – Manages login, registration, and logout operations.
- **`games.js`** – Performs CRUD operations for games, including likes/upvotes.
- **`interactions.js`** – Manages likes and comments for each game.

### Hooks

Custom React hooks that encapsulate logic for reusability and cleaner components:

- **`useGame.js`** – Fetches a single game by ID.
- **`useGames.js`** – Fetches all games for catalog views.
- **`useGameForm.js`** – Manages the state and logic for creating/editing games.
- **`useInteraction.js`** – Handles likes, comments, and related state.
- **`useProfile.js`** – Aggregates user activity for the profile page.

## Credits

### UI Template
This project uses a free HTML template which was fully converted to JSX and split into reusable React components (Live view link of template on footer):  
 https://templatemo.com/tm-589-lugx-gaming

### Backend Practice Server
Powered by the SoftUni practice server:  
 https://github.com/softuni-practice-server/softuni-practice-server

---
## How to run
git clone https://github.com/Rusevrn/Softuni-React.js-Course-Exam.git

While in client folder: npm install

/client npm run dev and /server node server

Should be on http://localhost:5173

## Project structure 
```text
project-root/
├─ Client/
│  ├─ public/
│  │  └─ assets/
│  │
│  └─ src/
│     ├─ components/
│     │  ├─ AuthForm.jsx
│     │  ├─ Contact.jsx
│     │  ├─ CreateGame.jsx
│     │  ├─ EditGame.jsx
│     │  ├─ Footer.jsx
│     │  ├─ GameForm.jsx
│     │  ├─ Header.jsx
│     │  ├─ Home.jsx
│     │  ├─ Profile.jsx
│     │  ├─ RouteGuard.jsx
│     │  ├─ catalog/
│     │  │  ├─ Catalog.jsx
│     │  │  └─ CatalogItem.jsx
│     │  └─ details/
│     │     ├─ Details.jsx
│     │     ├─ DetailsComments.jsx
│     │     ├─ DetailsHeader.jsx
│     │     └─ DetailsSection.jsx
│     │
│     ├─ contexts/
│     │  └─ UserContext.jsx
│     ├─ hooks/
│     │  ├─ useGame.js
│     │  ├─ useGames.js
│     │  ├─ useGameForm.js
│     │  ├─ useInteraction.js
│     │  └─ useProfile.js
│     ├─ services/
│     │  ├─ auth.js
│     │  ├─ games.js
│     │  └─ interactions.js
│     ├─ utils/
│     │  ├─ buildGameMeta.js
│     │  └─ normalizeImageUrl.js
│     ├─ App.jsx
│     └─ main.jsx
│
├─ Server/
│  ├─ data/
│  │  ├─ games.json
│  │  └─ interactions.json
│  └─ server.js
│
└─ README.md


