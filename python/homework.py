'''
print("Enter two numbers to add them together. Enter 'X' exit program.")

input_on = True

while input_on:
    number_1 = input("First Number = ").lower()
    if  number_1 == 'x':
        break
    number_2 = input("Second Number = ").lower()
    if  number_2 == 'x':
        break

    try:
        sum = float(number_1) + float(number_2)
        print(f"Solution = {sum}")
        input_on = False
    
    except ValueError:
        print("Error! Can only add numbers!")
'''

'''
files = ['cats1.txt', 'dogs.txt']

for file in files:
    try:
        with open(file) as fo:
            for line in fo:
                print(line.strip())
    except FileNotFoundError:
        print(f"{file} does not exist.")
'''

'''
file = 'the-communist-manifesto.txt'
with open(file, 'r', encoding='utf8') as fo:
    lines = fo.readlines()
keyword = 'class'
count = 0
for line in lines:
    count += line.strip().lower().count(keyword)
print(count)
'''

'''
Write a program that prompts for the user’s favorite number. Use json.dump() to store this number in a file. Write a separate program that reads in this value and prints the message, “I know your favorite number! It’s _____.”
'''
import json

usernames = 'usernames.json'

try:
    with open(usernames) as fo:
        fave_num = json.loads(fo.read())
        print(f"I know your favorite number! It’s {fave_num}.")

except FileNotFoundError:
    fave_num = input("What's your favorite number? ")
    buffer = json.dumps(fave_num)
    with open(usernames, 'w') as fo:
        fo.write(buffer)


'''
TASK 2: Combine the two programs from TASK 1 into one file. If the number is already stored, report the favorite number to the user. If not, prompt for the user’s favorite number and store it in a file. Run the program twice to see that it works.
'''

'''
TASK 3: The final listing in the code provided assumes either that the user has already entered their username or that the program is running for the first time. We should modify it in case the current user is not the person who last used the program. Before printing a welcome back message in greet_user(), ask the user if this is the correct username. If it’s not, call get_new_username() to get the correct username.
'''

'''
import json

def get_stored_username():
    """Get stored username if available."""
    filename = 'usernames.json'
    try:
        with open(filename) as f:
            username = json.load(f)
    except FileNotFoundError:
        return None
    else:
        return username

def get_new_username():
    """Prompt for a new username."""
    username = input("What is your name? ")
    filename = 'usernames.json'
    with open(filename, 'w') as f:
        json.dump(username, f)
    return username

def greet_user():
    """Greet the user by name."""
    username = get_stored_username()
    if username:
        print(f"Welcome back, {username}!")
    else:
        username = get_new_username()
        print(f"We'll remember you when you come back, {username}!")

greet_user()
'''