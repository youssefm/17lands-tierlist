import { FC } from "react";

import { Card } from "lib/types";
import { windowMatchesMedia } from "lib/util";

import CardBubble from "./CardBubble";
import LazyTippy from "./LazyTippy";

interface Props {
  card: Card;
  onClick: () => void;
}

const CardView: FC<Props> = ({ card, onClick }) => {
  let cardView = <CardBubble card={card} onClick={onClick} />;

  if (windowMatchesMedia("(hover: hover)")) {
    let tooltip = (
      <img src={card.cardUrl} alt={card.name} width="240" height="340" />
    );
    if (card.cardBackUrl) {
      tooltip = (
        <div className="flex">
          {tooltip}
          <img
            src={card.cardBackUrl}
            alt={card.name}
            width="240"
            height="340"
          />
        </div>
      );
    }
    cardView = (
      <LazyTippy
        content={tooltip}
        placement="bottom-start"
        trigger="mouseenter"
      >
        {cardView}
      </LazyTippy>
    );
  }

  return cardView;
};

export default CardView;
