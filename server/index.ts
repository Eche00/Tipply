import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

// Define possible HF response types
type HFSuccess = { generated_text: string }[];
type HFError = { error: string; estimated_time?: number };
type HFResponse = HFSuccess | HFError;

app.post("/api/qwen", async (req, res) => {
  try {
    const { message } = req.body;

    const response = await fetch(
      "https://api-inference.huggingface.co/models/Qwen/Qwen2.5-7B-Instruct",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.HF_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputs: message }),
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      console.error("HF API error:", errText);
      return res
        .status(response.status)
        .json([{ generated_text: "Hugging Face API error" }]);
    }

    // Cast safely to our union type
    const data = (await response.json()) as HFResponse;
    console.log("HF raw response:", data);

    // Handle model loading error
    if (!Array.isArray(data) && "error" in data) {
      if (data.error.includes("loading")) {
        return res
          .status(503)
          .json([{ generated_text: "Model is still loading, please retry shortly." }]);
      }
      return res
        .status(500)
        .json([{ generated_text: `HF Error: ${data.error}` }]);
    }

    // Otherwise return generated text array
    res.json(data);
  } catch (err) {
    console.error("Server error:", err);
    res
      .status(500)
      .json([{ generated_text: "Failed to fetch from Hugging Face" }]);
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
