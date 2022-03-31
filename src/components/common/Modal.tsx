import { Dialog } from "@headlessui/react";
import clsx from "clsx";
import { FC, useRef } from "react";
import { IoClose } from "react-icons/io5";

import { HOVER_CLASSES, TRANSITION_CLASSES } from "lib/styles";

interface Props {
  title: string;
  onClose: () => void;
  className?: string;
}

const Modal: FC<Props> = ({ title, onClose, className, children }) => {
  const closeButtonRef = useRef(null);

  return (
    <Dialog
      open
      onClose={onClose}
      className="grid fixed inset-0 place-items-center"
      initialFocus={closeButtonRef}
    >
      <Dialog.Overlay className="fixed inset-0 z-10 bg-black/60 backdrop-blur-xs" />
      <div
        className={clsx(
          "overflow-y-auto z-20 max-h-full dark:text-neutral-100",
          "bg-white dark:bg-neutral-900 rounded-lg border border-black shadow-xl",
          className
        )}
      >
        <Dialog.Title className="flex items-center p-4 text-2xl border-b border-neutral-200 dark:border-black">
          <span className="grow font-medium">{title}</span>
          <button
            onClick={onClose}
            type="button"
            ref={closeButtonRef}
            aria-label="Close Modal"
          >
            <IoClose className={clsx(HOVER_CLASSES, TRANSITION_CLASSES)} />
          </button>
        </Dialog.Title>
        <div className="p-4">{children}</div>
      </div>
    </Dialog>
  );
};

export default Modal;
