# Rakuten Symphony Auth App

A minimal full-stack authentication app built with FastAPI and React TypeScript.

## Tech Stack

**Backend:** Python 3.11, FastAPI, SQLite, SQLAlchemy, JWT, bcrypt

**Frontend:** React 18, TypeScript, Vite, React Router v6, Axios

## Setup & Run

### Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8080
```
API docs: http://127.0.0.1:8080/docs

### Frontend
```bash
cd frontend
npm install
npm run dev
```
App: http://localhost:5173

## API Endpoints

| Method | Endpoint | Protected | Description |
|--------|----------|-----------|-------------|
| POST | /api/auth/signup | No | Register new user |
| POST | /api/auth/signin | No | Login, returns JWT |
| GET | /api/me | Yes | Get current user |
| POST | /api/auth/signout | No | Sign out |
