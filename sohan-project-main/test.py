from helper.graph import GRAPH
from helper.chat_state import ChatState
from langchain_core.messages import HumanMessage
import asyncio

# initial state
STATE = ChatState(messages=[], active_intent="", understanding=[])

print("Welcome to the Gardening Chat Service! Type 'exit' to quit.")

async def chat_loop():
    while True:
        user_input = input("You: ")
        if user_input.lower() == "exit":
            break

        # add user input to the state
        STATE["messages"].append(HumanMessage(content=user_input))

        try:
            # invoke the graph and get the final result
            result = await GRAPH.ainvoke(STATE)
            print("\nBot:", result["messages"][-1].content , "\n")
        except Exception as e:
            print(f"Error: {e}")
            print("\nBot: Sorry, something went wrong. Please try again. \n")

if __name__ == "__main__":
    asyncio.run(chat_loop())
