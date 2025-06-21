import { useEffect } from 'react';

function useIntersection(
  target: React.RefObject<Element>,
  onIntersect: () => void,
  options: IntersectionObserverInit = { threshold: 1 },
) {
  useEffect(() => {
    const entry = target.current;
    if (!entry) {
      return;
    }
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        onIntersect();
      }
    }, options);
    observer.observe(entry);
    // eslint-disable-next-line consistent-return
    return () => {
      observer.unobserve(entry);
    };
  }, [target, onIntersect, options]);
}

export default useIntersection;
