from helper.chat_state import ChatState
from langgraph.graph import StateGraph, END
from helper.nodes import *

builder = StateGraph(ChatState)

builder.add_node("intent_classifier", classify_intent)
builder.add_node("chat", chat_node)
builder.add_node("unknown", unknown_intent)

builder.set_entry_point("intent_classifier")

builder.add_conditional_edges(
    "intent_classifier",            
    path=intent_router,
    path_map={
        "Chat": "chat",
        "Unknown": "unknown"
    }
)
builder.add_edge("chat", END)
builder.add_edge("unknown", END)

GRAPH = builder.compile()
