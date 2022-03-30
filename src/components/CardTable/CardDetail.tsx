import { FC } from "react";

import { Card } from "lib/types";

import CardImage from "./CardImage";
import DeckAnalysisTable from "./DeckAnalysisTable";
import DetailedStatsTable from "./DetailedStatsTable";

interface Props {
  card: Card;
  showStats: boolean;
}

const CardDetail: FC<Props> = ({ card, showStats }) => (
  <div className="flex flex-col gap-6 lg:flex-row">
    <div className="self-center mt-9 lg:self-start">
      <CardImage card={card} />
    </div>
    <div className="self-stretch">
      <div className="mb-2 text-lg">Deck Analysis</div>
      <DeckAnalysisTable card={card} showStats={showStats} />
    </div>
    {showStats && (
      <div className="self-stretch">
        <div className="mb-2 text-lg">Full 17Lands Stats</div>
        <DetailedStatsTable card={card} />
      </div>
    )}
  </div>
);

export default CardDetail;
