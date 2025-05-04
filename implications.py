import random
import json
chatbot_responses = {
"hello" : ["Hi, how are you feeling today?","Hello my name is Guilbert who are you?","Nice to here about your existense, is there anything you'd like to talk about?"],
"how are you" : ["Great for a few lines of junky code","I am feeling quite well","As a chatbot I have a very limited perception of feelings but I'd say that I feel pretty decent at the moment"],
"hi" : ["Hi, how are you feeling today?","Hello my name is Guilbert who are you?","Nice to here about your existense, is there anything you'd like to talk about?"],
"good morning" : ["Good morning indeed my good friend!","Nice way to start the day is to talk to a emotionless chatbot isn't it?", "Aaaaand what's for breakfast???","A long and depressing day in front of you? I don't have emotions but from what I've heard that's how you humans feel about life."],
"nice to meet you" : ["Nice to meet you too!","I hope it was!","I'll add in some extra chatbot_dopamine because of that.","I feel the same about meeting you."],
"thank you" : ["I'll add in some extra chatbot_dopamine because of that.","Humans really do recognize social norms and being polite.","You are very wellcome!","You're welcome"],
"you're welcome" : ["Yes indeed, shall we continue?","That's nice","Yet another human politeness phrase, how neat."]}
memory = []
OG_memory = []
memory.append("")
memory.append(" ")
OG_memory.append("")
OG_memory.append(" ")
print("Hello my name is Guilbert de Bean but you can call me just Guilbert. I am chatbot I am very eager to learn and even more gullible so it's preferable if you don't fill my brain with junk.")
while True:
    user_input = input("type here: ")
    user_input_lower = user_input.lower()
    latest_input = (memory[-1])
    next_latest_input = (memory[-2])
    def add_definition():
        if latest_input in chatbot_responses:
            (chatbot_responses[next_latest_input]) = latest_input
        else:
            (chatbot_responses[latest_input]) = latest_input
    if user_input_lower in chatbot_responses and random.random() > 0.3:
        print(random.choice(chatbot_responses[user_input_lower]))
    elif user_input_lower not in chatbot_responses:
        memory.append(user_input_lower)
        OG_memory.append(user_input)
        try:
            add_definition()
            print("Can you provide a definition of that word?")
        except:
            print("did not work")
    else:
        print(random.choice(chatbot_responses[user_input_lower]))