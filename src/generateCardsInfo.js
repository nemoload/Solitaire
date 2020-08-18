import { cardNumbers, cardSymbols } from './cardsData'
import { CardInfo } from './CardInfo'
import { shuffle } from './helpers'

export default function generateCardsInfo () {
  const finalArray = []
  const cardsPositionArray = shuffle(cardSymbols
    .flatMap(({ name, symbol }) =>
      cardNumbers.map(({ rank, index }) => CardInfo({ rank, index, name, symbol }))
    )
  )

  for (let counter = 1; counter <= 7; counter++) {
    const cardPostionsSeg = cardsPositionArray
      .splice(0, counter)
      .map(card => {
        return {
          ...card, position: counter
        }
      })
    finalArray.push(cardPostionsSeg)
  }

  return finalArray.concat(cardsPositionArray).flat()
}
