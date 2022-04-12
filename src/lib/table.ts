import { Card, Column, Deck, Grade } from "lib/types";
import { groupBy, sortBy } from "lib/util";

// eslint-disable-next-line import/prefer-default-export
export class CardTableDictionary {
  #cardsByGroup: { [index: string]: [Card, ...Card[]] };

  constructor(cards: Card[], deck: Deck) {
    const filteredCards = cards.filter((card) => deck in card.stats);
    this.#cardsByGroup = groupBy(
      filteredCards,
      (card) => `${card.column},${card.stats[deck]!.grade}`
    );

    for (const group of Object.values(this.#cardsByGroup)) {
      sortBy(group, (card) => card.stats[deck]!.winrate, true);
    }
  }

  get(column: Column, grade: Grade): Card[] {
    return this.#cardsByGroup[`${column},${grade}`] ?? [];
  }
}
