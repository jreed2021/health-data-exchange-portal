# Project: Health Data Exchange Portal
# Description: Minimal full-stack app simulating secure health data exchange using FastAPI

from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import io
import datetime

app = FastAPI()

# Enable CORS so the frontend can communicate with the backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace "*" with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Store uploaded file logs in memory
logs = []

@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    contents = await file.read()
    df = pd.read_csv(io.BytesIO(contents))
    log_entry = {
        "filename": file.filename,
        "timestamp": datetime.datetime.now().isoformat(),
        "rows": len(df)
    }
    logs.append(log_entry)
    return {
        "filename": file.filename,
        "preview": df.head().to_dict()
    }

@app.get("/logs")
def get_logs():
    return logs


