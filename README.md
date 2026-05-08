# filipeparedes.dev

Personal portfolio website built with React and Node.js, self-hosted on a home server with automated CI/CD.

🌐 **Live at [filipeparedes.dev](https://filipeparedes.dev)**

---

## Tech Stack

### Frontend
- **React** + **TypeScript**
- **Tailwind CSS**
- **Vite**
- **Framer Motion** — animations

### Backend
- **Node.js** + **TypeScript**
- **Express**
- **Prisma** + **MongoDB**
- **Resend** — email delivery

### Infrastructure
- **Self-hosted** on a home server running Proxmox
- **Nginx** — reverse proxy
- **PM2** — process manager
- **Cloudflare** — DNS + DDoS protection + SSL
- **GitHub Actions** — automated CI/CD on push to main

---

## Project Structure

```
portfolio/
├── backend/
│   └── src/
│       ├── lib/
│       │   └── prisma.ts       # Prisma client
│       ├── routes/
│       │   └── api.ts          # API routes
│       └── server.ts           # Express server entry point
├── frontend/
│   ├── public/
│   │   └── favicon.png
│   └── src/
│       ├── components/
│       │   ├── ui/             # Reusable UI components
│       │   ├── About.tsx
│       │   ├── Contact.tsx
│       │   ├── Footer.tsx
│       │   ├── Intro.tsx
│       │   └── Projects.tsx
│       ├── services/
│       │   └── api.ts          # API client
│       ├── App.tsx
│       ├── main.tsx
│       └── index.css
├── ecosystem.config.js         # PM2 config
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deploy workflow
└── README.md
```

---

## Architecture

```
Browser
  └── Cloudflare (DNS + Proxy + DDoS protection)
        └── Nginx (reverse proxy)
              ├── / → frontend/dist (static files)
              └── /api/ → Node.js backend (PM2)
                    └── MongoDB (separate LXC container)
```

---

## Running Locally

### Prerequisites
- Node.js 20+
- MongoDB instance

### Backend

```bash
cd backend
npm install
cp .env.example .env  # fill in your values
npm run dev
```

### Frontend

```bash
cd frontend
npm install
cp .env.example .env  # fill in your values
npm run dev
```

---

## Environment Variables

### Backend `.env`
```
PORT=5000
DATABASE_URL=mongodb+srv://...
API_URL=http://localhost:5000/api
RESEND_API_KEY=...
```

### Frontend `.env`
```
VITE_API_URL=http://localhost:5000/api
```

---

## CI/CD

Every push to `main` triggers a GitHub Actions workflow that:

1. SSHs into the home server
2. Pulls the latest code
3. Builds frontend and backend
4. Restarts the PM2 process

---

## Author

**Filipe Paredes** — [filipeparedes.dev](https://filipeparedes.dev) · [filipeparedes3@gmail.com](mailto:filipeparedes3@gmail.com)