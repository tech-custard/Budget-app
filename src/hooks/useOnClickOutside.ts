import { useEffect, useRef } from "react";

interface ClickOutsideProps {
  open: boolean;
  setOpen: (arg: boolean) => void;
}

export const useOnClickOutside = ({ open, setOpen }: ClickOutsideProps) => {
  const trigger = useRef<any>(null);
  const component = useRef<any>(null);

  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (
        !open ||
        !component.current ||
        !trigger.current ||
        component.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setOpen(false);
    };

    document.addEventListener("mousedown", clickHandler);
    return () => document.removeEventListener("mousedown", clickHandler);
  }, [open, setOpen]);

  return { trigger, component };
};
