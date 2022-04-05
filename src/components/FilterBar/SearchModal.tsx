import clsx from "clsx";
import { FC, useCallback, useRef, useState } from "react";
import { createFilter } from "react-select";

import CardDetail from "components/common/CardDetail";
import ColorIcon from "components/common/ColorIcon";
import Modal from "components/common/Modal";
import { isSetUnderEmbargo } from "lib/sets";
import { Card, MagicSet } from "lib/types";

import IconSelect from "./IconSelect";

interface Props {
  cards: Card[];
  set: MagicSet;
  onClose: () => void;
}

const SearchModal: FC<Props> = ({ cards, set, onClose }) => {
  const [selectedCard, setSelectedCard] = useState<Card>();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const underEmbargo = isSetUnderEmbargo(set);
  const getIcon = useCallback(
    (card: Card) => (
      <ColorIcon color={card.column} className="relative bottom-[-0.0625em]" />
    ),
    []
  );

  return (
    <Modal
      title="Search"
      onClose={onClose}
      initialFocus={inputRef}
      className="w-full h-full lg:w-auto lg:h-auto"
    >
      <IconSelect
        value={selectedCard}
        onChange={(selectedValue) => setSelectedCard(selectedValue)}
        options={cards}
        filterOption={(candidate, input) => {
          if (input.length === 0) {
            return false;
          }
          if (input.length < 2) {
            return createFilter({ matchFrom: "start" })(candidate, input);
          }
          return createFilter()(candidate, input);
        }}
        getLabel={(card) => (card ? card.name : "")}
        getIcon={getIcon}
        placeholder="Enter a card name"
        noOptionsMessage={({ inputValue }) =>
          inputValue.length === 0 ? null : "No matching cards"
        }
        className="mb-4"
        selectRef={(select) => {
          inputRef.current = select ? select.inputRef : null;
        }}
        isClearable
        autoFocus
      />
      {!selectedCard && (
        <div
          className={clsx({
            "lg:w-[912.22px] lg:h-[440px]": !underEmbargo,
            "lg:w-[522px] lg:h-[484px]": underEmbargo,
          })}
        />
      )}
      {selectedCard && (
        <CardDetail card={selectedCard} set={set} showLoadingState />
      )}
    </Modal>
  );
};

export default SearchModal;
