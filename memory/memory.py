import random
import os
import time

def generate_numbers_list():
    numbers = []
    num = 0
    while len(numbers) < 10:
        numbers.append(num)
        num += 1
    return numbers


def choose_random_numbers(amount, numberList):
    count = 0
    choosen_numbers = []
    while count < amount:
        count += 1
        choosen_numbers.append(random.choice(numberList))
    return choosen_numbers

def main():
    max_tries = 3
    amount_of_numbers = 6
    numbers_list = generate_numbers_list()
    print(f"Numbers list: {numbers_list}")
    choosen_numbers = choose_random_numbers(amount_of_numbers, numbers_list)
    print(f"Your numbers are: {' '.join(map(str, choosen_numbers))}")
    for i in range(3, 0, -1):
        print(f"Clearing screen in {i} seconds...")
        time.sleep(1)
    os.system('cls' if os.name == 'nt' else 'clear')
    shuffled = random.sample(choosen_numbers, len(choosen_numbers))
    print(f"Shuffled numbers are: {shuffled}")

    while True:
        answer = input("Guess the original numbers(separate with space): ").split()
        if(len(answer) != amount_of_numbers):
            print(f"You must enter {amount_of_numbers} numbers!")
            continue
        arr = [int(num) for num in answer]
        if arr == choosen_numbers:
            print("Correct! You won!")
            break
        else:
            max_tries -= 1
            print(f"Wrong! You have {max_tries} tries left.")
            if max_tries == 0:
                print("You lost!")
                break


if __name__ == "__main__":
    main()
        

