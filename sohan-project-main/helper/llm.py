from langchain_google_genai import ChatGoogleGenerativeAI

API_KEY = "AIzaSyA_RjuqXS46gahsNMznW63W_YSpodEFPa4"

LLM = ChatGoogleGenerativeAI(
    model="gemini-2.5-flash",
    temperature=0.7,
    google_api_key=API_KEY
)
