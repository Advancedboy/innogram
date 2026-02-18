import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(__dirname, "../../../.env") });
const app = express();
const port = process.env.AUTH_PORT || 3002;
app.use(cors());
app.use(express.json());
app.get("/health", (req, res) => {
    res.json({ status: "Auth Service is running" });
});
app.listen(port, () => {
    console.log(`🔐 Auth (Express) running on http://localhost:${port}`);
});
//# sourceMappingURL=main.js.map