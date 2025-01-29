import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // Load API key from environment variables
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("❌ ERROR: Missing GEMINI_API_KEY in .env.local");
      return NextResponse.json({ error: "Missing AI API key." }, { status: 500 });
    }

    // ✅ Corrected Gemini API Endpoint
    const geminiResponse = await axios.post(
      `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${apiKey}`,
      {
        contents: [{ parts: [{ text: message }] }] // ✅ Correct request format
      }
    );

    return NextResponse.json({ reply: geminiResponse.data.candidates[0].content.parts[0].text });
  } catch (error) {
    console.error("❌ ERROR calling Gemini API:", error);
    return NextResponse.json({ error: "Failed to connect to AI" }, { status: 500 });
  }
}
