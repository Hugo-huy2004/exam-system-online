const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

app.post("/submit", (req, res) => {
    const data = req.body;
    fs.writeFileSync("server/database.json", JSON.stringify(data, null, 2));
    res.json({ message: "Bài thi đã được nộp!" });
});

app.listen(3000, () => console.log("Server đang chạy trên cổng 3000"));
