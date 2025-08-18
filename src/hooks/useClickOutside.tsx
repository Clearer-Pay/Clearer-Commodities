import { useEffect, RefObject } from 'react';

type Handler = () => void;

const useClickOutside = (
  refs: RefObject<HTMLElement> | RefObject<HTMLElement>[], 
  handler: Handler, 
  buttonRefs?: RefObject<HTMLElement> | RefObject<HTMLElement>[]
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      // Normalize refs to an array
      const refsArray = Array.isArray(refs) ? refs : [refs];
      const buttonRefsArray = buttonRefs ? (Array.isArray(buttonRefs) ? buttonRefs : [buttonRefs]) : [];

      // Check if the click is outside all ref elements
      const isOutsideRefs = refsArray.every(ref => ref.current && !ref.current.contains(target));

      // Check if the click is outside all buttonRefs, if they are provided
      const isOutsideButtonRefs = buttonRefsArray.every(ref => ref.current && !ref.current.contains(target));

      // Trigger the handler if the click is outside all refs and buttonRefs
      if (isOutsideRefs && isOutsideButtonRefs) {
        handler();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [refs, handler, buttonRefs]);
};

export default useClickOutside;
