from flask import Flask, request, jsonify
from flask_cors import CORS
from helper.graph import GRAPH
from helper.chat_state import ChatState
from langchain_core.messages import HumanMessage, AIMessage
import asyncio

app = Flask(__name__)
CORS(app)

# global chat state (memory)
STATE = ChatState(messages=[], active_intent="", understanding=[])


# -------------------------
# POST /api/chat
# -------------------------
@app.route("/api/chat", methods=["POST"])
def chat_api():
    data = request.get_json()

    # frontend sends: { messages: [ {role:"user", content:"..."}, ...]}
    messages = data.get("messages", [])

    # reset memory
    STATE["messages"] = []

    # convert frontend format → LangChain format
    for msg in messages:
        role = msg.get("role")
        content = msg.get("content")

        if role == "user":
            STATE["messages"].append(HumanMessage(content=content))
        else:
            STATE["messages"].append(AIMessage(content=content))

    # run LANGCHAIN graph
    try:
        result = asyncio.run(GRAPH.ainvoke(STATE))
        bot_reply = result["messages"][-1].content
        return jsonify({"reply": bot_reply})
    except Exception as e:
        print("ERROR:", e)
        return jsonify({"reply": "Internal error"}), 500


# -------------------------
# Start Flask server
# -------------------------
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
