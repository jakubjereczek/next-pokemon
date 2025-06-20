import { useEffect } from 'react';

function useLockBodyScroll(enabled: boolean): void {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    if (enabled) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      if (enabled) {
        document.body.style.overflow = originalStyle;
      }
    };
  }, [enabled]);
}

export default useLockBodyScroll;
