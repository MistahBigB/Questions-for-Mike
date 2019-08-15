#guess.py
# Lab 8: Guess the Number
'''
Let's play 'Guess the Number', the computer will choose a random int between 1 and 10. The user will then try to guess the number, and the program will tell them whether they're right or wrong.

## Advanced Version 1

Tell the user whether their guess is above ('too high!') or below ('too low!') the target value.

## Advanced Version 2

Keep track of how many guesses the user has made, and tell them at the end.

## Advanced Version 3

Using a `while` loop, allow the user to guess 10 times. If they fail to guess the number after 10 tries, the user is told they've lost.

## Advanced Version 4

Tell the user whether their current guess is closer than their last.

## Super Advanced Version 1

Swap the user with the computer: the user will pick a number, and the computer will guess until they get it right.
'''

import random

computer_num = random.randint(1,50)
print("Let's play 'Guess the Number!' Pick a number, 1-50")
print(computer_num)
print("***")
def num_check():
    user_num = (input("What is your guess?"))
    if user_num.isdigit():
        user_num = int(user_num)
    else:
        print("Hey, that's not a number!")
    return user_num

#get a guess1
#see if guess1 is the correct answer
#if not, get another guess2
#compare guess2 to guess1
#calculate if guess2 is closer to the answer than guess1
#if abs(guess1-num) < abs(guess2-num), then guess1 is closer
#print that guess2 is closer or further
#overwrite guess1 with guess2, and store the next guess as guess2
#OR store a guess3, and compare guess3 and guess2


guessing_game = "yes"
guess_counter = 0


while guessing_game == "yes" and guess_counter < 10:
    user_num_check = num_check()
    guess_counter +=1
    print(guess_counter)
    previous = 0

    guess1 = abs(user_num_check - computer_num)
    guess2 = abs(previous - computer_num)


    if user_num_check == computer_num:
        print("Congrats! You got it!")
        break
    elif user_num_check not in range(1,51):
        print("That number is out of range!")
    elif user_num_check > computer_num:
        print("Too high!")
        if guess_counter < 1 and guess1 < guess2:
            print("This guess was closer than your last!")
        elif guess_counter < 1 and guess1 > guess2:
            print("Your last guess was closer...")
        else:
            print("Try again")
    else:
        print("Too low!")
        if guess_counter < 1 and guess1 < guess2:
            print("This guess was closer than your last!")
        elif guess_counter < 1 and guess1 > guess2:
            print("Your last guess was closer...")
        else:
            print("Try again")
    previous = user_num_check

    guessing_game = input("Do you want to guess again?")

else:
    print("Sayonara")
