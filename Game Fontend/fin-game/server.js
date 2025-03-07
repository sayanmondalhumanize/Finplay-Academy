import express from "express";
import axios from "axios";
import fs from "fs";
import path from "path";

const app = express();
const PORT = process.env.PORT || 5000;

const API_URL = "https://api.mfapi.in/mf";
const DATA_DIR = path.join(process.cwd(), "/src/dummydata");
const FILE_PATH = path.join(DATA_DIR, "mutual_funds.json");

app.get("/fetch-mutual-funds", async (req, res) => {
    try {
        const response = await axios.get(API_URL);
        const mutualFunds = response.data;

        // Ensure the directory exists
        if (!fs.existsSync(DATA_DIR)) {
            fs.mkdirSync(DATA_DIR, { recursive: true });
        }

        // Formatting data into readable JSON structure
        const formattedData = mutualFunds.map(fund => ({
            schemeCode: fund.schemeCode,
            schemeName: fund.schemeName,
            ISIN: {
                Growth: fund.isinGrowth || "N/A",
                DividendReinvestment: fund.isinDivReinvestment || "N/A"
            }
        }));

        // Writing data to JSON file
        fs.writeFileSync(FILE_PATH, JSON.stringify(formattedData, null, 4));

        console.log("✅ Mutual fund data successfully stored.");
        res.status(200).json({ message: "Data stored successfully", data: formattedData });

    } catch (error) {
        console.error("❌ Error fetching mutual funds:", error);
        res.status(500).json({ message: "Error fetching data" });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
