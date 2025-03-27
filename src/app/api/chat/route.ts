import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Invalid message" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("❌ ERROR: Missing GEMINI_API_KEY in .env.local");
      return NextResponse.json({ error: "Missing AI API key" }, { status: 500 });
    }

    // Updated endpoint for Gemini 2.0 Flash
    const geminiResponse = await axios.post(
      `https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        contents: [{ parts: [{ text: message }] }]
      },
      { timeout: 10000 } // Timeout to prevent hanging
    );

    // Extract the response text
    const reply = geminiResponse.data.candidates[0].content.parts[0].text;
    return NextResponse.json({ reply });
  } catch (error: string | any) {
    console.error("❌ ERROR calling Gemini API:", error.response?.data || error.message);
    return NextResponse.json(
      {
        error: error.response?.data?.error?.message || "Failed to connect to AI",
        details: error.response?.status ? `Status: ${error.response.status}` : "No response"
      },
      { status: error.response?.status || 500 }
    );
  }
}