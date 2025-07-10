# Health Data Exchange Portal

This project is a full-stack web application that simulates a secure health data exchange portal. It allows users to upload CSV files (e.g., patient data), preview the data, and log each upload action with a timestamp.

---

## 🧠 What This App Does

- Uploads CSV files from a React frontend
- Sends them to a FastAPI backend
- Parses the CSV using pandas
- Displays a data preview
- Logs the filename, upload time, and row count

---

## ⚙️ Tech Stack

**Frontend**:
- React
- Axios

**Backend**:
- FastAPI
- Uvicorn
- Pandas
- Python

---

## 📂 File Structure

```
health-data-portal/
│
├── backend/
│   ├── main.py
│   └── health_venv/ (your virtual environment)
│
├── frontend/
│   ├── src/
│   │   └── App.js (custom React code)
│   └── public/, node_modules/, package.json, etc.
│
└── patients.csv (sample file)
```

---

## 🚀 How to Run the App

### Backend (FastAPI)
1. Navigate to backend folder
2. Activate your virtual environment:
   - `health_venv\Scripts\activate`
3. Start the server:
   - `uvicorn main:app --reload`
4. Visit [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)

### Frontend (React)
1. Navigate to frontend folder
2. Install dependencies: `npm install`
3. Start app: `npm start`
4. Visit [http://localhost:3000](http://localhost:3000)

---

## 📤 Deployment Ideas

- Deploy frontend to Netlify or Vercel
- Use Render or Railway for the FastAPI backend

---

Made with 💛 by Janessa
