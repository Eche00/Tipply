// server/deepseek.ts
import express from "express";
import OpenAI from "openai";

const app = express();
app.use(express.json());

const client = new OpenAI({
  apiKey: "sk-97bd0b5c33764d758713a62e9fc08d28",
  baseURL: "https://api.deepseek.com/v1",
});

app.post("/api/deepseek", async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await client.chat.completions.create({
      model: "deepseek-chat",
      messages: [{ role: "user", content: prompt }],
    });

    res.json({ reply: response.choices[0].message?.content });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "DeepSeek API failed" });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
