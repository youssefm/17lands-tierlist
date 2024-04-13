import clsx from "clsx";
import CreatureIcon from "mana-font/svg/creature.svg";
import EnchantmentIcon from "mana-font/svg/enchantment.svg";
import InstantIcon from "mana-font/svg/instant.svg";
import LandIcon from "mana-font/svg/land.svg";
import { FC } from "react";

import { TRANSITION_CLASSES } from "lib/styles";
import { CardType } from "lib/types";

import IconFilterGroup from "./IconFilterGroup";

const ICON_PROPS = {
  width: "1.15714286em",
  height: "0.9em",
  className: clsx(
    "paint-order-stroke stroke-neutral-300 dark:stroke-black",
    TRANSITION_CLASSES
  ),
};

const FILTERS = [
  {
    label: "creatures",
    values: [CardType.CREATURE],
    icon: <CreatureIcon {...ICON_PROPS} />,
  },
  {
    label: "instants and sorceries",
    values: [CardType.INSTANT, CardType.SORCERY],
    icon: <InstantIcon {...ICON_PROPS} />,
  },
  {
    label: "artifacts, enchantments, battles, and planeswalkers",
    values: [
      CardType.ARTIFACT,
      CardType.ENCHANTMENT,
      CardType.BATTLE,
      CardType.PLANESWALKER,
    ],
    icon: <EnchantmentIcon {...ICON_PROPS} />,
  },
  {
    label: "lands",
    values: [CardType.LAND],
    icon: <LandIcon {...ICON_PROPS} />,
  },
];

interface Props {
  values: Set<CardType>;
  setValues: (cardTypes: Set<CardType>) => void;
}

const CardTypeFilter: FC<Props> = ({ values, setValues }) => (
  <IconFilterGroup
    values={values}
    setValues={setValues}
    filters={FILTERS}
    className="text-2xl"
  />
);

export default CardTypeFilter;
