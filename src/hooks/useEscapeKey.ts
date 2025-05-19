import * as React from "react";

type ClickEscapeKeyProps = {
  open: boolean;
  setOpen: (arg: boolean) => void;
};

export const useEscapeKey = ({ open, setOpen }: ClickEscapeKeyProps) => {
  // close if the esc key is pressed
  React.useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!open || keyCode !== 27) return;
      setOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });
};
