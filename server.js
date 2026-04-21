// Simple Express server

const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files (HTML, CSS, JS, PDFs)
app.use(express.static(path.join(__dirname)));

// Basic route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});