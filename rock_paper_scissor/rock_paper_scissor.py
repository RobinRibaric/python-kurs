import random

values = ['rock', 'paper', 'scissor']

def is_win(player, opponent):
    if (player == 'scissor' and opponent == 'paper') or (player == 'rock' and opponent == 'scissor') or (player == 'paper' and opponent == 'rock'):
        return True

def play():
    while True:
        user = input("Your choice: ").lower()
        if(user not in values):
            print("Invalid input. You must choose rock, paper or scissor.")
        else:
            break
    computer = random.choice(values)

    if user == computer:
        print(f"Both players selected {user}. It's a tie!")
        return

    if is_win(user, computer):
        print(f"You won! The computer chose {computer}.")
        return

    print(f"You lost! The computer chose {computer}.")

if __name__ == "__main__":
    play()