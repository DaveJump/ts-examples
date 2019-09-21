// provide this context

interface Card {
  suit: string
  card: number
}

interface Deck {
  suits: string[]
  cards: number[]
  createCardPicker(): () => Card
}

let deck: Deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker (this: Deck) {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52)
      let pickedSuit = Math.floor(pickedCard / 13)

      return {
        suit: this.suits[pickedSuit],
        card: pickedCard % 13
      }
    }
  }
}

let cardPicker = deck.createCardPicker()
let { card, suit } = cardPicker()

console.log('card: ' + card + ' of ' + suit)

interface UIElement {
  addClickListener(onclick: (this: void, e: Event) => void): void
}

class Handler {
  type: string

  onClickBad = (e: Event) => {
    this.type = e.type
    console.log(this, 'this')
  }
}

let h = new Handler()

let uiElement: UIElement = {
  addClickListener () {

  }
}
uiElement.addClickListener(h.onClickBad)
