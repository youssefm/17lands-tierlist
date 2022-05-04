import { FC } from "react";

import CardTable from "components/CardTable";
import FilterBar from "components/FilterBar";
import usePageBodyState from "hooks/usePageBodyState";
import MagicSet from "lib/MagicSet";
import { Card } from "lib/types";

interface Props {
  set: MagicSet;
  cards: Card[];
}

const PageBody: FC<Props> = ({ set, cards }) => {
  const {
    displayedCards,
    selectedSet,
    changeSet,
    deck,
    setDeck,
    visibleRarities,
    setVisibleRarities,
    visibleCardTypes,
    setVisibleCardTypes,
    cardDictionary,
    showSkeletons,
  } = usePageBodyState(set, cards);

  return (
    <div>
      <FilterBar
        selectedSet={selectedSet}
        changeSet={changeSet}
        deck={deck}
        setDeck={setDeck}
        visibleRarities={visibleRarities}
        setVisibleRarities={setVisibleRarities}
        visibleCardTypes={visibleCardTypes}
        setVisibleCardTypes={setVisibleCardTypes}
        searchSet={set}
        searchCards={displayedCards}
      />
      <CardTable
        cardDictionary={cardDictionary}
        set={set}
        showSkeletons={showSkeletons}
      />
    </div>
  );
};

export default PageBody;
