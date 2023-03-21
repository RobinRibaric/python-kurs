import random
from deck_of_cards import deck_of_cards

def shuffle_deck(deck):
    shuffled_deck = random.sample(deck, len(deck))
    return shuffled_deck

def calculate_points(hand):
    points = 0
    for card in hand:
        points += card['points']
    return points

def start_game():
    shuffled_deck = shuffle_deck(deck_of_cards)
    player_hand = []
    dealers_hand = []
    player_hand.append(shuffled_deck.pop())
    player_hand.append(shuffled_deck.pop())
    dealers_hand.append(shuffled_deck.pop())
    dealers_hand.append(shuffled_deck.pop())

    while True:
        current_cards = [card['card'] for card in player_hand]
        hand_value = sum(card['points'] for card in player_hand)
        dealers_value = sum(card['points'] for card in dealers_hand)
        dealers_cards = [card['card'] for card in dealers_hand]
        print(f"Player hand: {current_cards}, value: {hand_value}")
        print(f"Dealers hand: {dealers_cards[:1]}, value: {dealers_value}")

        should_deal_card = input("Would you like another a card? (y/n) ")
        if should_deal_card == 'y':
            player_hand.append(shuffled_deck.pop())
            if calculate_points(player_hand) > 21:
                print("Your are busted! You lose.")
                return
        elif should_deal_card == 'n':
            break
        else:
            print("Invalid input. Please choose 'y' or 'n'.")

    while calculate_points(dealers_hand) < 17:
        dealers_hand.append(shuffled_deck.pop())
        dealers_cards = [card['card'] for card in dealers_hand]

        player_value = calculate_points(player_hand)
        dealers_value = calculate_points(dealers_hand)

        print(f"Player hand: {player_hand}, value: {player_value}")
        print(f"Computer hand: {dealers_hand}, value: {dealers_value}")
        
        if dealers_value > 21:
            print("Dealer is busted! You win!")
        elif player_value > dealers_value:
            print("You have a higher hand value! You win!")
        elif player_value < dealers_value:
            print("Dealer has a higher hand value! You lose.")
        else:
            print("It's a tie!")


start_game()   