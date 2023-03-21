import random

def start_game():
    originalWord = get_random_word()
    word = originalWord.lower()
    guessed_letters = set()
    incorrect_guesses = 0
    max_incorrect_guesses = 10

    print(f"Welcome to Hangman! The word has {len(word)} letters. You have {max_incorrect_guesses} incorrect guesses allowed. The game is case insensitive.")

    while incorrect_guesses < max_incorrect_guesses:
        print(display_word(word, guessed_letters))
        guess = input("Guess a letter: ").lower()

        if guess in guessed_letters:
            print("You already guessed that letter!")
            continue

        guessed_letters.add(guess)

        if guess in word:
            print("Good guess!")
        else:
            incorrect_guesses += 1
            print(f"Wrong guess! You have {max_incorrect_guesses - incorrect_guesses} incorrect guesses remaining.")

        if set(word).issubset(guessed_letters):
            print(f"Congratulations! You guessed the word '{word}' correctly!")
            break
    else:
        print(f"Game over! The word was '{originalWord}'.")


def get_random_word():
    words = ['Jedi', 'Sith', 'Lightsaber', 'Blaster', 'Droid', 'Clone', 'Rebel', 'Empire', 'Wookiee', 'Padawan', 'Force', 'Galactic', 'Tatooine', 'Death Star', 'Star Destroyer', 'X-wing', 'TIE Fighter', 'Millennium Falcon', 'Beskar', 'Mandalorian']
    words = ['Beskar']

    return random.choice(words)

def display_word(word, guessed_letters):
    result = ''
    for letter in word:
        if letter in guessed_letters:
            result += letter
        else:
            result += '_'
    return result




start_game()
