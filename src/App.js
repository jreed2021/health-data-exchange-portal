import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [file, setFile] = useState(null);
  const [logs, setLogs] = useState([]);
  const [preview, setPreview] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);
    const res = await axios.post("http://127.0.0.1:8000/upload", formData);
    setPreview(res.data.preview);
    fetchLogs();
  };

  const fetchLogs = async () => {
    const res = await axios.get("http://127.0.0.1:8000/logs");
    setLogs(res.data);
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>📊 Health Data Exchange Portal</h1>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload CSV</button>

      <h2>Upload Preview:</h2>
      <pre>{preview ? JSON.stringify(preview, null, 2) : "No file uploaded yet"}</pre>

      <h2>Audit Log:</h2>
      <ul>
        {logs.map((log, i) => (
          <li key={i}>
            {log.timestamp} — {log.filename} ({log.rows} rows)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

