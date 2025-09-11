// // ../../lib/openai/deepseek.ts

// export async function askDeepSeek(prompt: string): Promise<string> {
//   try {
//     const res = await fetch("/api/deepseek", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ prompt }),
//     });

//     if (!res.ok) {
//       throw new Error(`HTTP error! status: ${res.status}`);
//     }

//     const data = await res.json();
//     return data.reply || " No response";
//   } catch (error) {
//     console.error("DeepSeek API error:", error);
//     return "Error getting AI response";
//   }
// }


export async function askDeepSeek(prompt: string): Promise<string> {
  try {
    // Mocked response
    return `This is a mock answer for testing. "${prompt}"`;
  } catch (error) {
    console.error("DeepSeek API error:", error);
    return "Error getting AI response";
  }
}
