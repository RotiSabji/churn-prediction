# ChurnPredict - Next.js Frontend

A modern, responsive Next.js application for customer churn prediction with built-in authentication.

## Features

- 🎨 Modern and responsive landing page
- 🔐 User authentication (Login/Signup) with SQLite database
- 🎯 Clean and intuitive UI with Tailwind CSS
- 🔄 Seamless redirect to Flask prediction app after login
- 📱 Mobile-responsive design
- 🛡️ Secure password hashing with bcrypt

## Getting Started

### Prerequisites

- Node.js (v20.x, 22.x, 23.x, or 24.x recommended)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
frontned/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── auth/
│   │   │       ├── login/route.ts    # Login API endpoint
│   │   │       └── signup/route.ts   # Signup API endpoint
│   │   ├── login/
│   │   │   └── page.tsx              # Login page
│   │   ├── signup/
│   │   │   └── page.tsx              # Signup page
│   │   ├── layout.tsx                # Root layout
│   │   ├── page.tsx                  # Landing page
│   │   └── globals.css               # Global styles
│   ├── components/
│   │   └── Navbar.tsx                # Navigation component
│   └── lib/
│       └── db.ts                     # SQLite database utility
├── users.db                          # SQLite database (auto-created)
└── package.json
```

## Configuration

### Flask App URL

The login page redirects to the Flask app after successful authentication. Update the URL in `/src/app/login/page.tsx`:

```typescript
// Line ~30 in login/page.tsx
window.location.href = 'http://localhost:5000/predict';
```

Change `http://localhost:5000/predict` to your actual Flask app URL.

## Database

The app uses SQLite for user authentication. The database file (`users.db`) is automatically created in the root directory on first run.

### Schema

```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  name TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)
```

## API Endpoints

### POST /api/auth/signup
Create a new user account.

**Request body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

### POST /api/auth/login
Authenticate a user.

**Request body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

## Pages

### Landing Page (/)
- Hero section with CTA buttons
- Features showcase
- How it works section
- About section
- Call-to-action section
- Footer

### Login Page (/login)
- Email and password form
- Redirects to Flask app on successful login
- Link to signup page

### Signup Page (/signup)
- Name, email, and password registration form
- Password requirements (min 8 characters)
- Link to login page

## Styling

The app uses:
- **Tailwind CSS v4** for styling
- **Gradient backgrounds** for visual appeal
- **Hover effects** and **transitions** for interactivity
- **Responsive design** with mobile-first approach

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 16** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **SQLite** (better-sqlite3) - Database
- **bcryptjs** - Password hashing

## Notes

- The app stores user credentials securely with bcrypt hashing
- SQLite is used for simplicity; consider PostgreSQL/MySQL for production
- Session management can be added using next-auth or similar libraries
- The Flask app URL is currently a placeholder - update it with your actual endpoint

## License

MIT
