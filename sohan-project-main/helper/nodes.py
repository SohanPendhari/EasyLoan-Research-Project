from helper.chat_state import ChatState
from helper.llm import LLM
from helper.prompts import *
from langchain_core.messages import HumanMessage, SystemMessage , AIMessage
import json

def chat_node(state: ChatState):
    user_msg = state["messages"][-1]
    # history = state["messages"]
    with open("./loan_dataset_compressed.json") as f:
        dataset = json.load(f)

    try:
        result = LLM.invoke(
        [
            SystemMessage(content=CHAT_PROMPT),
            HumanMessage(content=f"user_message: {user_msg}"),
            HumanMessage(content=f"chat_history: {[msg.content for msg in state["messages"]]}"),
            HumanMessage(content=f"loan_dataset: {dataset}")
        ]
    )
    except Exception as e:
        print(f"error : {e}")


    return {"messages" : AIMessage(content=result.content)}

def classify_intent(state:ChatState):
    try:
        response = LLM.invoke([AIMessage(content=INTENT_PROMPT),
        json.dumps({"current_message" : state["messages"][-1].content , 
                    "chat_history" : [msg.content for msg in state["messages"]]})
                    ])
    except Exception as e:
        print("ERROR IDENTIFYING INTENT: " + str(e))
        return
    
    return { "active_intent" : response.content }

def unknown_intent(state: ChatState):
    return {"messages" : AIMessage(content="That doesn't seem related to loans. Let me know how I can help you with loan information!")}

def intent_router(state:ChatState):
    print(state["active_intent"])
    return state["active_intent"]