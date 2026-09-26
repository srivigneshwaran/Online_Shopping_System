# Online Shopping System (E-Commerce Platform)

A full-stack e-commerce web application built with **React** (Vite + Tailwind CSS) on the frontend and **Django** (Django REST Framework + PostgreSQL) on the backend.

## 🚀 Tech Stack

### Frontend
- **React 18** (via Vite)
- **Tailwind CSS v3.4** (Styling)
- **React Router DOM** (Navigation)
- **Axios** (API requests)
- **React Context API** (State Management)

### Backend
- **Django 6** & **Django REST Framework (DRF)**
- **JWT Authentication** (via `djangorestframework-simplejwt`)
- **PostgreSQL** (Production DB) / **SQLite** (Local Dev DB)
- **Python-Decouple** (Environment variable management)

## 📁 Project Structure

- `ecommerce-backend/` - The Django API and backend logic.
- `ecommerce-frontend/` - The React user interface.

## 🛠️ Local Development Setup

### 1. Backend Setup (Django)

1. Navigate to the backend directory:
   ```bash
   cd ecommerce-backend
   ```
2. Activate your virtual environment (create one if it doesn't exist):
   ```bash
   # Windows
   ..\venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
   *(Note: Ensure you have `django`, `djangorestframework`, `django-cors-headers`, `djangorestframework-simplejwt`, `python-decouple`, `psycopg2-binary`, etc., installed).*
4. Create a `.env` file in the `ecommerce-backend` directory based on the `.env.example` (or use default SQLite for testing).
5. Apply database migrations:
   ```bash
   python manage.py migrate
   ```
6. Run the server:
   ```bash
   python manage.py runserver
   ```
   The backend API will be available at `http://localhost:8000/api/`

### 2. Frontend Setup (React)

1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd ecommerce-frontend
   ```
2. Install Node dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   The React app will be available at `http://localhost:5173/`

## 🔑 Key Features
- JWT-based User Authentication (Login / Register).
- Browse products with filtering and search capabilities.
- Add products to a persistent Shopping Cart.
- Checkout process and Order History management.
- Admin panel (via Django Admin) to manage products, categories, and orders.

## 🌍 Deployment Strategy
- **Frontend:** Vercel (Auto-deploy via GitHub integration).
- **Backend:** Render or Railway (Dockerized or Python native environment).
- **Database:** Managed PostgreSQL instance on Render/Railway.
