export async function askQwen(message: string) {
  try {
    const res = await fetch("/api/qwen", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Backend error:", text);
      return "Error fetching response from backend.";
    }

    const data = await res.json();
    return data[0]?.generated_text || "No response";
  } catch (err) {
    console.error("Qwen frontend error:", err);
    return "Error fetching response.";
  }
}
